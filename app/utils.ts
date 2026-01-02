export interface Pokemon {
  name: string;
  id: number;
}

// Simulate slow API delay (2 seconds) - runs OUTSIDE the cached fetch
const SIMULATED_DELAY_MS = 2000;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Track if this is the first fetch (to add delay only on cache MISS)
let lastFetchTime = 0;

// Use Charizard (ID: 6) - change this to force cache MISS
const POKEMON_ID = 6;

export const getPokeData = async (): Promise<{
  name: string;
  time: string;
  fetchId: string;
  cacheStatus: string;
}> => {
  // Generate unique ID BEFORE fetch to track if this code block runs
  const fetchId = `fetch-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const startTime = performance.now();
  
  console.log(`🔵 [getPokeData] Starting fetch... ID: ${fetchId}`);
  console.log(`🔵 [getPokeData] Timestamp: ${new Date().toISOString()}`);

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${POKEMON_ID}`, {
    next: { revalidate: 60 },
  });

  const fetchDuration = Math.round(performance.now() - startTime);
  
  // If fetch was fast (< 100ms), it's from cache - no delay needed
  // If fetch was slow (actual network ~200-500ms), add extra delay to make it obvious
  const isCacheHit = fetchDuration < 100;
  
  // Add artificial delay ONLY when it's a real network request (cache MISS)
  // This simulates a slow API and makes the difference very obvious
  if (!isCacheHit) {
    console.log(`🐌 [getPokeData] Simulating slow API... adding ${SIMULATED_DELAY_MS}ms delay`);
    await sleep(SIMULATED_DELAY_MS);
  }

  const totalDuration = Math.round(performance.now() - startTime);

  if (!res.ok) {
    throw new Error("Failed to fetch Pokemon data");
  }

  const data = await res.json();
  
  const cacheStatus = isCacheHit ? "HIT (from Data Cache)" : "MISS (fresh fetch)";
  
  console.log(`✅ [getPokeData] Fetch completed! ID: ${fetchId}`);
  console.log(`⏱️ [getPokeData] Duration: ${totalDuration}ms → ${cacheStatus}`);

  return { 
    name: data.name, 
    time: new Date().toLocaleTimeString(),
    fetchId,
    cacheStatus: `${totalDuration}ms - ${cacheStatus}`,
  };
};

export const getPikachuData = async (): Promise<{
  name: string;
  time: string;
}> => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Pokemon data");
  }

  return { ...res.json(), time: new Date().toLocaleTimeString() };
};
