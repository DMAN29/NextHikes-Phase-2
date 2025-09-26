import { fetchGet } from "@/lib/fetcher";

export interface ServiceData {
  success: boolean;
  data: any;
}

export async function getServicePageBySlug(slug: string): Promise<any> {
  const endpoint = `/srvcPage/slug/${encodeURIComponent(slug)}`;
  return fetchGet<ServiceData>(endpoint).then((res) => res.data);
}
