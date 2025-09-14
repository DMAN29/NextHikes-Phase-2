import dynamic from "next/dynamic";

const IndustriesPage = dynamic(() => import("@/pages/Industries/page"), {
  loading: () => <div className="min-h-screen"></div>,
});

export default function Industries() {
  return <IndustriesPage />;
}
