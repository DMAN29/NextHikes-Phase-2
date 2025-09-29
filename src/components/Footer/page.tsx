import Image from "next/image";
import Icon from "../Icon/page";
import Link from "next/link";
import { fetchGet } from "@/lib/fetcher";
import BackToTop from "../BackToTop/page";

async function getFooterData() {
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
      links: linkRes?.data || [],
    };

    return combinedData;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export default async function Footer() {
  const { links, about, services, industry } = await getFooterData();

  const industryMenus =
    industry?.map((item: any) => ({
      name: item.name,
      url: `/industries/${item.slug}`,
    })) || [];

  const serviceMenus =
    services?.map((item: any) => ({
      name: item.name,
      url: `/services/${item.slug}`,
    })) || [];

  return (
    <footer className="bg-white pt-8 border-t border-gray-300">
      <div className="custom-container mx-auto !px-6 !py-4 grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Link className="text-orange-500 cursor-pointer" href={"/"}>
              <Image
                src={"/image/nexthikes-black.webp"}
                alt="logo"
                width={231}
                height={96}
                className="cursor-pointer"
              />
            </Link>
          </div>
          {/* <div className="flex flex-col mt-5">
            <h5 className="uppercase text-black text-xl">Email address*</h5>
            <input
              type="text"
              className="bg-white text-[#393939] w-full max-w-[320px] py-4 pl-3 px-2 mt-2 focus:outline-none border rounded-md"
              placeholder="Enter Your Email Address"
              style={{
                border: "1px solid transparent",
                borderRadius: "5px",
                backgroundImage:
                  "linear-gradient(white, white), linear-gradient(270deg, #D564AB 0%, #372874 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            />

            <button
              className="w-full max-w-[320px] text-white rounded-[5px] text-center border mt-2 py-4 cursor-pointer"
              style={{
                background: "linear-gradient(270deg, #D564AB 0%, #372874 100%)",
              }}
            >
              Subscribe to our Newsletter
            </button>
          </div> */}
          {/* <p className="text-sm text-black mb-4 mt-3">{contact?.about}</p>
          <div className="flex md:gap-1 lg:gap-4 gap-4 mt-4">
            {contact?.socialLinks?.map((item: any, index: any) => (
              <Link
                href={item?.url}
                target="_blank"
                className={`text-xl p-2 border border-[#fff] aspect-square rounded-full cursor-pointer`}
                key={index}
              >
                <Icon name={item?.platform} color="#fff" />
              </Link>
            ))}
          </div> */}
          <p className="my-7">
            Next Hikes is a leading provider of IT solutions devoted to
            providing cutting-edge services and technology to enable businesses
            to thrive in the digital age.
          </p>
          <p className="text-black font-normal text-lg">
            *Contacts information
          </p>
          <div className="flex md:gap-1 lg:gap-4 gap-4 mt-4">
            {links?.map((item: any, index: any) => (
              <Link
                key={index}
                href={item?.url}
                target="_blank"
                className={`text-xl p-2 border border-black aspect-square rounded-full cursor-pointer`}
              >
                <Icon name={item?.platform} color="#000" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4
            className="text-xl font-medium mb-4 uppercase"
            style={{
              background: "linear-gradient(270deg, #D564AB 0%, #372874 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Services
          </h4>
          <ul className="space-y-2 text-lg font-normal flex flex-col text-black">
            {serviceMenus?.slice(0, 4)?.map((item: any, index: any) => (
              <Link href={item.url} key={index}>
                <li className="hover:text-blue-400 cursor-pointer line-clamp-1">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h4
            className="text-xl font-medium mb-4 uppercase"
            style={{
              background: "linear-gradient(270deg, #D564AB 0%, #372874 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Industries
          </h4>
          <ul className="space-y-2 text-lg font-normal flex flex-col text-black">
            {industryMenus?.slice(0, 4)?.map((item: any, index: any) => (
              <Link href={item.url} key={index}>
                <li className="hover:text-blue-400 cursor-pointer line-clamp-1">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h4
            className="text-xl font-medium mb-4 uppercase"
            style={{
              background: "linear-gradient(270deg, #D564AB 0%, #372874 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Company
          </h4>
          <ul className="space-y-2 text-lg font-normal flex flex-col text-black">
            <Link href={`/${about?.slug}`}>
              <li className="hover:text-blue-400 cursor-pointer line-clamp-1">
                About Us
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h4
            className="text-xl font-medium mb-4 uppercase"
            style={{
              background: "linear-gradient(270deg, #D564AB 0%, #372874 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Us
          </h4>
          <ul className="space-y-4 text-lg font-normal text-black">
            <li className="flex items-center gap-2 break-words">
              <Icon name={"email"} color="#000" />
              <Link
                href={`mailto:${"info@nexthikes.com"}`}
                className="hover:underline break-all"
              >
                {"info@nexthikes.com"}
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1">
                <Icon name={"pin"} color="#000" />
              </div>
              <p className="text-black">
                Unit no.- 1137, 11th Floor, Bhutani Alphathum Sector 90 Noida
              </p>
            </li>

            <li className="flex items-center gap-2">
              <Icon name={"phone"} />
              <Link href={`tel:+919627865333`} className="hover:underline">
                {" "}
                +919627865333 (9AM - 6PM, Mon - Sat)
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black mt-4 w-full" />
      <BackToTop />
    </footer>
  );
}
