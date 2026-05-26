const API_ROOT = process.env.NEXT_PUBLIC_API_URL ?? ""
export const AUTH_TOKEN_KEY = "alm_auth_token"

function getBaseUrl() {
  if (API_ROOT) {
    return API_ROOT.replace(/\/$/, "")
  }
  if (typeof window !== "undefined") {
    return window.location.origin
  }
  return "http://localhost:3000"
}

export function getToken(): string | null {
  if (typeof window === "undefined") {
    return null
  }
  return window.localStorage.getItem(AUTH_TOKEN_KEY)
}

export function setToken(token: string) {
  if (typeof window === "undefined") {
    return
  }
  window.localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export function clearToken() {
  if (typeof window === "undefined") {
    return
  }
  window.localStorage.removeItem(AUTH_TOKEN_KEY)
}

export function getAuthHeaders() {
  const token = getToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export async function apiFetch(path: string, options: RequestInit = {}) {
  const url = path.startsWith("http") ? path : `${getBaseUrl()}${path}`
  const cleanOptions: RequestInit = {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...((options.headers as Record<string, string>) ?? {}),
    } as HeadersInit,
  }

  if (cleanOptions.body instanceof FormData) {
    // Let browser set Content-Type for multipart/form-data
  } else if (cleanOptions.body && !(cleanOptions.headers as Record<string, string>)?.["Content-Type"]) {
    cleanOptions.headers = {
      ...(cleanOptions.headers as Record<string, string>),
      "Content-Type": "application/json",
    }
  }

  return fetch(url, cleanOptions)
}
