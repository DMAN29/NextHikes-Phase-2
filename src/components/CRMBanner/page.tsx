import { FaArrowRight } from "react-icons/fa6";

export default function CRMBanner() {
  return (
    <section className="relative h-screen overflow-hidden text-white pt-24">
      <div className="absolute inset-0 bg-[#003049] rounded-bl-[250px] -translate-y-10 translate-x-10 -z-1"></div>
      <div className="flex">
        <div className="w-1/2 ">
          <h1 className="md:text-xl xl:text-4xl  font-semibold leading-relaxed mt-10 w-1/2 mx-auto">
            Smart CRM & HRMS Solutions to Power Your Business
          </h1>
          <p className="w-1/2 mx-auto my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nobis
            dolorem sunt similique odit natus cumque saepe aliquam maiores fugit
            nulla suscipit consectetur reprehenderit quia, itaque pariatur neque
            eum modi?
          </p>
          <div className="flex gap-5 ml-44 mt-10">
            <button className="flex items-center px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold text-lg rounded-full gap-3 shadow-md hover:from-orange-500 hover:to-orange-600 transition">
              Request a Demo
              <FaArrowRight />
            </button>
            <button className="flex items-center px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold text-lg rounded-full gap-3 shadow-md hover:from-orange-500 hover:to-orange-600 transition">
              Get Started Today
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="w-1/2 border"></div>
      </div>
    </section>
  );
}
