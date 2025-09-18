"use client";

import Skeleton from "@/components/Skeleton/page";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Suspense } from "react";

const ServicePage = dynamic(() => import("@/views/Services/page"), {
  loading: () => <Skeleton />,
});

export default function Services() {
  const params = useParams<{ slug?: string[] }>();
  const slugParam = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  return (
    <Suspense fallback={<Skeleton />}>
      <ServicePage slug={slugParam} />
    </Suspense>
  );
}
