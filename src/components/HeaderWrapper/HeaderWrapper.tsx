import { fetchGet } from "@/lib/fetcher";
import Header from "../Header/page";

export default async function HeaderWrapper() {
  const res: any = await fetchGet(`/about/public`, {
    next: { revalidate: 60 },
  });

  return <Header menuItems={res?.data} links={res} />;
}
