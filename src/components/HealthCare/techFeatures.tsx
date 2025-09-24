import Image from "next/image";

const healthcareCards = [
  {
    title: "Hospital Management Systems (HMS)",
    description:
      "Streamlining patient registration, appointment scheduling, billing, EMR/EHR integration, and administrative tasks for seamless hospital operations.",
    image: "/images/hms.svg", // change to actual path
  },
  {
    title: "Telemedicine & Virtual Consultation Platforms",
    description:
      "Developing secure, HIPAA-compliant platforms for remote patient consultations, reducing wait times and expanding access to care.",
    image: "/images/telemedicine.svg",
  },
  {
    title: "Patient Engagement Apps",
    description:
      "Creating mobile apps for appointment booking, prescription refills, health tracking, lab report access, and personalized health reminders.",
    image: "/images/patient-engagement.svg",
  },
  {
    title: "Electronic Health Records (EHR/EMR) Systems",
    description:
      "Custom development and integration of secure, interoperable systems for managing patient data efficiently and compliantly.",
    image: "/images/ehr.svg",
  },
  {
    title: "Pharmacy Management Software",
    description:
      "Building systems for inventory management, prescription processing, billing, and regulatory compliance for pharmacies.",
    image: "/images/pharmacy.svg",
  },
  {
    title: "Medical Billing & Insurance Portals",
    description:
      "Developing robust platforms to simplify medical billing, insurance claims processing, and secure communication with patients and payers.",
    image: "/images/billing.svg",
  },
];

const img = "/image/health2.png";
export default function TechFeatures() {
  return (
    <div className="bg-[#F0FBFF] max-w-7xl mx-auto mt-5 px-4 py-32">
      <h1 className="text-[#0A3F74] text-2xl md:text-3xl font-bold text-center mb-8">
        Tailored Technology for every aspects of healthcare
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-4xl">
        {healthcareCards.map((card, i) => (
          <div
            key={card.title}
            className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition max-w-[250px] mx-auto mb-6
              ${i % 3 === 1 ? "md:translate-y-1/4" : ""}
            `}
          >
            <Image
              src={img}
              alt={card.title}
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2 text-center text-[#0A3F74]">
              {card.title}
            </h3>
            <p className="text-sm text-center text-[#403737]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
