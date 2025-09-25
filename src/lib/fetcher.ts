export async function fetchGet<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, { cache: "force-cache", ...options });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}. Status: ${res.status}`);
  }
  return res.json();
}

export async function fetchPost<T>(
  url: string,
  body: any,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    body: JSON.stringify(body),
    cache: "force-cache",
    ...options,
  });

  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error(`Failed to parse response from ${url}`);
  }

  if (!res.ok) {
    throw new Error(data?.message || `Failed to POST ${url}. Status: ${res.status}`);
  }

  return data;
}

export async function fetchPut<T>(
  url: string,
  body: any,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    body: JSON.stringify(body),
    cache: "force-cache",
    ...options,
  });

  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error(`Failed to parse response from ${url}`);
  }

  if (!res.ok) {
    throw new Error(data?.message || `Failed to PUT ${url}. Status: ${res.status}`);
  }

  return data;
}

export async function fetchPatch<T>(
  url: string,
  body: any,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    body: JSON.stringify(body),
    cache: "force-cache",
    ...options,
  });

  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error(`Failed to parse response from ${url}`);
  }

  if (!res.ok) {
    throw new Error(
      data?.message || `Failed to PATCH ${url}. Status: ${res.status}`
    );
  }

  return data;
}

export async function fetchDelete<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, {
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
    throw new Error(`Failed to parse response from ${url}`);
  }

  if (!res.ok) {
    throw new Error(
      data?.message || `Failed to DELETE ${url}. Status: ${res.status}`
    );
  }

  return data;
}
