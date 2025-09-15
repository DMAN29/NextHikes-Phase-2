"use client";

import Skeleton from "@/components/Skeleton/page";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Suspense } from "react";

const IndustriesPage = dynamic(() => import("@/pages/Industries/page"), {
  loading: () => <Skeleton />,
});

export default function Industries() {
  const params = useParams<{ slug?: string[] }>();
  const slugParam = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  
  return (
    <Suspense fallback={<Skeleton />}>
      <IndustriesPage slug={slugParam} />
    </Suspense>
  );
}
