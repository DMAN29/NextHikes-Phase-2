"use client";

import dynamic from "next/dynamic";
import Skeleton from "@/components/Skeleton/page";
import { Suspense } from "react";

// ✅ Import your real Marketing dynamically
const DynamicMarketing = dynamic(
  () => import("@/views/Marketing/page"),
  { ssr: false, loading: () => <Skeleton /> }
);

export default function MarketingWrapper() {
  return (
    <Suspense fallback={<Skeleton />}>
      <DynamicMarketing />
    </Suspense>
  );
}
