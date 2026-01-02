import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Router Cache Demo
      </h1>
      <p className="text-lg text-slate-600 leading-relaxed">
        This app demonstrates how the Next.js <strong>Router Cache</strong> works. 
        When you navigate between routes using <code>&lt;Link /&gt;</code>, the RSC payload 
        for shared layouts and previously visited segments is stored in the browser.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
        <h3 className="font-semibold text-blue-800">How to test:</h3>
        <ul className="list-disc list-inside space-y-2 mt-2 text-blue-700">
          <li>Navigate to <strong>Route A</strong> and note the timestamp.</li>
          <li>Navigate to <strong>Route A/B</strong> and back.</li>
          <li>The timestamp will stay the same because the segment is served from the <strong>Router Cache</strong>.</li>
          <li>Try refreshing the page (F5) to see the timestamp update.</li>
        </ul>
      </div>
      <div className="flex gap-4 pt-4">
        <Link 
          href="/a" 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
        >
          Go to Route A
        </Link>
      </div>
    </div>
  );
}
