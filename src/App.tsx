import { useState } from "react";
const comps = [
  { name:"Button", code:"<button className=\"rounded-full bg-black text-white px-4 py-2\">Button</button>" },
  { name:"Card", code:"<div className=\"rounded-2xl border p-6\">Card</div>" },
];
export default function App(){
  const [q,setQ]=useState("");
  const filtered=comps.filter(c=>c.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <main className="bg-[#fdfcfa] min-h-screen text-[#1a1a1a]">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <h1 className="text-2xl font-light">component-atelier</h1>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search components" className="mt-4 w-full rounded-xl border border-[#ebe7e0] px-3 py-2 text-sm" />
        <div className="mt-6 grid gap-3">
          {filtered.map(c=>(
            <div key={c.name} className="rounded-2xl border border-[#ebe7e0] bg-white p-4">
              <h3 className="font-medium">{c.name}</h3>
              <pre className="mt-2 rounded-xl bg-[#fdfcfa] p-3 text-xs overflow-auto">{c.code}</pre>
              <button onClick={()=>navigator.clipboard.writeText(c.code)} className="mt-2 text-xs text-[#9a9590]">Copy</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
