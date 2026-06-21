"use client";

import { useState, useEffect } from "react";
import {
  BACKGROUND_LOCATIONS,
  BACKGROUND_MODIFIERS,
  BACKGROUND_MICROLIGHT,
  MOD_PREFIX,
  MICRO_PREFIX,
} from "../../../lib/backgroundCatalog";

interface BackgroundFormProps {
  onGenerate: (data: Record<string, unknown>) => void;
  loading: boolean;
}

const inputStyle = { background: "#0f0a08", border: "1px solid rgba(201,162,39,0.18)", color: "#cbb892" };
const labelStyle = { color: "#8a7a5c" };

function buildModOptions(ubicacion: string) {
  return [MOD_PREFIX, ...(BACKGROUND_MODIFIERS[ubicacion] || [])];
}
function buildMicroOptions(ubicacion: string) {
  return [...MICRO_PREFIX, ...(BACKGROUND_MICROLIGHT[ubicacion] || [])];
}

export default function BackgroundForm({ onGenerate, loading }: BackgroundFormProps) {
  const [ubicacion, setUbicacion] = useState(BACKGROUND_LOCATIONS[1]); // "Cocina" como en el workflow original
  const [modificador, setModificador] = useState(buildModOptions(BACKGROUND_LOCATIONS[1])[2] || MOD_PREFIX);
  const [iluminacionGlobal, setIluminacionGlobal] = useState("Luz de día natural");
  const [microluz, setMicroluz] = useState(buildMicroOptions(BACKGROUND_LOCATIONS[1])[2] || MICRO_PREFIX[0]);

  // Al cambiar ubicacion, resincroniza modificador y microluz (igual que syncAll() del JS original)
  useEffect(() => {
    const mods = buildModOptions(ubicacion);
    if (!mods.includes(modificador)) setModificador(mods[0]);
    const micros = buildMicroOptions(ubicacion);
    if (!micros.includes(microluz)) setMicroluz(micros[0]);
  }, [ubicacion]); // eslint-disable-line react-hooks/exhaustive-deps

  const modOptions = buildModOptions(ubicacion);
  const microOptions = buildMicroOptions(ubicacion);

  return (
    <div className="border" style={{ borderColor: "rgba(201,162,39,0.15)", background: "#15100c" }}>
      <div className="p-7 grid grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-wide uppercase mb-1.5" style={labelStyle}>Ubicación</label>
          <select value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} className="w-full px-3 py-2 text-sm focus:outline-none" style={inputStyle}>
            {BACKGROUND_LOCATIONS.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs tracking-wide uppercase mb-1.5" style={labelStyle}>Modificador</label>
          <select value={modificador} onChange={(e) => setModificador(e.target.value)} className="w-full px-3 py-2 text-sm focus:outline-none" style={inputStyle}>
            {modOptions.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs tracking-wide uppercase mb-1.5" style={labelStyle}>Iluminación global</label>
          <select value={iluminacionGlobal} onChange={(e) => setIluminacionGlobal(e.target.value)} className="w-full px-3 py-2 text-sm focus:outline-none" style={inputStyle}>
            {["Luz de día natural", "Atardecer", "Noche cálida", "Estudio"].map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs tracking-wide uppercase mb-1.5" style={labelStyle}>Microluz</label>
          <select value={microluz} onChange={(e) => setMicroluz(e.target.value)} className="w-full px-3 py-2 text-sm focus:outline-none" style={inputStyle}>
            {microOptions.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      </div>

      <div className="px-7 pb-7">
        <button
          onClick={() => onGenerate({ ubicacion, modificador, iluminacion_global: iluminacionGlobal, microluz })}
          disabled={loading}
          className="w-full py-3.5 text-sm font-medium tracking-wide transition disabled:opacity-30"
          style={{ background: "#c9a227", color: "#0f0a08" }}
        >
          {loading ? "Generando..." : "Generar fondo →"}
        </button>
      </div>
    </div>
  );
}
