import { fetchGet } from "@/lib/fetcher";
import IndustriesPage from "@/views/Industries/page";

interface IndustriesProps {
  params: { slug?: string[] };
}

export default async function Industries({ params }: IndustriesProps) {
  const slugParam = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  let slugData: any = null;
  try {
    slugData = await fetchGet(`/page/slug/${slugParam}`, {
      next: { revalidate: 60 },
    });
  } catch (error) {}

  return <IndustriesPage slug={slugParam} industryData={slugData?.data} />;
}
