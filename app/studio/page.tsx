"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { api } from "../../lib/api";

const WORKFLOW_META: Record<string, { icon: string; tag: string; order: string }> = {
  "creador-personaje": { icon: "⚔", tag: "Casting", order: "01" },
  "creador-outfit": { icon: "👗", tag: "Vestuario", order: "02" },
  "creador-fondos": { icon: "🏠", tag: "Set design", order: "03" },
  "creador-escenas": { icon: "🎬", tag: "Composición", order: "04" },
};

interface Workflow {
  id: string;
  name: string;
  slug: string;
  type: string;
  credits_cost_min: number;
  credits_cost_max: number;
}

interface Credits {
  credits_balance: number;
  plan: string;
}

export default function StudioPage() {
  const { getToken } = useAuth();
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [credits, setCredits] = useState<Credits | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const token = await getToken();
        const [wf, cr] = await Promise.all([
          api.getWorkflows(token),
          api.getCredits(token),
        ]);
        setWorkflows(wf);
        setCredits(cr);
      } catch {
        setError("No se pudo conectar con el backend");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [getToken]);

  return (
    <main className="min-h-screen font-sans" style={{ background: "#0f0a08" }}>
      {/* Header */}
      <header
        className="border-b px-8 py-5 flex items-center justify-between"
        style={{ borderColor: "rgba(201,162,39,0.12)" }}
      >
        <div className="flex items-center gap-3">
          <span style={{ color: "#c9a227" }} className="text-lg">✦</span>
          <Link href="/" className="text-lg" style={{ fontFamily: "Georgia, serif", color: "#f0e6d2" }}>
            Xcalibur
          </Link>
          <span className="text-xs tracking-widest uppercase ml-1" style={{ color: "#8a7a5c" }}>
            Estudio
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xs tracking-wide" style={{ color: "#8a7a5c" }}>
            ← Web
          </Link>
          {credits && (
            <div className="flex items-center gap-2 text-xs">
              <span style={{ color: "#8a7a5c" }}>Créditos</span>
              <span style={{ color: "#c9a227" }} className="font-medium">
                {credits.credits_balance.toLocaleString()}
              </span>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Hero */}
        <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#c9a227" }}>
          Suite de generación · Local
        </p>
        <h1
          className="text-5xl mb-5 leading-tight"
          style={{ fontFamily: "Georgia, serif", color: "#f0e6d2" }}
        >
          Tus pipelines,{" "}
          <em style={{ color: "#d4a843", fontStyle: "italic" }}>una sola</em> sesión.
        </h1>
        <p className="max-w-xl mb-14 leading-relaxed" style={{ color: "#8a7a5c" }}>
          Cada herramienta lanza su flujo con sus propios controles y te devuelve el resultado
          aquí mismo. Elige una para empezar.
        </p>

        {error && (
          <div
            className="mb-8 p-4 rounded-lg text-sm"
            style={{ background: "rgba(201,80,80,0.08)", border: "1px solid rgba(201,80,80,0.2)", color: "#e08a8a" }}
          >
            {error} — Asegúrate de que el backend está corriendo en localhost:8001
          </div>
        )}

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(201,162,39,0.1)" }}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="p-8 animate-pulse" style={{ background: "#0f0a08" }}>
                <div className="w-8 h-8 rounded mb-6" style={{ background: "rgba(201,162,39,0.1)" }} />
                <div className="h-4 rounded mb-2 w-3/4" style={{ background: "rgba(201,162,39,0.1)" }} />
                <div className="h-3 rounded w-full" style={{ background: "rgba(201,162,39,0.08)" }} />
              </div>
            ))}
          </div>
        )}

        {!loading && workflows.length > 0 && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: "rgba(201,162,39,0.12)" }}
          >
            {workflows.map((w) => {
              const meta = WORKFLOW_META[w.slug] || { icon: "✦", tag: "herramienta", order: "00" };
              return (
                <Link
                  key={w.id}
                  href={`/studio/${w.slug}?id=${w.id}`}
                  className="p-8 transition-colors group block"
                  style={{ background: "#0f0a08" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#15100c")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0f0a08")}
                >
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center text-lg mb-6 border"
                    style={{ borderColor: "rgba(201,162,39,0.25)", color: "#c9a227" }}
                  >
                    {meta.icon}
                  </div>
                  <p className="text-xs tracking-widest mb-2" style={{ color: "#6b5d44" }}>
                    {meta.order} · {meta.tag.toUpperCase()}
                  </p>
                  <h3
                    className="text-xl mb-3 leading-snug"
                    style={{ fontFamily: "Georgia, serif", color: "#f0e6d2" }}
                  >
                    {w.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#8a7a5c" }}>
                    {w.credits_cost_min}–{w.credits_cost_max} créditos
                  </p>
                  <span
                    className="text-xs tracking-wide opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "#c9a227" }}
                  >
                    Abrir flujo →
                  </span>
                </Link>
              );
            })}
          </div>
        )}

        {!loading && !error && workflows.length === 0 && (
          <div className="text-center py-20" style={{ color: "#6b5d44" }}>
            No hay workflows disponibles todavía
          </div>
        )}

        <RecentJobs />
      </div>
    </main>
  );
}

function RecentJobs() {
  const { getToken } = useAuth();
  const [jobs, setJobs] = useState<{ id: string; status: string; input_params?: { prompt?: string }; type: string; credits_cost: number; output_url?: string | null }[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const token = await getToken();
        const data = await api.getJobs(token);
        setJobs(data);
      } catch {
        // silencioso -- si falla no mostramos la seccion
      }
    }
    load();
  }, [getToken]);

  if (jobs.length === 0) return null;

  return (
    <div className="mt-20">
      <h2 className="text-lg mb-6" style={{ fontFamily: "Georgia, serif", color: "#f0e6d2" }}>
        Generaciones recientes
      </h2>
      <div className="space-y-px" style={{ background: "rgba(201,162,39,0.1)" }}>
        {jobs.slice(0, 5).map((job) => (
          <div
            key={job.id}
            className="flex items-center justify-between px-6 py-4"
            style={{ background: "#0f0a08" }}
          >
            <div className="flex items-center gap-3">
              <StatusDot status={job.status} />
              <span className="text-sm" style={{ color: "#cbb892" }}>
                {job.input_params?.prompt || "Sin descripción"}
              </span>
              <span className="text-xs" style={{ color: "#6b5d44" }}>{job.type}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs" style={{ color: "#6b5d44" }}>{job.credits_cost} créditos</span>
              {job.output_url && (
                <a
                  href={job.output_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs"
                  style={{ color: "#c9a227" }}
                >
                  Ver resultado →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusDot({ status }: { status: string }) {
  const colors: Record<string, string> = {
    pending: "#c9a227",
    processing: "#c9a227",
    completed: "#7a9e6e",
    failed: "#c95050",
    uploading: "#c9a227",
  };
  return (
    <span
      className="w-1.5 h-1.5 rounded-full"
      style={{ background: colors[status] || "#6b5d44" }}
    />
  );
}
