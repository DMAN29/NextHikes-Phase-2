export interface ResponseGenerator {
  status_code?: any;
  error_status?: any;
  data?: any;
  title?: any;
  user_image?: any;
}

export const fetchPost = async (url: string, data: any) => {
  const res: any = await fetch(url, {
    method: "POST",
    // credentials: "include",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const error = res.status;
  if (error === 204) {
    return { error_status: error };
  }
  if (!res.ok) {
    if (error === 404 || error === 204 || error === 500) {
      return { error_status: error };
    } else {
      const response = await res.json();
      return { error_status: error, response };
    }
  }
  const response = await res.json();
  return response;
};

export const fetchPostForm = async (url: string, data: any) => {
  const res: any = await fetch(url, {
    method: "POST",
    // credentials: "include",
    body: data,
  });
  const mainData = await res.json();
  if (!res.ok) {
    const error = res.status;
    return { error_status: error, error_msge: mainData };
  }
  return await mainData;
};

export const fetchPatchForm = async (url: string, data: any) => {
  const res: any = await fetch(url, {
    method: "PATCH",
    // credentials: "include",
    body: data,
  });
  const mainData = await res.json();
  if (!res.ok) {
    const error = res.status;
    return { error_status: error, error_msge: mainData };
  }
  return await mainData;
};

export const fetchGet = async (url: string) => {
  const res: any = await fetch(url, {
    method: "GET",
    // credentials: "include",
  });
  const error = res.status;
  if (error === 204) {
    return { error_status: error };
  }
  if (!res.ok) {
    if (error === 404 || error === 204 || error === 500) {
      return { error_status: error };
    } else {
      const response = await res.json();
      return { error_status: error, response };
    }
  }
  const response = await res.json();
  return response;
};

export const fetchGetWithResponse = async (url: string) => {
  const res: any = await fetch(url, {
    method: "GET",
    // credentials: "include",
  });
  if (res.status === 200) {
    const data = await res.json();
    return { userDetails: data, status: 200 };
  } else {
    return { userDetails: null, status: res.status };
  }
};

export const fetchhResponse = async (url: string) => {
  const res: any = await fetch(url, {
    method: "GET",
    // credentials: "include",
  });
  return { status: res.status };
};

export const fetchGetApi = async (url: string) => {
  const res: any = await fetch(url, {
    method: "GET",
  });
  if (!res.ok) {
    const error = res.status;
    return { error_status: error };
  } else if (res.status !== 200) {
    return { status: res.status };
  }
  return await res.json();
};

export const fetchDelete = async (url: string) => {
  const res: any = await fetch(url, {
    method: "DELETE",
    // credentials: "include",
  });
  const error = res.status;
  if (error === 204) {
    return { error_status: error };
  }
  if (!res.ok) {
    if (error === 404 || error === 204 || error === 500) {
      return { error_status: error };
    } else {
      const response = await res.json();
      return { error_status: error, response };
    }
  }
  const response = await res.json();
  return response;
};

export const fetchPut = async (url: string, data: any) => {
  const res: any = await fetch(url, {
    method: "PUT",
    // credentials: "include",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const error = res.status;
  if (error === 204) {
    return { error_status: error };
  }
  if (!res.ok) {
    if (error === 404 || error === 204 || error === 500) {
      return { error_status: error };
    } else {
      const response = await res.json();
      return { error_status: error, response };
    }
  }
  const response = await res.json();
  return response;
};

export const fetchGetForToken = async (url: string, token: any) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      // credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const status = res.status;

    if (status === 204) {
      return { error_status: status };
    }

    if (!res.ok) {
      const response = await res.json().catch(() => ({}));
      return { error_status: status, response };
    }

    const response = await res.json();
    return response;
  } catch (error) {
    return {
      error_status: 500,
      response: { message: "Network error occurred" },
    };
  }
};
