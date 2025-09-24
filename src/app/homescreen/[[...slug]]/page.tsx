"use client";

import dynamic from "next/dynamic";
import Skeleton from "@/components/Skeleton/page";
import { Suspense } from "react";

// ✅ Import your real HomeScreen dynamically
const DynamicHomeScreen = dynamic(
  () => import("@/views/HomeScreen/page"),
  { ssr: false, loading: () => <Skeleton /> }
);

export default function HomeScreenPageWrapper() {
  return (
    <Suspense fallback={<Skeleton />}>
      <DynamicHomeScreen />
    </Suspense>
  );
}
