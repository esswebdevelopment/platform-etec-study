import axios from "axios";

/**
 * Cliente Axios da plataforma.
 * Defina VITE_API_URL no .env (ex.: VITE_API_URL=https://api.seudominio.com.br).
 * Sem a variável, as chamadas vão para /api no mesmo domínio.
 *
 * Contrato esperado da API:
 *   GET  /areas      -> [{ id, nome, cor, temas: [{ nome, provas }] }]
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  timeout: 8000,
  headers: { "Content-Type": "application/json" },
});

export const buscarAreas = () =>
  api.get("/areas").then((r) => {
    const ok =
      Array.isArray(r.data) &&
      r.data.length > 0 &&
      r.data.every((a) => a && typeof a.nome === "string" && Array.isArray(a.temas));
    if (!ok) throw erroFormato();
    return r.data;
  });