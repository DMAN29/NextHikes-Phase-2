import dynamic from "next/dynamic";
import Skeleton from "@/components/Skeleton/page";
import { Suspense } from "react";
import { fetchGet } from "@/lib/fetcher";
import { notFound } from "next/navigation";
import MarketingPage from "@/views/Marketing/page";

export default async function MarketingWrapper() {
  try {
    const res: any = await fetchGet(`/about/public`);

    if (!res?.success || !res.data) {
      return notFound();
    }

    return (
      <Suspense fallback={<Skeleton />}>
        <MarketingPage />
      </Suspense>
    );
  } catch (error) {
    console.error("Error loading page:", error);
    return notFound();
  }
}
