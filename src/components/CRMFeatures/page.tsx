"use client";
import React, { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";

interface FeatureTab {
  key: string;
  items: string[];
  title: string;
}

const FEATURES: FeatureTab[] = [
  {
    key: "CRM Features",
    items: [
      "Contact & Lead Management",
      "Sales Pipeline Tracking",
      "Automated Follow-Ups & Reminders",
      "Customer Support Ticketing",
      "Email & SMS Campaign Integration",
      "Real-Time Analytics & Reporting",
    ],
    title: "Build Stronger Customer Relationships",
  },
  {
    key: "HRMS Features",
    items: ["Attendance Tracking", "Leave Management", "Payroll Automation"],
    title: "Efficient Employee Management",
  },
  {
    key: "We Serve For",
    items: ["SMEs", "Startups", "Enterprises"],
    title: "Industry Solutions",
  },
];

const CRMFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="my-10">
      <h1 className="text-xl md:text-3xl xl:text-5xl font-semibold leading-relaxed text-center">
        Your Business, Organized & Optimized
      </h1>
      <hr className="w-11/12 mx-auto border-b-2 border-gray-200" />
      <div className="flex flex-col md:flex-row w-11/12 mx-auto justify-center my-10">
        {/* Left Sidebar */}
        <div className="flex flex-col items-center justify-center w-11/12 mx-auto md:mx-0 md:w-[30%] mr-0 md:mr-8 mb-6 md:mb-0">
          {FEATURES.map((feature, idx) => (
            <button
              key={feature.key}
              type="button"
              className={`flex items-center space-x-2 px-3 py-2 mb-2
                text-lg font-semibold transition
                ${
                  activeTab === idx
                    ? "text-orange-600"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              onClick={() => setActiveTab(idx)}
            >
              {activeTab === idx && <CiLocationArrow1 size={20} />}
              <span>{feature.key}</span>
            </button>
          ))}
        </div>
        {/* Right Content */}
        <div
          className="w-11/12 mx-auto md:mx-0 rounded-lg shadow-md px-7 py-7  md:w-[70%]"
          style={{
            background: "linear-gradient(90deg, #33556E 0%, #0f3654 100%)",
          }}
        >
          <h2 className="font-semibold text-lg mb-4 text-white">
            {FEATURES[activeTab].title}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-white">
            {FEATURES[activeTab].items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CRMFeatures;
