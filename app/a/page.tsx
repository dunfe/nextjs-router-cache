import { getPokeData } from "../utils";

export default async function PageA() {
  const { name, time, fetchId, cacheStatus } = await getPokeData();

  return (
    <div className="p-8 space-y-6 max-w-2xl mx-auto">
      <div className="space-y-2">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
          Route Segment: /a
        </span>
        <h1 className="text-3xl font-bold text-slate-900">Route A</h1>
      </div>
      
      <div className="grid gap-4 bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <span className="text-slate-500 font-medium">Fetched at:</span>
          <span className="text-xl font-mono text-slate-900 bg-slate-50 px-3 py-1 rounded border border-slate-200">
            {time}
          </span>
        </div>
        
        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <span className="text-slate-500 font-medium">Pokemon Name:</span>
          <span className="text-xl font-semibold capitalize text-blue-600">
            {name}
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <span className="text-slate-500 font-medium">Fetch ID:</span>
          <span className="text-sm font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
            {fetchId}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-500 font-medium">Data Cache:</span>
          <span className="text-sm font-mono text-purple-700 bg-purple-50 px-3 py-1 rounded border border-purple-200">
            {cacheStatus}
          </span>
        </div>
      </div>

      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
        <p className="text-sm text-amber-800">
          <strong>How to prove caching:</strong> Note the <code className="bg-amber-100 px-1 rounded">Fetch ID</code> above, 
          then navigate to <code className="bg-amber-100 px-1 rounded">/a/b</code>. 
          If you see a <strong>different</strong> Fetch ID there, it means a new server request was made.
          Check your terminal for 🔵 console logs to see actual fetch calls!
        </p>
      </div>
    </div>
  );
}
