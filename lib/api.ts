const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";

// El token se pasa desde los componentes via useAuth() de Clerk.
// Cada funcion que necesita autenticacion recibe el token como primer argumento.

function authHeaders(token: string | null): HeadersInit {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export const api = {
  // Ahora protegido en el backend -- requiere token
  async getWorkflows(token: string | null) {
    const res = await fetch(`${API_URL}/api/workflows`, {
      headers: authHeaders(token),
    });
    if (!res.ok) throw new Error("Error cargando workflows");
    return res.json();
  },

  // Protegido -- requiere token de Clerk
  async createJob(
    token: string | null,
    workflowId: string,
    type: string,
    inputParams: Record<string, unknown>
  ) {
    const res = await fetch(`${API_URL}/api/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders(token),
      },
      body: JSON.stringify({
        workflow_id: workflowId,
        type,
        input_params: inputParams,
      }),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Error creando job");
    }
    return res.json();
  },

  async getJob(token: string | null, jobId: string) {
    const res = await fetch(`${API_URL}/api/jobs/${jobId}`, {
      headers: authHeaders(token),
    });
    if (!res.ok) throw new Error("Error cargando job");
    return res.json();
  },

  async getJobs(token: string | null) {
    const res = await fetch(`${API_URL}/api/jobs`, {
      headers: authHeaders(token),
    });
    if (!res.ok) throw new Error("Error cargando jobs");
    return res.json();
  },

  async getCredits(token: string | null) {
    const res = await fetch(`${API_URL}/api/credits`, {
      headers: authHeaders(token),
    });
    if (!res.ok) throw new Error("Error cargando creditos");
    return res.json();
  },

  getProgressUrl(jobId: string) {
    return `${API_URL}/api/jobs/${jobId}/progress`;
  },
};