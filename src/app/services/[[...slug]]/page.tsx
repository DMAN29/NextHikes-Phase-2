import { getServicePageBySlug } from "@/api/services";
import ServicePage from "@/views/Services/page";

export default async function Services({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slugParam = Array.isArray(resolvedParams?.slug)
    ? resolvedParams.slug[0]
    : resolvedParams?.slug;

  const serviceData = slugParam ? await getServicePageBySlug(slugParam) : null;

  return <ServicePage data={serviceData} slug={slugParam} />;
}
