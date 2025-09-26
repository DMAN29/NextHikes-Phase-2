import { fetchGet } from "@/lib/fetcher";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export interface ServiceData {
  success: boolean;
  data: any;
}

export async function getServicePageBySlug(slug: string): Promise<ServiceData> {
  const url = `${baseUrl}/srvcPage/slug/${encodeURIComponent(slug)}`;
  return fetchGet<ServiceData>(url).then((res) => res.data);
}
