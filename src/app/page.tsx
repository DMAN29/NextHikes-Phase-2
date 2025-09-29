import { fetchGet } from "@/lib/fetcher";
import HomePage from "@/views/Home/page";

export default async function Home() {
  let data = null;

  try {
    const res: any = await fetchGet(`/home`, { next: { revalidate: 60 } });
    // console.log(res?.data);

    if (!res?.success) {
      throw new Error("Failed to fetch home data");
    }

    data = res?.data;
  } catch (error) {
    throw new Error("Something went wrong!!");
  }
  return <HomePage data={data} />;
}
