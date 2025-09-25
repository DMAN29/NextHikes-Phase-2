import { fetchGet } from "@/lib/fetcher";
import Header from "../Header/page";

export default async function HeaderWrapper() {
  const res: any = await fetchGet(`${process.env.NEXT_PUBLIC_BASE_URL}/about/public`, {
    next: { revalidate: 60 },
  });

  return <Header menuItems={res?.data} links={res} />;
}
