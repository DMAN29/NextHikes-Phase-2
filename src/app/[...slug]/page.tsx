import { fetchGet } from "@/lib/fetcher";
import AboutUs from "@/views/AboutUs/page";
import { notFound } from "next/navigation";

interface DynamicPageProps {
  params: { slug?: string[] };
}

export const revalidate = 60;

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { slug } = params;
  const slugPath = slug?.join("/");

  if (!slugPath) return notFound();

  try {
    const res: any = await fetchGet(`/about/public`);

    if (!res?.success || !res.data) {
      return notFound();
    }

    return <AboutUs data={res.data} />;

  } catch (error) {
    console.error("Error loading page:", error);
    return notFound();
  }
}
