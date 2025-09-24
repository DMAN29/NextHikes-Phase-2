import Image from "next/image";

const img1 = "/image/health1.png";
const missions = [
  {
    title: "Doctor On-Demand",
    description:
      "Connect instantly with verified medical professionals anytime.",
    image: "/icons/doctor.svg",
  },
  {
    title: "Integrated Wallet",
    description:
      "Secure and easy in-app payments for consultations and services.",
    image: "/icons/wallet.svg",
  },
  {
    title: "Real-Time Chat with Doctors",
    description: "Quick messaging for instant medical advice.",
    image: "/icons/chat.svg",
  },
  {
    title: "Prescription Management",
    description:
      "Upload and store prescriptions for both patients and doctors.",
    image: "/icons/prescription.svg",
  },
  {
    title: "AI-Powered Doctor Assistance",
    description: "Smart symptom checker and preliminary health insights.",
    image: "/icons/ai-assist.svg",
  },
  {
    title: "Lab Tests & Reports Management",
    description: "Book lab tests, view reports, and track visit history.",
    image: "/icons/lab-report.svg",
  },
];

export default function Mission() {
  return (
    <div className="bg-gradient-to-b from-[#0B82C0] to-[#053D5A] text-white py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        Our Mission
      </h1>
      <p className="text-lg text-center mb-6">Developments Includes :</p>

      <div className="w-11/12 mx-auto flex gap-4">
        {missions.map((item, idx) => (
          <div
            key={idx}
            className="w-1/6 flex flex-col items-center rounded-2xl px-4 py-5 transition-all"
          >
            <div className="bg-white rounded-full flex items-center justify-center p-4 mb-3">
              <div
                className="relative flex items-center justify-center w-24 h-24 rounded-full bg-white"
                style={{
                  boxShadow:
                    "0 0 15px 6px rgba(0, 0, 0, 0.1), 0 0 10px 3px rgba(0, 0, 0, 0.07)",
                }}
              >
                <Image
                  src={img1}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-white whitespace-normal text-base leading-tight mb-2">
                {item.title}
              </h3>
              <p className="text-white/80 text-xs">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
