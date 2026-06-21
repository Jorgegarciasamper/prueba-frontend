"use client";

import { useState, useEffect } from "react";
import { OUTFIT_CATALOG, OUTFIT_CATEGORIES } from "../../../lib/outfitCatalog";

interface OutfitFormProps {
  onGenerate: (data: Record<string, unknown>) => void;
  loading: boolean;
}

const inputStyle = { background: "#0f0a08", border: "1px solid rgba(201,162,39,0.18)", color: "#cbb892" };
const labelStyle = { color: "#8a7a5c" };

export default function OutfitForm({ onGenerate, loading }: OutfitFormProps) {
  const [categoria, setCategoria] = useState(OUTFIT_CATEGORIES[2]);
  const [conjunto, setConjunto] = useState(OUTFIT_CATALOG[OUTFIT_CATEGORIES[2]][0]);
  const [aleatorio, setAleatorio] = useState(false);

  useEffect(() => {
    const options = OUTFIT_CATALOG[categoria] || [];
    if (!options.includes(conjunto)) {
      setConjunto(options[0] || "");
    }
  }, [categoria]); // eslint-disable-line react-hooks/exhaustive-deps

  const conjuntoOptions = OUTFIT_CATALOG[categoria] || [];

  return (
    <div className="border" style={{ borderColor: "rgba(201,162,39,0.15)", background: "#15100c" }}>
      <div className="p-7 grid grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-wide uppercase mb-1.5" style={labelStyle}>Categoría</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full px-3 py-2 text-sm focus:outline-none"
            style={inputStyle}
          >
            {OUTFIT_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs tracking-wide uppercase mb-1.5" style={labelStyle}>Conjunto</label>
          <select
            value={conjunto}
            onChange={(e) => setConjunto(e.target.value)}
            disabled={aleatorio}
            className="w-full px-3 py-2 text-sm focus:outline-none disabled:opacity-40"
            style={inputStyle}
          >
            {conjuntoOptions.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="col-span-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={aleatorio}
              onChange={(e) => setAleatorio(e.target.checked)}
              className="w-4 h-4"
              style={{ accentColor: "#c9a227" }}
            />
            <span className="text-sm" style={{ color: "#cbb892" }}>Conjunto aleatorio</span>
          </label>
        </div>
      </div>

      <div className="px-7 pb-7">
        <button
          onClick={() => onGenerate({ categoria, conjunto, aleatorio })}
          disabled={loading}
          className="w-full py-3.5 text-sm font-medium tracking-wide transition disabled:opacity-30"
          style={{ background: "#c9a227", color: "#0f0a08" }}
        >
          {loading ? "Generando..." : "Generar outfit →"}
        </button>
      </div>
    </div>
  );
}
