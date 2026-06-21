// Listas REALES extraidas de base_node.py, face_prompt_generator.py y
// body_dynamic_widgets.js del proyecto Xcalibur. Estas son las opciones
// exactas que usan los nodos de ComfyUI.

// ── Comunes (base_node.py) ──────────────────────────────────────────
export const GENDER = ["auto", "female", "male"];

export const ETHNICITY = [
  "auto", "unspecified",
  "East Asian", "South Asian", "Southeast Asian", "Central Asian",
  "Middle Eastern", "North African", "Horn of Africa", "Sub-Saharan African",
  "Northern European", "Southern European", "Eastern European", "Western European",
  "North American", "Latin American", "Mestizo", "Caribbean",
  "Indigenous American", "Pacific Islander", "Melanesian",
  "Australian Aboriginal", "Mixed heritage",
];

export const AGE_RANGE = [
  "auto",
  "early 20s young adult", "mid 20s young adult", "late 20s adult",
  "early 30s adult", "mid 30s adult", "late 30s adult",
  "40s mature adult", "50s mature adult", "60s senior adult",
];

export const SKIN_TONE = [
  "auto", "very fair", "fair", "light", "light-medium", "medium",
  "medium-tan", "tan", "olive", "deep tan", "brown", "dark brown", "deep brown", "ebony",
];

export const LIGHTING = [
  "auto", "soft studio lighting", "dramatic cinematic lighting",
  "warm golden hour sunlight", "soft natural window light", "hard rim backlighting",
  "moody low-key lighting", "diffuse overcast lighting", "vibrant neon lighting",
  "cold blue moonlight", "split lighting", "butterfly lighting", "theatrical spotlight",
];

export const BACKGROUND = [
  "white studio background", "RANDOM",
  "dark black background", "gradient gray background", "blurred bokeh background",
  "dark moody atmospheric background", "neutral seamless backdrop",
  "warm beige studio background", "bedroom interior blurred", "luxury interior blurred",
  "beach background blurred", "natural outdoor background blurred",
  "concrete textured background", "deep forest background blurred",
];

// ── Cara (face_prompt_generator.py) ─────────────────────────────────
export const EYE_SHAPE = [
  "auto", "almond-shaped", "round", "hooded", "monolid",
  "upturned", "downturned", "deep-set", "wide-set", "close-set",
];

export const EYE_COLOR = [
  "auto", "dark brown", "medium brown", "light brown", "hazel", "amber",
  "green", "blue-green", "light blue", "deep blue", "gray", "black",
];

export const EYEBROW_SHAPE = [
  "auto", "thin straight", "soft arch", "high arch", "thick straight",
  "rounded", "angled", "full natural", "sparse",
];

export const EYEBROW_COLOR = [
  "auto", "black", "dark brown", "medium brown", "light brown",
  "auburn", "dark blonde", "blonde", "gray",
];

export const NOSE_SHAPE = [
  "auto", "straight refined", "small button", "aquiline", "narrow straight",
  "wide flat", "upturned", "broad rounded", "high-bridged",
];

export const LIPS_VOLUME = [
  "auto", "thin", "medium volume", "full", "very full plump", "delicate refined",
];

export const MAKEUP = [
  "auto", "bare face no makeup", "light natural makeup", "nude makeup look",
  "soft everyday makeup", "dewy fresh makeup", "smoky eye makeup",
  "bold red lipstick makeup", "full glamour makeup with false lashes and contour",
  "party makeup with glitter and bold colors", "evening formal makeup",
  "gothic dark makeup with black lipstick", "retro pin-up makeup with winged liner",
  "cat-eye winged liner makeup", "editorial high-fashion makeup", "bronze sun-kissed makeup",
];

export const CHEEKBONES = [
  "auto", "high cheekbones", "prominent cheekbones", "subtle cheekbones",
  "wide cheekbones", "soft rounded cheekbones", "angular cheekbones",
];

export const JAWLINE = [
  "auto", "soft jawline", "defined jawline", "sharp angular jawline",
  "rounded jawline", "square jawline", "tapered jawline",
];

export const CHIN = [
  "auto", "pointed chin", "rounded chin", "square chin", "narrow chin",
  "cleft chin", "soft chin",
];

export const HAIR_STYLE = [
  "auto",
  "buzz cut", "pixie cut", "cropped short hair",
  "classic bob haircut", "french bob haircut", "short layered haircut",
  "lob long bob haircut", "shoulder-length layered haircut",
  "shag haircut", "wolf cut haircut", "medium straight hair", "medium wavy hair",
  "long straight hair", "long wavy hair", "long curly hair",
  "waist-length straight hair", "waist-length wavy hair",
  "high ponytail", "low ponytail", "messy bun", "sleek bun",
  "braided hair", "half-up half-down hairstyle",
  "natural afro", "slicked back hair", "undercut hairstyle", "bald", "shaved sides",
];

export const HAIR_LENGTH_MODIFIER = ["auto", "slightly shorter", "slightly longer", "much shorter", "much longer"];

export const HAIR_COLOR = [
  "auto", "jet black", "dark brown", "medium brown", "light brown",
  "dark blonde", "golden blonde", "platinum blonde", "auburn",
  "copper red", "deep red", "silver gray", "white",
];

export const SKIN_MARKS = [
  "auto", "none",
  "light freckles across the nose and cheeks",
  "a sprinkle of freckles over both cheeks",
  "a few small moles on the left cheek",
  "a beauty mark just above the lip",
  "a small scar through the right eyebrow",
  "mild dark circles under the eyes",
  "light sun freckles across the nose",
];

export const AGING = [
  "auto", "none", "smooth youthful skin", "fine expression lines",
  "crow's feet at the eyes", "soft forehead lines", "nasolabial folds",
  "mature skin with soft natural wrinkles",
];

export const EXPRESSION = ["auto", "neutral", "happiness", "sadness", "anger", "surprise", "fear", "disgust", "contempt"];

export const EXPRESSION_VARIANT = [
  "auto", "soft smile", "coy smile", "radiant joy", "laughing",
  "seductive look", "sultry half-lidded gaze", "gentle warmth",
  "pensive", "melancholic gaze", "cold fury", "wide-eyed surprise", "serene neutral",
];

export const RENDER_STYLE = ["auto", "photorealistic", "hyperrealistic 8K", "ultra-detailed digital art", "cinematic film still"];

export const FRAMING_LIST = ["head and shoulders", "face and full hair", "bust shot", "upper body"];

// ── Cuerpo, dependiente del genero (body_dynamic_widgets.js) ───────
export const FEMALE_BODY_OPTS = {
  body_build: ["auto", "petite slim", "slim", "slender", "fit", "toned athletic", "curvy", "voluptuous", "hourglass", "thick", "soft chubby", "plus-size", "fit muscular"],
  proportions: ["auto", "balanced proportions", "hourglass figure", "pear-shaped figure", "apple-shaped figure", "long-legged", "slim-waisted curvy"],
  waist: ["auto", "very narrow waist", "narrow waist", "defined waist", "average waist", "soft waist"],
  hips: ["auto", "narrow hips", "average hips", "curvy hips", "wide hips", "very wide hips"],
  buttocks: ["auto", "flat", "small", "firm round", "full round", "large", "heart-shaped", "bubble"],
  thighs: ["auto", "slim thighs", "toned thighs", "thick thighs", "soft full thighs", "thigh gap"],
  legs: ["auto", "short legs", "average legs", "long legs", "very long legs", "slender legs", "toned legs"],
  pubic_hair: ["auto", "shaved smooth", "trimmed neat", "landing strip", "triangle", "natural light", "natural full", "bush"],
  genitals: ["auto", "natural", "petite", "fuller", "innie", "natural detailed"],
};

export const MALE_BODY_OPTS = {
  body_build: ["auto", "slim", "slender", "lean", "fit", "toned athletic", "athletic", "muscular", "heavily muscular", "bodybuilder", "stocky", "thick", "dad bod", "soft chubby", "plus-size"],
  proportions: ["auto", "balanced proportions", "broad-shouldered V-taper", "narrow-hipped", "long-legged", "stocky proportions"],
  waist: ["auto", "narrow waist", "trim waist", "average waist", "thick waist", "wide waist"],
  hips: ["auto", "narrow hips", "slim hips", "average hips"],
  buttocks: ["auto", "flat", "small", "firm", "muscular", "round"],
  thighs: ["auto", "slim thighs", "toned thighs", "muscular thighs", "thick thighs"],
  legs: ["auto", "short legs", "average legs", "long legs", "muscular legs", "lean legs"],
  pubic_hair: ["auto", "shaved smooth", "trimmed neat", "natural light", "natural full", "bush"],
  genitals: ["auto", "flaccid", "semi-erect", "erect", "small", "average", "large", "very large"],
};

export const BODY_KEYS = ["body_build", "proportions", "waist", "hips", "buttocks", "thighs", "legs", "pubic_hair", "genitals"] as const;

export const BODY_FIELD_LABELS: Record<string, string> = {
  body_build: "Complexión",
  proportions: "Proporciones",
  waist: "Cintura",
  hips: "Caderas",
  buttocks: "Glúteos",
  thighs: "Muslos",
  legs: "Piernas",
  pubic_hair: "Vello púbico",
  genitals: "Genitales",
};

export function getBodyOptions(gender: "female" | "male" | "auto", key: string): string[] {
  if (gender === "male") return MALE_BODY_OPTS[key as keyof typeof MALE_BODY_OPTS] || ["auto"];
  if (gender === "female") return FEMALE_BODY_OPTS[key as keyof typeof FEMALE_BODY_OPTS] || ["auto"];
  // auto: union de ambos
  const f = FEMALE_BODY_OPTS[key as keyof typeof FEMALE_BODY_OPTS] || [];
  const m = MALE_BODY_OPTS[key as keyof typeof MALE_BODY_OPTS] || [];
  return ["auto", ...Array.from(new Set([...f, ...m].filter((o) => o !== "auto")))];
}

// Widgets exclusivos de un genero (se ocultan segun el genero elegido)
export const FEMALE_ONLY_FIELDS = ["breast_size", "breast_shape", "nipples"];
export const MALE_ONLY_FIELDS = ["chest"];

export const BREAST_SIZE = ["auto", "small", "medium", "large", "very large"];
export const BREAST_SHAPE = ["auto", "natural", "natural soft", "perky", "teardrop", "round full"];
export const NIPPLES = ["auto"];
export const CHEST = ["auto", "smooth", "lightly defined", "defined", "muscular", "hairy"];
export const TATTOOS = ["none", "minimal", "small accent", "sleeve", "full sleeve", "back piece"];
export const PIERCINGS = ["none", "ears", "nose", "navel", "multiple"];
export const BODY_MARKS = ["none", "scars", "moles", "birthmark", "stretch marks"];
