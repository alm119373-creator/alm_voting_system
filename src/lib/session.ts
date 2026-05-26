import { clearToken, getToken, setToken } from "./api"

export function saveAuthToken(token: string) {
  if (typeof window !== "undefined") {
    setToken(token)
    document.cookie = `alm_auth_token=${encodeURIComponent(token)}; path=/; samesite=lax`
  }
}

export function removeAuthToken() {
  if (typeof window !== "undefined") {
    clearToken()
    document.cookie = "alm_auth_token=; path=/; samesite=lax; max-age=0"
  }
}

export function getAuthToken(): string | null {
  return getToken()
}
