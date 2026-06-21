"use client";

import { useState } from "react";
import * as F from "../../../lib/characterFields";

interface CharacterFormProps {
  onGenerate: (data: Record<string, unknown>) => void;
  loading: boolean;
}

const inputStyle = { background: "#0f0a08", border: "1px solid rgba(201,162,39,0.18)", color: "#cbb892" };
const labelStyle = { color: "#8a7a5c" };

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="block text-xs tracking-wide uppercase mb-1.5" style={labelStyle}>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full px-3 py-2 text-sm focus:outline-none" style={inputStyle}>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function CharacterForm({ onGenerate, loading }: CharacterFormProps) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState<"female" | "male">("female");
  const [tab, setTab] = useState<"base" | "face" | "body">("base");

  // Base (comunes)
  const [ethnicity, setEthnicity] = useState("auto");
  const [ageRange, setAgeRange] = useState("auto");
  const [skinTone, setSkinTone] = useState("auto");
  const [lighting, setLighting] = useState("auto");
  const [background, setBackground] = useState(F.BACKGROUND[0]);

  // Cara
  const [cheekbones, setCheekbones] = useState("auto");
  const [jawline, setJawline] = useState("auto");
  const [chin, setChin] = useState("auto");
  const [eyeShape, setEyeShape] = useState("auto");
  const [eyeColor, setEyeColor] = useState("auto");
  const [eyebrowShape, setEyebrowShape] = useState("auto");
  const [eyebrowColor, setEyebrowColor] = useState("auto");
  const [noseShape, setNoseShape] = useState("auto");
  const [lipsVolume, setLipsVolume] = useState("auto");
  const [makeup, setMakeup] = useState("auto");
  const [hairStyle, setHairStyle] = useState("auto");
  const [hairLengthMod, setHairLengthMod] = useState("auto");
  const [hairColor, setHairColor] = useState("auto");
  const [skinMarks, setSkinMarks] = useState("auto");
  const [aging, setAging] = useState("auto");
  const [expression, setExpression] = useState("auto");
  const [expressionVariant, setExpressionVariant] = useState("auto");
  const [framing, setFraming] = useState(F.FRAMING_LIST[0]);
  const [renderStyle, setRenderStyle] = useState("auto");

  // Cuerpo (dependiente del genero)
  const [bodyValues, setBodyValues] = useState<Record<string, string>>(
    Object.fromEntries(F.BODY_KEYS.map((k) => [k, "auto"]))
  );
  const [breastSize, setBreastSize] = useState("auto");
  const [breastShape, setBreastShape] = useState("auto");
  const [nipples, setNipples] = useState("auto");
  const [chest, setChest] = useState("auto");
  const [tattoos, setTattoos] = useState("none");
  const [piercings, setPiercings] = useState("none");
  const [bodyMarks, setBodyMarks] = useState("none");

  function setBodyValue(key: string, value: string) {
    setBodyValues((v) => ({ ...v, [key]: value }));
  }

  function handleSubmit() {
    onGenerate({
      name,
      gender,
      base: { ethnicity, age_range: ageRange, skin_tone: skinTone, lighting, background },
      face: {
        cheekbones, jawline, chin, eye_shape: eyeShape, eye_color: eyeColor,
        eyebrow_shape: eyebrowShape, eyebrow_color: eyebrowColor, nose_shape: noseShape,
        lips_volume: lipsVolume, makeup, hair_style: hairStyle, hair_length_modifier: hairLengthMod,
        hair_color: hairColor, skin_marks: skinMarks, aging, expression, expression_variant: expressionVariant,
        framing, render_style: renderStyle,
      },
      body: { ...bodyValues, breast_size: breastSize, breast_shape: breastShape, nipples, chest, tattoos, piercings, body_marks: bodyMarks },
    });
  }

  return (
    <div className="border" style={{ borderColor: "rgba(201,162,39,0.15)", background: "#15100c" }}>
      {/* Nombre */}
      <div className="p-7 border-b" style={{ borderColor: "rgba(201,162,39,0.12)" }}>
        <label className="flex items-center gap-2 text-lg mb-4" style={{ fontFamily: "Georgia, serif", color: "#d4a843" }}>
          <span style={{ color: "#c9a227" }}>★</span> Nombre de la chica
        </label>
        <div className="h-px mb-4" style={{ background: "rgba(201,162,39,0.15)" }} />
        <p className="text-xs mb-3 tracking-wide" style={{ color: "#6b5d44" }}>
          SE GUARDARÁ EN CARA, CUERPO, CONJUNTO Y GRID (EJ. {(name || "CLARA").toUpperCase()}-FACE, {(name || "CLARA").toUpperCase()}-BODY, {(name || "CLARA").toUpperCase()}-CHARACTER)
        </p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej. Clara"
          className="w-full px-4 py-3 text-base focus:outline-none"
          style={{ background: "#0f0a08", border: "1px solid rgba(201,162,39,0.2)", color: "#f0e6d2", fontFamily: "Georgia, serif" }}
        />
      </div>

      {/* Genero */}
      <div className="px-7 pt-6 pb-2">
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#c9a227" }}>Género</p>
        <div className="flex gap-2">
          <button
            onClick={() => setGender("female")}
            className="flex-1 py-2.5 text-sm font-medium transition"
            style={gender === "female" ? { background: "#c9a227", color: "#0f0a08" } : { background: "transparent", border: "1px solid rgba(201,162,39,0.25)", color: "#cbb892" }}
          >
            Mujer ♀
          </button>
          <button
            onClick={() => setGender("male")}
            className="flex-1 py-2.5 text-sm font-medium transition"
            style={gender === "male" ? { background: "#c9a227", color: "#0f0a08" } : { background: "transparent", border: "1px solid rgba(201,162,39,0.25)", color: "#cbb892" }}
          >
            Hombre ♂
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-7 mt-4" style={{ borderBottom: "1px solid rgba(201,162,39,0.12)" }}>
        {(["base", "face", "body"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="px-4 py-3 text-sm font-medium transition border-b-2"
            style={tab === t ? { borderColor: "#c9a227", color: "#f0e6d2" } : { borderColor: "transparent", color: "#6b5d44" }}
          >
            {t === "base" ? "Identidad" : t === "face" ? "Cara" : "Cuerpo"}
          </button>
        ))}
      </div>

      {/* Tab: Identidad */}
      {tab === "base" && (
        <div className="p-7 grid grid-cols-2 gap-5">
          <Select label="Etnia" value={ethnicity} onChange={setEthnicity} options={F.ETHNICITY} />
          <Select label="Edad" value={ageRange} onChange={setAgeRange} options={F.AGE_RANGE} />
          <Select label="Tono de piel" value={skinTone} onChange={setSkinTone} options={F.SKIN_TONE} />
          <Select label="Iluminación" value={lighting} onChange={setLighting} options={F.LIGHTING} />
          <div className="col-span-2">
            <Select label="Fondo" value={background} onChange={setBackground} options={F.BACKGROUND} />
          </div>
        </div>
      )}

      {/* Tab: Cara */}
      {tab === "face" && (
        <div className="p-7 grid grid-cols-2 gap-5">
          <Select label="Pómulos" value={cheekbones} onChange={setCheekbones} options={F.CHEEKBONES} />
          <Select label="Mandíbula" value={jawline} onChange={setJawline} options={F.JAWLINE} />
          <Select label="Mentón" value={chin} onChange={setChin} options={F.CHIN} />
          <Select label="Forma de ojos" value={eyeShape} onChange={setEyeShape} options={F.EYE_SHAPE} />
          <Select label="Color de ojos" value={eyeColor} onChange={setEyeColor} options={F.EYE_COLOR} />
          <Select label="Forma de cejas" value={eyebrowShape} onChange={setEyebrowShape} options={F.EYEBROW_SHAPE} />
          <Select label="Color de cejas" value={eyebrowColor} onChange={setEyebrowColor} options={F.EYEBROW_COLOR} />
          <Select label="Nariz" value={noseShape} onChange={setNoseShape} options={F.NOSE_SHAPE} />
          <Select label="Volumen de labios" value={lipsVolume} onChange={setLipsVolume} options={F.LIPS_VOLUME} />
          <Select label="Maquillaje" value={makeup} onChange={setMakeup} options={F.MAKEUP} />
          <Select label="Peinado" value={hairStyle} onChange={setHairStyle} options={F.HAIR_STYLE} />
          <Select label="Modificador de largo" value={hairLengthMod} onChange={setHairLengthMod} options={F.HAIR_LENGTH_MODIFIER} />
          <Select label="Color de pelo" value={hairColor} onChange={setHairColor} options={F.HAIR_COLOR} />
          <Select label="Marcas de piel" value={skinMarks} onChange={setSkinMarks} options={F.SKIN_MARKS} />
          <Select label="Edad aparente / envejecimiento" value={aging} onChange={setAging} options={F.AGING} />
          <Select label="Expresión" value={expression} onChange={setExpression} options={F.EXPRESSION} />
          <Select label="Variante de expresión" value={expressionVariant} onChange={setExpressionVariant} options={F.EXPRESSION_VARIANT} />
          <Select label="Encuadre" value={framing} onChange={setFraming} options={F.FRAMING_LIST} />
          <Select label="Estilo de render" value={renderStyle} onChange={setRenderStyle} options={F.RENDER_STYLE} />
        </div>
      )}

      {/* Tab: Cuerpo */}
      {tab === "body" && (
        <div className="p-7 grid grid-cols-2 gap-5">
          {F.BODY_KEYS.map((key) => (
            <Select
              key={key}
              label={F.BODY_FIELD_LABELS[key]}
              value={bodyValues[key]}
              onChange={(v) => setBodyValue(key, v)}
              options={F.getBodyOptions(gender, key)}
            />
          ))}

          {/* Solo mujer */}
          {gender === "female" && (
            <>
              <Select label="Pecho — tamaño" value={breastSize} onChange={setBreastSize} options={F.BREAST_SIZE} />
              <Select label="Pecho — forma" value={breastShape} onChange={setBreastShape} options={F.BREAST_SHAPE} />
              <Select label="Pezones" value={nipples} onChange={setNipples} options={F.NIPPLES} />
            </>
          )}

          {/* Solo hombre */}
          {gender === "male" && (
            <Select label="Pecho (torso)" value={chest} onChange={setChest} options={F.CHEST} />
          )}

          <Select label="Tatuajes" value={tattoos} onChange={setTattoos} options={F.TATTOOS} />
          <Select label="Piercings" value={piercings} onChange={setPiercings} options={F.PIERCINGS} />
          <Select label="Marcas corporales" value={bodyMarks} onChange={setBodyMarks} options={F.BODY_MARKS} />
        </div>
      )}

      {/* Generate button */}
      <div className="px-7 pb-7">
        <button
          onClick={handleSubmit}
          disabled={loading || !name.trim()}
          className="w-full py-3.5 text-sm font-medium tracking-wide transition disabled:opacity-30"
          style={{ background: "#c9a227", color: "#0f0a08" }}
        >
          {loading ? "Generando..." : "Generar personaje →"}
        </button>
      </div>
    </div>
  );
}
