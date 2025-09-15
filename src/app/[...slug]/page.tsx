// "use server";

import AboutUs from "@/pages/AboutUs/page";
import { UserService } from "@/utils/Services/allApi";
// import StaticPage from "@/pages/StaticPages/page";

interface DynamicPageProps {
  params: Promise<{ slug?: string[] }>;
}

export const revalidate = 10;

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { slug } = await params;
  const slugPath = slug?.join("/");

  try {
    if (slugPath === "about-us") {
      const [projectRes, reviewRes, dataRes] = await Promise.all([
        UserService.getProjects(),
        UserService.getReviews(),
        UserService.getPageByType(slugPath),
      ]);

      return (
        <AboutUs
          project={Array.isArray(projectRes?.data) ? projectRes.data : []}
          reviews={Array.isArray(reviewRes) ? reviewRes : []}
          data={dataRes?.data || []}
        />
      );
    }

    if (
      slugPath === "terms-and-conditions" ||
      slugPath === "privacy-policy" ||
      slugPath === "refund-policy"
    ) {
      const dataRes = await UserService.getPageByType(slugPath);
      // return <StaticPage data={dataRes?.data || []} />;
    }

    return <div className="container mx-auto p-6" />;
  } catch {
    throw new Error("Failed to fetch data");
  }
}
