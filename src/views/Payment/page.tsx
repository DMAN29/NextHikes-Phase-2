import ServiceFormPage from "@/components/ServiceForm/page";
import Image from "next/image";
import { IoMdLock } from "react-icons/io";

export default function PaymentPage() {
  const payments = [
    {
      bgColor:
        "linear-gradient(180deg, #FAAF46 0%, #F69947 25%, #F2744C 60%, #FF7144 100%)",
      title: "UPI Payments",
      icon: "/icons/upi-icon.svg",
      btnText: "Pay with UPI",
      anotherIcon: "/icons/upi-text-icon.svg",
      subtitle: "Install payments via UPI apps",
    },
    {
      bgColor:
        "linear-gradient(98.36deg, #6DA8E8 6.27%, #485FC1 39.28%, #2A3399 66.72%, #232396 94.59%)",
      title: "Razorpay Payments",
      icon: "/icons/razorpay-icon.svg",
      btnText: "Pay with Razor",
      subtitle: "Secure payments via cards, Net banking and wallet",
    },
  ];
  return (
    <section>
      <Image
        src={"/image/world.webp"}
        alt="world-image"
        width={1000}
        height={1000}
        className="w-full h-auto min-h-screen object-cover"
      />
      <div className="custom-container flex flex-col items-center !my-5 !px-4 sm:!px-6 lg:!px-0">
        <h2 className="capitalize font-semibold text-3xl sm:text-4xl md:text-5xl text-center">
          Choose your payment method
        </h2>
        <div className="my-7 flex flex-col sm:flex-row sm:items-end sm:gap-3 items-center text-center sm:text-left">
          <Image
            src={"/icons/shield.svg"}
            alt="shield-icon"
            width={30}
            height={30}
            className="mb-2 sm:mb-0"
          />
          <p className="capitalize font-semibold text-lg sm:text-xl">
            Select a secure and convinient option to complete your payment
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-7 mt-10">
          {payments.map((item, index) => (
            <div
              className="relative w-[300px] h-[450px] rounded-4xl overflow-hidden shadow-[6px_7px_16.4px_0px_#00000040] bg-white"
              key={index}
            >
              <div
                className="absolute rounded-full z-0 w-full h-full"
                style={{
                  width: "500px",
                  height: "500px",
                  background: `${item.bgColor}`,
                  transform: "translate(50%, -50%)",
                  left: "-116%",
                  top: "1%",
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={200}
                  height={200}
                  className=""
                  style={{
                    position: "absolute",
                    top: "72%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>

              <div className="flex flex-col items-center w-[300px] h-[450px] rounded-4xl overflow-hidden bg-white shadow-lg">
                <div className="flex flex-col gap-3 items-center mt-[86%] px-2 z-10">
                  <h3 className="text-black font-semibold text-2xl">
                    {item.title}
                  </h3>
                  {item.anotherIcon && (
                    <Image
                      src={item.anotherIcon}
                      alt={item.title}
                      width={66}
                      height={24}
                    />
                  )}
                  <p className="text-center font-medium text-black text-lg">
                    {item.subtitle}
                  </p>
                </div>

                <button
                  className="w-[220px] absolute bottom-0 mb-7 text-center text-white py-2 text-xl font-medium rounded-full cursor-pointer"
                  style={{ background: `${item.bgColor}` }}
                >
                  {item.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="bg-[#EFF9FF] flex items-center gap-2 mt-20 mb-5 px-4 py-2 rounded-full shadow-[1px_2px_2.5px_0px_#0000001C]">
          <IoMdLock size={24} color="#0047C1" />
          <span className="text-black font-medium text-lg">
            100% Secure And Encrypted
          </span>
        </p>
      </div>
      <ServiceFormPage backgroundColor="#452A7C1A" />
    </section>
  );
}
