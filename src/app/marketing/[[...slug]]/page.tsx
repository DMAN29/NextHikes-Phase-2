import dynamic from "next/dynamic";
import Skeleton from "@/components/Skeleton/page";
import { Suspense } from "react";
import { fetchGet } from "@/lib/fetcher";
import { notFound } from "next/navigation";

const DynamicMarketing = dynamic(() => import("@/views/Marketing/page"), {
  ssr: false,
  loading: () => <Skeleton />,
});

export default async function MarketingWrapper() {
  try {
    const res: any = await fetchGet(`/about/public`);

    if (!res?.success || !res.data) {
      return notFound();
    }

    return (
      <Suspense fallback={<Skeleton />}>
        <DynamicMarketing />
      </Suspense>
    );
  } catch (error) {
    console.error("Error loading page:", error);
    return notFound();
  }
}
