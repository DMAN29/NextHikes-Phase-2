import { fetchGet } from "@/lib/fetcher";
import Header from "../Header/page";

export default async function HeaderWrapper() {
  try {
    const [aboutRes, industryRes, serviceRes, linkRes]: any = await Promise.all(
      [
        fetchGet(`/about/public`, { next: { revalidate: 60 } }),
        fetchGet(`/industry`, { next: { revalidate: 10 } }),
        fetchGet(`/srvc/all`, { next: { revalidate: 10 } }),
        fetchGet(`/link/all`, { next: { revalidate: 60 } }),
      ]
    );

    if (!aboutRes || !industryRes || !serviceRes || !linkRes?.success) {
      throw new Error("Failed to fetch header data");
    }

    const combinedData = {
      industry: industryRes || [],
      about: aboutRes?.data || [],
      services: serviceRes || [],
    };

    return <Header menuItems={combinedData} links={linkRes?.data} />;
  } catch (error) {
    return (
      <Header
        menuItems={{
          industry: [],
          services: [],
          about: {},
        }}
        links={[]}
      />
    );
  }
}
