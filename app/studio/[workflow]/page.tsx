"use client";

import { useEffect, useState, useRef, use } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { api } from "../../../lib/api";
import CharacterForm from "./CharacterForm";
import OutfitForm from "./OutfitForm";
import BackgroundForm from "./BackgroundForm";
import SceneForm from "./SceneForm";

interface Job {
  id: string;
  status: string;
  progress_percent: number;
  output_url: string | null;
  error_message: string | null;
  credits_cost: number;
}

const MOCK_MODE = true;

const WORKFLOW_NAMES: Record<string, string> = {
  "creador-personaje": "Creador de Personaje · Cara + Cuerpo",
  "creador-fondos": "Creador de Fondos",
  "creador-outfit": "Creador de Outfit",
  "creador-escenas": "Creador de Escenas",
};

export default function WorkflowPage({ params }: { params: Promise<{ workflow: string }> }) {
  const { workflow: workflowSlug } = use(params);
  const searchParams = useSearchParams();
  const workflowId = searchParams.get("id") || "";
  const { getToken } = useAuth();

  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState<Job | null>(null);
  const [error, setError] = useState("");
  const eventSourceRef = useRef<EventSource | null>(null);

  async function handleGenerate(inputParams: Record<string, unknown>) {
    setLoading(true);
    setError("");
    setJob(null);
    try {
      const token = await getToken();
      const created = await api.createJob(token, workflowId, "image", inputParams);
      setJob({ id: created.id, status: created.status, progress_percent: 0, output_url: null, error_message: null, credits_cost: created.credits_cost });
      if (MOCK_MODE) {
        simulateProgress();
        return;
      }
      const es = new EventSource(api.getProgressUrl(created.id));
      eventSourceRef.current = es;
      es.onmessage = (e) => {
        const data = JSON.parse(e.data);
        setJob((prev) => (prev ? { ...prev, ...data } : data));
        if (data.status === "completed" || data.status === "failed") es.close();
      };
      es.onerror = () => es.close();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  }

  function simulateProgress() {
    let pct = 0;
    const interval = setInterval(() => {
      pct += Math.random() * 20;
      if (pct >= 100) {
        pct = 100;
        clearInterval(interval);
        setJob((prev) => (prev ? { ...prev, status: "completed", progress_percent: 100, output_url: "https://placehold.co/768x1024/15100c/c9a227?text=Resultado+simulado" } : prev));
        setLoading(false);
        return;
      }
      setJob((prev) => (prev ? { ...prev, status: "processing", progress_percent: Math.round(pct) } : prev));
    }, 600);
  }

  useEffect(() => () => eventSourceRef.current?.close(), []);

  const statusLabel: Record<string, string> = {
    pending: "En cola...",
    processing: "Generando...",
    uploading: "Subiendo resultado...",
    completed: "Completado",
    failed: "Error",
  };

  function renderForm() {
    switch (workflowSlug) {
      case "creador-personaje": return <CharacterForm onGenerate={handleGenerate} loading={loading} />;
      case "creador-outfit": return <OutfitForm onGenerate={handleGenerate} loading={loading} />;
      case "creador-fondos": return <BackgroundForm onGenerate={handleGenerate} loading={loading} />;
      case "creador-escenas": return <SceneForm onGenerate={handleGenerate} loading={loading} />;
      default: return <div style={{ color: "#6b5d44" }}>Workflow no reconocido: {workflowSlug}</div>;
    }
  }

  return (
    <main className="min-h-screen font-sans" style={{ background: "#0f0a08" }}>
      <header className="border-b px-8 py-5 flex items-center gap-4" style={{ borderColor: "rgba(201,162,39,0.12)" }}>
        <Link href="/studio" className="text-xs tracking-wide" style={{ color: "#8a7a5c" }}>← Estudio</Link>
        <span style={{ color: "#4a3f2e" }}>/</span>
        <span className="text-sm" style={{ color: "#cbb892" }}>{WORKFLOW_NAMES[workflowSlug] || workflowSlug}</span>
        {MOCK_MODE && (
          <span className="ml-auto text-xs px-2 py-1" style={{ color: "#d4a843", background: "rgba(201,162,39,0.08)" }}>
            Modo simulación — sin GPU conectada
          </span>
        )}
      </header>

      <div className="max-w-2xl mx-auto px-8 py-16">
        {renderForm()}

        {error && (
          <div className="mt-6 p-4 text-sm" style={{ background: "rgba(201,80,80,0.08)", border: "1px solid rgba(201,80,80,0.2)", color: "#e08a8a" }}>
            {error}
          </div>
        )}

        {job && (
          <div className="mt-6 border p-7" style={{ borderColor: "rgba(201,162,39,0.15)", background: "#15100c" }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm" style={{ color: "#cbb892" }}>{statusLabel[job.status] || job.status}</span>
              <span className="text-xs" style={{ color: "#6b5d44" }}>{job.credits_cost} créditos</span>
            </div>

            {job.status !== "completed" && job.status !== "failed" && (
              <div className="w-full h-1 mb-4" style={{ background: "rgba(201,162,39,0.1)" }}>
                <div className="h-1 transition-all duration-500" style={{ width: `${job.progress_percent || 5}%`, background: "#c9a227" }} />
              </div>
            )}

            {job.status === "completed" && job.output_url && (
              <img src={job.output_url} alt="Resultado generado" className="w-full border" style={{ borderColor: "rgba(201,162,39,0.15)" }} />
            )}

            {job.status === "failed" && <p className="text-sm" style={{ color: "#e08a8a" }}>{job.error_message || "El job fallo"}</p>}

            <p className="text-xs mt-4 font-mono" style={{ color: "#4a3f2e" }}>{job.id}</p>
          </div>
        )}
      </div>
    </main>
  );
}
