"use client";

import dynamic from "next/dynamic";
import Skeleton from "@/components/Skeleton/page";
import { Suspense } from "react";

// ✅ Import your real MarketingPage dynamically
const DynamicMarketingPage = dynamic(
  () => import("@/views/MarketingPage/page"),
  { ssr: false, loading: () => <Skeleton /> }
);

export default function MarketingWrapper() {
  return (
    <Suspense fallback={<Skeleton />}>
      <DynamicMarketingPage />
    </Suspense>
  );
}
