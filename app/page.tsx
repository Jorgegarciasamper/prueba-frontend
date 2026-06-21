import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

const GOLD = "#c9a227";

export default function Home() {
  return (
    <main className="min-h-screen font-sans" style={{ background: "#0f0a08" }}>
      {/* Header */}
      <header
        className="border-b px-8 py-5 flex items-center justify-between"
        style={{ borderColor: "rgba(201,162,39,0.12)" }}
      >
        <div className="flex items-center gap-3">
          <span style={{ color: GOLD }} className="text-lg">✦</span>
          <span className="text-lg" style={{ fontFamily: "Georgia, serif", color: "#f0e6d2" }}>
            Xcalibur
          </span>
          <span className="text-xs tracking-widest uppercase ml-1" style={{ color: "#8a7a5c" }}>
            Estudio
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button
                className="text-sm px-4 py-2 transition"
                style={{ color: "#cbb892", border: "1px solid rgba(201,162,39,0.25)" }}
              >
                Iniciar sesión
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button
                className="text-sm font-medium px-4 py-2 transition"
                style={{ background: GOLD, color: "#0f0a08" }}
              >
                Crear cuenta
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <Link
              href="/studio"
              className="text-sm font-medium px-4 py-2 transition"
              style={{ background: GOLD, color: "#0f0a08" }}
            >
              Ir al Estudio →
            </Link>
            <UserButton />
          </Show>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-24 pb-16 text-center">
        <span
          className="inline-block mb-8 px-4 py-1.5 text-xs tracking-widest uppercase"
          style={{ color: GOLD, border: "1px solid rgba(201,162,39,0.25)" }}
        >
          ✦ Producción con IA generativa
        </span>
        <h1
          className="text-5xl md:text-6xl leading-tight mb-5"
          style={{ fontFamily: "Georgia, serif", color: "#f0e6d2" }}
        >
          Transforma tus ideas en<br />
          <em style={{ color: "#d4a843", fontStyle: "italic" }}>contenido cinematográfico</em>
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: "#8a7a5c" }}>
          Genera vídeos, avatares parlantes y presentaciones narradas con IA. En segundos.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Show when="signed-out">
            <SignUpButton mode="modal">
              <button
                className="px-7 py-3 text-sm font-medium transition"
                style={{ background: GOLD, color: "#0f0a08" }}
              >
                Empezar gratis →
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <Link
              href="/studio"
              className="px-7 py-3 text-sm font-medium transition inline-block"
              style={{ background: GOLD, color: "#0f0a08" }}
            >
              Ir al Estudio →
            </Link>
          </Show>
          <button
            className="px-7 py-3 text-sm transition"
            style={{ color: "#cbb892", border: "1px solid rgba(201,162,39,0.2)" }}
          >
            Ver demo
          </button>
        </div>
      </section>

      {/* Stats */}
      <div
        className="border-y py-10 flex justify-center gap-16 flex-wrap"
        style={{ borderColor: "rgba(201,162,39,0.1)" }}
      >
        {[
          { num: "4", label: "Workflows de IA" },
          { num: "~30s", label: "Tiempo de generación" },
          { num: "GPU", label: "Procesamiento dedicado" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl" style={{ fontFamily: "Georgia, serif", color: GOLD }}>{s.num}</div>
            <div className="text-sm mt-1" style={{ color: "#6b5d44" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Workflows */}
      <section className="px-6 py-20" style={{ background: "#0d0907" }}>
        <p className="text-center text-xs tracking-widest uppercase mb-3" style={{ color: GOLD }}>
          Workflows
        </p>
        <h2
          className="text-center text-3xl mb-3"
          style={{ fontFamily: "Georgia, serif", color: "#f0e6d2" }}
        >
          Elige tu tipo de producción
        </h2>
        <p className="text-center mb-12" style={{ color: "#8a7a5c" }}>
          Cada workflow está optimizado con modelos de última generación
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px max-w-4xl mx-auto"
          style={{ background: "rgba(201,162,39,0.12)" }}
        >
          {workflows.map((w) => (
            <div key={w.title} className="p-6" style={{ background: "#0f0a08" }}>
              <div
                className="w-9 h-9 flex items-center justify-center text-lg mb-4 border"
                style={{ borderColor: "rgba(201,162,39,0.25)", color: GOLD }}
              >
                {w.icon}
              </div>
              <h3 className="text-sm font-medium mb-2" style={{ color: "#f0e6d2" }}>{w.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#8a7a5c" }}>{w.description}</p>
              {w.badge && (
                <span
                  className="inline-block mt-3 text-[11px] px-2.5 py-0.5"
                  style={{ background: "rgba(201,162,39,0.12)", color: GOLD }}
                >
                  {w.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-20 text-center" style={{ background: "#0f0a08" }}>
        <h2 className="text-4xl mb-4" style={{ fontFamily: "Georgia, serif", color: "#f0e6d2" }}>
          ¿Listo para crear?
        </h2>
        <p className="mb-8" style={{ color: "#8a7a5c" }}>
          Empieza con créditos gratuitos. Sin tarjeta de crédito.
        </p>
        <Show when="signed-out">
          <SignUpButton mode="modal">
            <button
              className="px-8 py-3 text-sm font-medium transition"
              style={{ background: GOLD, color: "#0f0a08" }}
            >
              Crear cuenta gratis →
            </button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <Link
            href="/studio"
            className="px-8 py-3 text-sm font-medium transition inline-block"
            style={{ background: GOLD, color: "#0f0a08" }}
          >
            Ir al Estudio →
          </Link>
        </Show>
      </section>
    </main>
  );
}

const workflows = [
  {
    title: "Imagen a vídeo",
    description: "Convierte cualquier imagen en un vídeo cinematográfico fluido",
    icon: "🎬",
    badge: "Popular",
  },
  {
    title: "Talking head",
    description: "Anima un retrato con voz sincronizada mediante SadTalker",
    icon: "🧑‍💻",
    badge: "Nuevo",
  },
  {
    title: "Voz sintética",
    description: "Genera narración realista con ElevenLabs a partir de texto",
    icon: "🎙️",
    badge: null,
  },
  {
    title: "PDF narrado",
    description: "Convierte presentaciones en vídeos con narración automática",
    icon: "📑",
    badge: null,
  },
];
