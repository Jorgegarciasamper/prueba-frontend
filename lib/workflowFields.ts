// Definicion de campos para los 4 workflows de Xcalibur.
// Basado en los config.json reales del proyecto.

export type FieldType = "select" | "text" | "textarea" | "checkbox";

export interface FieldDef {
  key: string;
  label: string;
  type: FieldType;
  options?: string[];
  default?: string | boolean;
}

// ──────────────────────────────────────────────────────────
// CREADOR DE PERSONAJE
// ──────────────────────────────────────────────────────────
export const CHARACTER_BASE_FIELDS: FieldDef[] = [
  { key: "ethnicity", label: "Etnia", type: "select", options: ["auto", "caucásica", "asiática", "latina", "afrodescendiente", "mediterránea"] },
  { key: "age_range", label: "Edad", type: "select", options: ["auto", "18-24", "25-34", "35-44", "45+"] },
  { key: "skin_tone", label: "Tono de piel", type: "select", options: ["auto", "muy claro", "claro", "medio", "oscuro", "muy oscuro"] },
  { key: "lighting", label: "Iluminación", type: "select", options: ["auto", "luz natural", "estudio", "dramática", "suave"] },
  { key: "background", label: "Fondo", type: "text", default: "white studio background" },
];

export const CHARACTER_FACE_FIELDS: FieldDef[] = [
  { key: "cheekbones", label: "Pómulos", type: "select", options: ["auto", "altos", "suaves", "marcados"] },
  { key: "jawline", label: "Mandíbula", type: "select", options: ["auto", "definida", "suave", "angular"] },
  { key: "chin", label: "Mentón", type: "select", options: ["auto", "redondeado", "puntiagudo", "cuadrado"] },
  { key: "eye_shape", label: "Forma de ojos", type: "select", options: ["auto", "almendrados", "redondos", "rasgados"] },
  { key: "eye_color", label: "Color de ojos", type: "select", options: ["auto", "marrón", "verde", "azul", "gris", "avellana"] },
  { key: "eyebrow_shape", label: "Forma de cejas", type: "select", options: ["auto", "arqueadas", "rectas", "gruesas", "finas"] },
  { key: "eyebrow_color", label: "Color de cejas", type: "select", options: ["auto", "a juego con el pelo", "más oscuro"] },
  { key: "nose_shape", label: "Nariz", type: "select", options: ["auto", "recta", "respingada", "aguileña"] },
  { key: "lips_volume", label: "Volumen de labios", type: "select", options: ["auto", "finos", "medios", "voluminosos"] },
  { key: "makeup", label: "Maquillaje", type: "select", options: ["auto", "natural", "glam", "sin maquillaje"] },
  { key: "hair_style", label: "Peinado", type: "select", options: ["auto", "liso largo", "ondulado", "rizado", "corto", "recogido"] },
  { key: "hair_length_modifier", label: "Modificador de largo", type: "select", options: ["auto", "muy largo", "largo", "medio", "corto"] },
  { key: "hair_color", label: "Color de pelo", type: "select", options: ["auto", "negro", "castaño", "rubio", "pelirrojo", "gris"] },
  { key: "skin_marks", label: "Marcas de piel", type: "select", options: ["ninguna", "pecas", "lunares", "cicatriz"] },
  { key: "aging", label: "Edad aparente / envejecimiento", type: "select", options: ["auto", "joven", "madura", "avanzada"] },
  { key: "expression", label: "Expresión", type: "select", options: ["auto", "neutra", "sonriente", "seria", "seductora"] },
  { key: "expression_variant", label: "Variante de expresión", type: "select", options: ["auto", "sutil", "marcada"] },
  { key: "render_style", label: "Estilo de render", type: "select", options: ["fotorrealista", "editorial", "cinematográfico"] },
];

export const CHARACTER_BODY_FIELDS: FieldDef[] = [
  { key: "body_type", label: "Tipo de cuerpo", type: "select", options: ["fit & athletic", "delgado", "curvy", "promedio", "musculoso"] },
  { key: "breast_size", label: "Pecho — tamaño", type: "select", options: ["pequeño", "medio", "grande"] },
  { key: "breast_shape", label: "Pecho — forma", type: "select", options: ["natural", "natural soft", "firme"] },
  { key: "nipples", label: "Pezones", type: "select", options: ["auto"] },
  { key: "chest", label: "Pecho (torso)", type: "select", options: ["auto", "definido", "suave"] },
  { key: "body_hair", label: "Vello corporal", type: "select", options: ["smooth hairless", "ligero", "natural"] },
  { key: "pubic_hair", label: "Vello púbico", type: "select", options: ["auto"] },
  { key: "genitals", label: "Genitales", type: "select", options: ["auto"] },
  { key: "tattoos", label: "Tatuajes", type: "select", options: ["ninguno", "mínimos", "manga completa"] },
  { key: "piercings", label: "Piercings", type: "select", options: ["ninguno", "orejas", "nariz", "varios"] },
  { key: "body_marks", label: "Marcas corporales", type: "select", options: ["ninguna", "cicatrices", "lunares"] },
];

// ──────────────────────────────────────────────────────────
// CREADOR DE OUTFIT
// ──────────────────────────────────────────────────────────
export const OUTFIT_CATEGORIES = [
  "Elegante / Noche",
  "Casual",
  "Deportivo",
  "Playa / Verano",
  "Lencería",
  "Trabajo / Oficina",
];

export const OUTFIT_FIELDS: FieldDef[] = [
  { key: "categoria", label: "Categoría", type: "select", options: OUTFIT_CATEGORIES },
  { key: "conjunto", label: "Conjunto", type: "text", default: "Vestido de cóctel" },
  { key: "aleatorio", label: "Conjunto aleatorio", type: "checkbox", default: false },
];

// ──────────────────────────────────────────────────────────
// CREADOR DE FONDOS
// ──────────────────────────────────────────────────────────
export const BACKGROUND_FIELDS: FieldDef[] = [
  { key: "ubicacion", label: "Ubicación", type: "select", options: ["Cocina", "Dormitorio", "Salón", "Baño", "Jardín", "Oficina", "Playa", "Bosque", "Ciudad"] },
  { key: "modificador", label: "Modificador", type: "text", default: "Rústica de campo" },
  { key: "iluminacion_global", label: "Iluminación global", type: "select", options: ["Luz de día natural", "Atardecer", "Noche cálida", "Estudio"] },
  { key: "microluz", label: "Microluz", type: "text", default: "Automática" },
];

// ──────────────────────────────────────────────────────────
// CREADOR DE ESCENAS — basado en image_inputs reales
// ──────────────────────────────────────────────────────────
export interface SceneImageSlot {
  nodeId: string;
  label: string;
  category: "character" | "grid" | "outfit" | "background";
  optional: boolean;
  prefix?: string;
}

export const SCENE_IMAGE_SLOTS: SceneImageSlot[] = [
  { nodeId: "315", label: "Cara modelo", category: "character", optional: false, prefix: "Face" },
  { nodeId: "76", label: "Cuerpo", category: "character", optional: true, prefix: "Body" },
  { nodeId: "348", label: "Grid modelo", category: "grid", optional: true },
  { nodeId: "343", label: "Hombre", category: "character", optional: true },
  { nodeId: "355", label: "Ropa", category: "outfit", optional: true },
  { nodeId: "358", label: "Fondo", category: "background", optional: false },
];

export const SCENE_RESOLUTIONS = ["16:9 (Panorámica)", "3:5 (Vertical)", "1:1 (Cuadrado)", "4:5 (Retrato)"];
