import CRMBanner from "@/components/CRMBanner/page";
import CRMFeatures from "@/components/CRMFeatures/page";
import CRMWhy from "@/components/CRMWhy/page";
import ServiceFormPage from "@/components/ServiceForm/page";

const img = "/image/crm.png";

export default function CRM() {
  return (
    <div>
      <CRMBanner />
      <img src={img} alt="CRM Banner" className="w-full h-auto" />
      <CRMFeatures />
      <CRMWhy />
      <ServiceFormPage backgroundColor="#452A7C1A" />
    </div>
  );
}
