"use client";

import { FieldDef } from "../../../lib/workflowFields";

interface FieldRendererProps {
  field: FieldDef;
  value: string | boolean;
  onChange: (value: string | boolean) => void;
}

const inputStyle = {
  background: "#0f0a08",
  border: "1px solid rgba(201,162,39,0.18)",
  color: "#cbb892",
};

const labelStyle = { color: "#8a7a5c" };

export default function FieldRenderer({ field, value, onChange }: FieldRendererProps) {
  if (field.type === "select") {
    return (
      <div>
        <label className="block text-xs tracking-wide uppercase mb-1.5" style={labelStyle}>
          {field.label}
        </label>
        <select
          value={value as string}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 text-sm focus:outline-none"
          style={inputStyle}
        >
          {field.options?.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
    );
  }

  if (field.type === "checkbox") {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={value as boolean}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4"
          style={{ accentColor: "#c9a227" }}
        />
        <span className="text-sm" style={{ color: "#cbb892" }}>{field.label}</span>
      </label>
    );
  }

  if (field.type === "textarea") {
    return (
      <div className="col-span-2">
        <label className="block text-xs tracking-wide uppercase mb-1.5" style={labelStyle}>
          {field.label}
        </label>
        <textarea
          value={value as string}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 text-sm focus:outline-none resize-none h-24"
          style={inputStyle}
        />
      </div>
    );
  }

  return (
    <div>
      <label className="block text-xs tracking-wide uppercase mb-1.5" style={labelStyle}>
        {field.label}
      </label>
      <input
        type="text"
        value={value as string}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 text-sm focus:outline-none"
        style={inputStyle}
      />
    </div>
  );
}
