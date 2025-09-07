const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'

async function request(method: string, path: string, data?: any) {
  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : undefined,
    cache: 'no-store',
  })
  // Let's be more resilient to empty responses
  if (res.status === 204) return {}

  const json = await res.json()

  if (!res.ok) {
    const message = json.detail || `API error: ${res.statusText}`
    throw new Error(message)
  }
  return json
}

export const api = {
  get: (path: string) => request('GET', path),
  post: (path:string, data:any) => request('POST', path, data),
  put: (path:string, data:any) => request('PUT', path, data),
  delete: (path: string) => request('DELETE', path),
}
