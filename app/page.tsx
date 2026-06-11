export default function Home() {
  return (
    <main className="bg-[#08080f] min-h-screen font-sans">

      {/* Hero */}
      <section className="px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-8 px-4 py-1.5 rounded-full text-xs text-purple-400 border border-purple-500/40 bg-purple-500/10 tracking-widest">
          ✦ Producción con IA generativa
        </span>
        <h1 className="text-5xl md:text-6xl font-medium text-white leading-tight mb-5">
          Transforma tus ideas en<br />
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            contenido cinematográfico
          </span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Genera vídeos, avatares parlantes y presentaciones narradas con IA. En segundos.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-7 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition">
            Empezar gratis →
          </button>
          <button className="bg-transparent text-gray-300 border border-white/20 px-7 py-3 rounded-lg text-sm hover:bg-white/5 transition">
            Ver demo
          </button>
        </div>
      </section>

      {/* Stats */}
      <div className="border-y border-white/5 py-10 flex justify-center gap-16 flex-wrap">
        {[
          { num: "4", label: "Workflows de IA" },
          { num: "~30s", label: "Tiempo de generación" },
          { num: "GPU", label: "Procesamiento dedicado" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-medium text-violet-400">{s.num}</div>
            <div className="text-sm text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Workflows */}
      <section className="bg-[#0d0d1a] px-6 py-20">
        <p className="text-center text-xs text-violet-500 uppercase tracking-widest mb-3">Workflows</p>
        <h2 className="text-center text-3xl font-medium text-gray-100 mb-3">
          Elige tu tipo de producción
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Cada workflow está optimizado con modelos de última generación
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {workflows.map((w) => (
            <div
              key={w.title}
              className="bg-[#12121f] border border-white/[0.07] rounded-xl p-6 hover:border-violet-500/50 transition-colors cursor-pointer group"
            >
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-xl mb-4 ${w.iconBg}`}>
                {w.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-100 mb-2">{w.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{w.description}</p>
              {w.badge && (
                <span className={`inline-block mt-3 text-[11px] px-2.5 py-0.5 rounded-full ${w.badgeStyle}`}>
                  {w.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-20 text-center bg-[#08080f]">
        <h2 className="text-4xl font-medium text-white mb-4">¿Listo para crear?</h2>
        <p className="text-gray-500 mb-8">Empieza con créditos gratuitos. Sin tarjeta de crédito.</p>
        <button className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-8 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition">
          Crear cuenta gratis →
        </button>
      </section>

    </main>
  );
}

const workflows = [
  {
    title: "Imagen a vídeo",
    description: "Convierte cualquier imagen en un vídeo cinematográfico fluido",
    icon: "🎬",
    iconBg: "bg-violet-500/20",
    badge: "Popular",
    badgeStyle: "bg-red-500/15 text-red-400",
  },
  {
    title: "Talking head",
    description: "Anima un retrato con voz sincronizada mediante SadTalker",
    icon: "🧑‍💻",
    iconBg: "bg-blue-500/20",
    badge: "Nuevo",
    badgeStyle: "bg-violet-500/20 text-violet-400",
  },
  {
    title: "Voz sintética",
    description: "Genera narración realista con ElevenLabs a partir de texto",
    icon: "🎙️",
    iconBg: "bg-teal-500/20",
    badge: null,
    badgeStyle: "",
  },
  {
    title: "PDF narrado",
    description: "Convierte presentaciones en vídeos con narración automática",
    icon: "📑",
    iconBg: "bg-amber-500/20",
    badge: null,
    badgeStyle: "",
  },
];
