const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";

export const api = {
  async getWorkflows() {
    const res = await fetch(`${API_URL}/api/workflows`);
    if (!res.ok) throw new Error("Error cargando workflows");
    return res.json();
  },

  async createJob(workflowId: string, type: string, inputParams: Record<string, unknown>) {
    const res = await fetch(`${API_URL}/api/jobs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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

  async getJob(jobId: string) {
    const res = await fetch(`${API_URL}/api/jobs/${jobId}`);
    if (!res.ok) throw new Error("Error cargando job");
    return res.json();
  },

  async getJobs() {
    const res = await fetch(`${API_URL}/api/jobs`);
    if (!res.ok) throw new Error("Error cargando jobs");
    return res.json();
  },

  async getCredits() {
    const res = await fetch(`${API_URL}/api/credits`);
    if (!res.ok) throw new Error("Error cargando creditos");
    return res.json();
  },

  getProgressUrl(jobId: string) {
    return `${API_URL}/api/jobs/${jobId}/progress`;
  },
};
