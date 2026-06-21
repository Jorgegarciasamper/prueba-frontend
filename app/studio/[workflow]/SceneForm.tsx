"use client";

import { useState } from "react";
import { SCENE_IMAGE_SLOTS, SCENE_RESOLUTIONS } from "../../../lib/workflowFields";

interface SceneFormProps {
  onGenerate: (data: Record<string, unknown>) => void;
  loading: boolean;
}

const MOCK_LIBRARY: Record<string, { id: string; name: string; thumb: string }[]> = {
  character: [
    { id: "c1", name: "Clara-Face", thumb: "https://placehold.co/100x100/15100c/c9a227?text=Clara" },
    { id: "c2", name: "Marco-Face", thumb: "https://placehold.co/100x100/15100c/c9a227?text=Marco" },
  ],
  grid: [{ id: "g1", name: "Clara-Grid", thumb: "https://placehold.co/100x100/15100c/c9a227?text=Grid" }],
  outfit: [{ id: "o1", name: "Vestido cóctel", thumb: "https://placehold.co/100x100/15100c/c9a227?text=Outfit" }],
  background: [{ id: "b1", name: "Cocina rústica", thumb: "https://placehold.co/100x100/15100c/c9a227?text=Fondo" }],
};

export default function SceneForm({ onGenerate, loading }: SceneFormProps) {
  const [prompt, setPrompt] = useState("");
  const [resolution, setResolution] = useState(SCENE_RESOLUTIONS[0]);
  const [selections, setSelections] = useState<Record<string, string>>({});

  function selectImage(nodeId: string, imageId: string) {
    setSelections((s) => ({ ...s, [nodeId]: imageId }));
  }

  const requiredOk = selections["315"] && selections["358"];
  const xorOk = !(selections["76"] && selections["355"]);

  return (
    <div className="border" style={{ borderColor: "rgba(201,162,39,0.15)", background: "#15100c" }}>
      <div className="p-7 border-b space-y-4" style={{ borderColor: "rgba(201,162,39,0.12)" }}>
        <div>
          <label className="block text-xs tracking-wide uppercase mb-1.5" style={{ color: "#8a7a5c" }}>
            Prompt de la escena
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe la accion y composicion de la escena..."
            className="w-full px-3 py-2 text-sm focus:outline-none resize-none h-20"
            style={{ background: "#0f0a08", border: "1px solid rgba(201,162,39,0.18)", color: "#cbb892" }}
          />
        </div>
        <div>
          <label className="block text-xs tracking-wide uppercase mb-1.5" style={{ color: "#8a7a5c" }}>
            Resolución
          </label>
          <select
            value={resolution}
            onChange={(e) => setResolution(e.target.value)}
            className="w-full px-3 py-2 text-sm focus:outline-none"
            style={{ background: "#0f0a08", border: "1px solid rgba(201,162,39,0.18)", color: "#cbb892" }}
          >
            {SCENE_RESOLUTIONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-7 space-y-5">
        {SCENE_IMAGE_SLOTS.map((slot) => (
          <div key={slot.nodeId}>
            <div className="flex items-center gap-2 mb-2">
              <label className="text-xs tracking-wide uppercase" style={{ color: "#8a7a5c" }}>{slot.label}</label>
              {!slot.optional && <span className="text-xs" style={{ color: "#c9a227" }}>*requerido</span>}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {MOCK_LIBRARY[slot.category]?.map((item) => (
                <button
                  key={item.id}
                  onClick={() => selectImage(slot.nodeId, item.id)}
                  className="flex-shrink-0 overflow-hidden border-2 transition"
                  style={{ borderColor: selections[slot.nodeId] === item.id ? "#c9a227" : "rgba(201,162,39,0.15)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.thumb} alt={item.name} className="w-16 h-16 object-cover" />
                </button>
              ))}
              {slot.optional && (
                <button
                  onClick={() => selectImage(slot.nodeId, "")}
                  className="flex-shrink-0 w-16 h-16 border text-xs"
                  style={{ borderStyle: "dashed", borderColor: "rgba(201,162,39,0.18)", color: "#6b5d44" }}
                >
                  Ninguno
                </button>
              )}
            </div>
          </div>
        ))}
        {!xorOk && (
          <p className="text-xs" style={{ color: "#d4a843" }}>
            Elige solo uno: Cuerpo o Ropa (no ambos a la vez)
          </p>
        )}
      </div>

      <div className="px-7 pb-7">
        <button
          onClick={() => onGenerate({ prompt, resolution, images: selections })}
          disabled={loading || !requiredOk || !xorOk}
          className="w-full py-3.5 text-sm font-medium tracking-wide transition disabled:opacity-30"
          style={{ background: "#c9a227", color: "#0f0a08" }}
        >
          {loading ? "Generando..." : "Generar escena →"}
        </button>
      </div>
    </div>
  );
}
