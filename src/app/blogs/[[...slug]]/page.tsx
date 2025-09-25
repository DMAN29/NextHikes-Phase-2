import { fetchGet } from "@/lib/fetcher";
import DetailPage from "@/views/BlogDetail/page";
import Blogs from "@/views/Blogs/page";
import { notFound } from "next/navigation";

interface Params {
  params: { slug?: string[] };
}

export const revalidate = 10;

export default async function BlogsCatchAllPage({ params }: Params) {
  const { slug: slugArray } = params;

  try {
    if (!slugArray || slugArray.length === 0) {
      const blogsRes: any = await fetchGet(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog`
      );

      if (!blogsRes?.success) {
        throw new Error("Failed to fetch blogs");
      }

      return <Blogs data={blogsRes.data || []} />;
    }

    const slug = slugArray[slugArray.length - 1];
    const blogRes: any = await fetchGet(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blog/slug/${slug}`
    );

    if (!blogRes?.success || !blogRes?.data) {
      return notFound();
    }

    return <DetailPage data={blogRes.data} />;
  } catch (error) {
    throw new Error("Something went wrong while loading blogs.");
  }
}
