// Listas REALES extraidas de xcalibur_outfit_builder.js
// categoria -> [conjuntos disponibles]

export const OUTFIT_CATALOG: Record<string, string[]> = {
  "Diario / Casual": ["Casual de verano", "Athleisure deportivo", "Cita romántica", "Bohemio festival", "Otoño acogedor", "Vaquera country", "Coquette", "Tenista country-club", "Brunch smart-casual"],
  "Trabajo / Oficina": ["Oficina seductora", "Secretaria clásica", "Ejecutiva power suit", "Profesora elegante", "Azafata de vuelo", "Jefa dominante", "Camarera", "Doctora"],
  "Elegante / Noche": ["Vestido de cóctel", "Noche de gala", "Vestido slip de seda", "Esmoquin femenino", "Vestido rojo bodycon", "Vestido de lentejuelas", "Mono de fiesta", "Midi de invitada"],
  "Playa / Piscina": ["Bikini de playa", "Microbikini provocativo", "Bañador high-cut", "Monokini", "Bikini de crochet", "Conjunto resort", "Bañador retro pin-up", "Spa / sauna"],
  "Lencería / Íntimo": ["Lencería de encaje", "Pijama loungewear", "Pin-up retro", "Babydoll transparente", "Lencería roja de seda", "Bodystocking de malla", "Lencería de novia", "Body / teddy"],
  "Fetiche · Látex y Cuero": ["Vestido de látex", "Dominatrix de cuero", "Bondage chic", "Catsuit de látex", "Vinilo wet look", "Corsé victoriano", "Sirvienta de cuero", "Shibari / cuerdas"],
  "Disfraces / Roleplay": ["Enfermera sexy", "Criada francesa", "Policía sexy", "Cosplay colegiala adulta", "Animadora", "Ama de casa retro", "Monja", "Militar / soldado", "Prisionera"],
  "Fantasía / Cosplay": ["Conejita de club", "Gatita cosplay", "Burlesque showgirl", "Diablesa fantasía", "Angelita", "Vampiresa", "Bruja sexy", "Cosplay heroína anime", "Superheroína", "Hada"],
  "Alternativo / Urbano": ["Gótica oscura", "Streetwear urbano", "Cuero punk", "E-girl", "Cyberpunk", "Grunge 90s", "Androide / cyborg", "Motera / biker", "Y2K"],
};

export const OUTFIT_CATEGORIES = Object.keys(OUTFIT_CATALOG);
