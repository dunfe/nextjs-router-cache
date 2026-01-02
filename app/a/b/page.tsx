import { getPikachuData, getPokeData } from "../../utils";

export default async function PageAB() {
  const { name, time, fetchId, cacheStatus } = await getPokeData();

  const { name: pikachuName, time: pikachuTime } = await getPikachuData();

  return (
    <div className="p-8 space-y-6 max-w-2xl mx-auto">
      <div className="space-y-2">
        <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
          Route Segment: /a/b
        </span>
        <h1 className="text-3xl font-bold text-slate-900">Route A/B</h1>
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
          <span className="text-xl font-semibold capitalize text-indigo-600">
            {name}
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <span className="text-slate-500 font-medium">Fetch ID:</span>
          <span className="text-sm font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
            {fetchId}
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <span className="text-slate-500 font-medium">Data Cache:</span>
          <span className="text-sm font-mono text-purple-700 bg-purple-50 px-3 py-1 rounded border border-purple-200">
            {cacheStatus}
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <span className="text-slate-500 font-medium">Pikachu Fetched at:</span>
          <span className="text-xl font-mono text-slate-900 bg-slate-50 px-3 py-1 rounded border border-slate-200">
            {pikachuTime}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-500 font-medium">Pikachu Name:</span>
          <span className="text-xl font-semibold capitalize text-indigo-600">
            {pikachuName}
          </span>
        </div>
      </div>

      <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
        <p className="text-sm text-indigo-800">
          <strong>Compare Fetch IDs:</strong> If the Fetch ID here is <strong>different</strong> from /a, 
          it means the function ran again (new server request). 
          The <code className="bg-indigo-100 px-1 rounded">fetch()</code> result itself may still be cached 
          via <code className="bg-indigo-100 px-1 rounded">next: &#123;revalidate: 60&#125;</code>.
        </p>
      </div>
    </div>
  );
}
