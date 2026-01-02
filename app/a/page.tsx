import { getPokeData } from "../utils";

export default async function PageA() {
  const data = await getPokeData();
  const time = new Date().toLocaleTimeString();

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
        
        <div className="flex justify-between items-center">
          <span className="text-slate-500 font-medium">Pokemon Name:</span>
          <span className="text-xl font-semibold capitalize text-blue-600">
            {data.name}
          </span>
        </div>
      </div>

      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
        <p className="text-sm text-amber-800 italic">
          Tip: Navigate to Route A/B and back here. If the time above doesn't change, 
          it means Next.js is serving this page from the client-side Router Cache!
        </p>
      </div>
    </div>
  );
}
