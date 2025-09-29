export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchGet<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, { ...options });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${BASE_URL}${endpoint}. Status: ${res.status}`);
  }
  return res.json();
}

export async function fetchPost<T>(
  endpoint: string,
  body: any,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    body: JSON.stringify(body),
    ...options,
  });

  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error(`Failed to parse response from ${BASE_URL}${endpoint}`);
  }

  if (!res.ok) {
    throw new Error(data?.message || `Failed to POST ${BASE_URL}${endpoint}. Status: ${res.status}`);
  }

  return data;
}

export async function fetchPut<T>(
  endpoint: string,
  body: any,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    body: JSON.stringify(body),
    ...options,
  });

  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error(`Failed to parse response from ${BASE_URL}${endpoint}`);
  }

  if (!res.ok) {
    throw new Error(data?.message || `Failed to PUT ${BASE_URL}${endpoint}. Status: ${res.status}`);
  }

  return data;
}

export async function fetchPatch<T>(
  endpoint: string,
  body: any,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    body: JSON.stringify(body),
    ...options,
  });

  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error(`Failed to parse response from ${BASE_URL}${endpoint}`);
  }

  if (!res.ok) {
    throw new Error(
      data?.message || `Failed to PATCH ${BASE_URL}${endpoint}. Status: ${res.status}`
    );
  }

  return data;
}

export async function fetchDelete<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    cache: "force-cache",
    ...options,
  });

  let data;
  try {
    data = await res.json();
  } catch {
    if (res.ok) return {} as T;
    throw new Error(`Failed to parse response from ${BASE_URL}${endpoint}`);
  }

  if (!res.ok) {
    throw new Error(
      data?.message || `Failed to DELETE ${BASE_URL}${endpoint}. Status: ${res.status}`
    );
  }

  return data;
}
