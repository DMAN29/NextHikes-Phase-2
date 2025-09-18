// "use server";

import CRM from "@/pages/CRM/page";
import { UserService } from "@/utils/Services/allApi";
import AboutUs from "@/views/AboutUs/page";
import { notFound } from "next/navigation";

interface DynamicPageProps {
  params: Promise<{ slug?: string[] }>;
}

export const revalidate = 10;

const VALID_SLUGS = [
  "about-us",
  "terms-and-conditions",
  "privacy-policy",
  "refund-policy",
];

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { slug } = await params;
  const slugPath = slug?.join("/");

  // agar slug hi missing ho
  if (!slugPath) return notFound();

  // agar slug invalid hai
  if (!VALID_SLUGS.includes(slugPath)) return notFound();

  try {
    // about-us page
    if (slugPath === "about-us") {
      const [projectRes, reviewRes, dataRes] = await Promise.all([
        UserService.getProjects(),
        UserService.getReviews(),
        UserService.getPageByType(slugPath),
      ]);

      if (!dataRes?.data) return notFound();

      return (
        <AboutUs
          project={Array.isArray(projectRes?.data) ? projectRes.data : []}
          reviews={Array.isArray(reviewRes) ? reviewRes : []}
          data={dataRes.data}
        />
      );
    }

    if (slugPath === "crm") {
      return <CRM />;
    }

    if (
      slugPath === "terms-and-conditions" ||
      slugPath === "privacy-policy" ||
      slugPath === "refund-policy"
    ) {
      // const dataRes = await UserService.getPageByType(slugPath);
      // if (!dataRes?.data) return notFound();

      // return <div>{dataRes.data?.content || "Static page content"}</div>;
    }
  } catch (error) {
    throw new Error("Something went wrong while loading this page");
  }
}
