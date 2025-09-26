import { fetchGet } from "@/lib/fetcher";

export interface ServiceData {
  success: boolean;
  data: any;
}

export async function getServicePageBySlug(slug: string): Promise<any> {
  const endpoint = `/srvcPage/slug/${encodeURIComponent(slug)}`;
  const res = await fetchGet<ServiceData>(endpoint);
  // console.log("API response:", res);
  return res.data;
}
