To demonstrate the **Router Cache**, you need to see how Next.js behaves in the browser. The Router Cache stores the **React Server Component (RSC) payload** in the browser's memory.

When you navigate from `/a` to `/a/b`, Next.js checks if it already has the data for that segment in the browser. If it does, it reuses it instead of making a new request to the server.

Here is a practical example. Note that I have omitted comments as per your preference.

### 1. The Data Fetching Utility

We use a public API with a "random" element to see if the data refreshes or stays cached.

```javascript
async function getPokeData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
    next: { revalidate: 60 }
  })
  return res.json()
}

```

### 2. The Layout (`app/layout.js`)

This provides the navigation. Because it’s a layout, it doesn't re-render when moving between `/a` and `/a/b`.

```javascript
import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav style={{ display: 'flex', gap: '20px', padding: '20px', background: '#eee' }}>
          <Link href="/a">Route A</Link>
          <Link href="/a/b">Route A/B (Sub-route)</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}

```

### 3. Route A (`app/a/page.js`)

```javascript
import { getPokeData } from '../utils'

export default async function PageA() {
  const data = await getPokeData()
  const time = new Date().toLocaleTimeString()

  return (
    <div style={{ padding: '20px' }}>
      <h1>Route A</h1>
      <p>Fetched at: {time}</p>
      <p>Name: {data.name}</p>
    </div>
  )
}

```

### 4. Route A/B (`app/a/b/page.js`)

```javascript
import { getPokeData } from '../../utils'

export default async function PageAB() {
  const data = await getPokeData()
  const time = new Date().toLocaleTimeString()

  return (
    <div style={{ padding: '20px' }}>
      <h1>Route A/B</h1>
      <p>Fetched at: {time}</p>
      <p>Name: {data.name}</p>
    </div>
  )
}

```

---

### How to observe the Router Cache:

1. **Build and Start:** Run `npm run build` and `npm run start` (Production mode is best for testing cache).
2. **Open Route A:** You will see a timestamp (e.g., `10:00:01`).
3. **Click the Link to Route A/B:** You will notice the navigation is nearly instant.
4. **The Result:** * If you navigate back and forth using the **Nav Links**, the timestamp will **not change**. This is the **Router Cache** serving the previously rendered RSC payload from browser memory.
* Next.js stores these segments for **30 seconds** (for dynamic routes) or **5 minutes** (for static routes) by default.



### Key Differences in Router Cache behavior:

| Action | Result |
| --- | --- |
| **Link Navigation** | Uses Router Cache (timestamp stays same). |
| **Browser Refresh (F5)** | Clears Router Cache (timestamp updates). |
| **`router.refresh()`** | Explicitly clears the cache for the current route. |

---