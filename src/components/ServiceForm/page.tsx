"use client";

import { fetchPost } from "@/lib/fetcher";
import { countryCodes } from "@/utils/countryCodes";
import Image from "next/image";
import { useState } from "react";
import Select from "react-select";
import Success from "../Popup/Success";

const FrontEndIcon = () => (
  <Image
    src={"/icons/front-icon.svg"}
    alt="frontend-service"
    width={100}
    height={100}
    className="w-full h-full"
  />
);

const BackEndIcon = () => (
  <Image
    src={"/icons/app-icon.svg"}
    alt="backend-service"
    width={100}
    height={100}
    className="w-full h-full"
  />
);

const AiIntegrationIcon = () => (
  <Image
    src={"/icons/ai-inte-icon.svg"}
    alt="ai-integration-service"
    width={100}
    height={100}
    className="w-full h-full"
  />
);

const DigitalMarketingIcon = () => (
  <Image
    src={"/icons/digi-icon.svg"}
    alt="digital-marketing-service"
    width={100}
    height={100}
    className="w-full h-full"
  />
);

const ServiceCard = ({ icon, title, selected, onClick }: any) => (
  <div
    onClick={onClick}
    className={`
      bg-white w-full p-4 lg:p-6 rounded-2xl flex flex-col items-center justify-center 
      text-center transition-all duration-300 ease-in-out transform
      ${selected ? "ring-2 ring-blue-500" : ""}
    `}
  >
    <div className="relative h-12 lg:h-16 w-16 mb-4">{icon}</div>
    <h3 className="font-medium text-[##363636] sm:text-sm md:text-lg mt-2">
      {title}
    </h3>
  </div>
);

export default function ServiceFormPage({ backgroundColor }: any) {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    email: "",
    phone: "",
    launchPlan: "immediate",
    projectAbout: "",
    countryCode: "+91",
  });

  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone Number must be 10 digits";
    if (!formData.projectAbout.trim())
      newErrors.projectAbout = "Project details are required";
    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // setLoading(true);

    const data = {
      fullName: formData.fullName,
      city: formData.city,
      email: formData.email,
      phoneNumber: formData.phone,
      launchTimeline: formData.launchPlan,
      projectDescription: formData.projectAbout,
      countryCode: formData.countryCode,
    };

    console.log(data);
    setLoading(false);

    try {
      const res: any = await fetchPost(`/contact`, data);
      if (res?.success) {
        setShowPopup(true);
        setFormData({
          fullName: "",
          city: "",
          email: "",
          phone: "",
          launchPlan: "immediate",
          projectAbout: "",
          countryCode: "",
        });
      } else if (
        res?.response?.error === "Error creating query: Validation error"
      ) {
        setErrorPopup(true);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const services = [
    { id: "frontend", title: "Front-End Development", icon: <FrontEndIcon /> },
    { id: "backend", title: "Back-End Development", icon: <BackEndIcon /> },
    { id: "ai", title: "AI Integration", icon: <AiIntegrationIcon /> },
    {
      id: "marketing",
      title: "Digital Marketing",
      icon: <DigitalMarketingIcon />,
    },
  ];

  const launchOptions = [
    { key: "Immediately", value: "immediately" },
    { key: "Within 2-3 weeks", value: "within 2-3 weeks" },
    { key: "1 Month", value: "1 month" },
    { key: "Not sure", value: "not sure" },
  ];

  const countryOptions = countryCodes.map((c) => ({
    value: c.dial_code,
    label: (
      <div className="flex items-center gap-2">
        <img
          src={`https://flagcdn.com/${c.code.toLowerCase()}.svg`}
          alt={c.code}
          className="w-5 h-4"
        />
        <span>{c.dial_code}</span>
      </div>
    ),
  }));

  const defaultCountry = countryOptions.find((c) => c.value === "+91");

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans mb-10">
      <main
        className="w-full max-w-7xl mx-auto backdrop-blur-xl border border-[#fff] rounded-3xl shadow-2xl shadow-sky-200/50 p-4 sm:p-6 lg:p-8"
        style={{
          boxShadow: "0px 1.2px 29.92px 0px #452A7C1A",
          background:
            backgroundColor ||
            "linear-gradient(68.8deg, rgba(255, 255, 255, 0.2) 10.42%, rgba(255, 255, 255, 0.035) 77.11%)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
              />
            ))}
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-1 w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-black"
                    placeholder="Ashish"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs">{errors.fullName}</p>
                  )}
                </div>

                {/* City */}
                <div className="relative">
                  <label
                    htmlFor="city"
                    className="text-sm font-medium text-gray-600"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="mt-1 w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-black"
                    placeholder="Delhi"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs">{errors.city}</p>
                  )}
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-black"
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              <div className="relative">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <div className="flex items-end gap-2 mt-1">
                  <Select
                    options={countryOptions}
                    defaultValue={defaultCountry}
                    onChange={(option) =>
                      setFormData((prev: any) => ({
                        ...prev,
                        countryCode: option?.value,
                      }))
                    }
                    className="w-full max-w-[140px] scrollbar-hide"
                  />

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength={10}
                    pattern="[0-9]{10}"
                    className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-black"
                    placeholder="9876543210"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Planning to launch your project?
                </label>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                  {launchOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-2 cursor-pointer text-sm text-gray-700"
                    >
                      <input
                        type="radio"
                        name="launchPlan"
                        value={option.value}
                        checked={formData.launchPlan === option.value}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span>{option.key}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project About */}
              <div>
                <label
                  htmlFor="projectAbout"
                  className="text-sm font-medium text-gray-600"
                >
                  What&apos;s your project about?
                </label>
                <input
                  type="text"
                  id="projectAbout"
                  name="projectAbout"
                  value={formData.projectAbout}
                  onChange={handleInputChange}
                  className="mt-1 w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-black"
                  placeholder="Write your message..."
                />
                {errors.projectAbout && (
                  <p className="text-red-500 text-xs">{errors.projectAbout}</p>
                )}
              </div>

              {/* Submit */}
              <div className="w-full flex justify-center items-center md:justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full md:w-auto px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg focus:outline-none transform transition-all duration-300 text-base ${
                    loading
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-[#011C2A] text-white cursor-pointer"
                  }`}
                >
                  {loading ? "Submitting..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      {showPopup && <Success onClose={() => setShowPopup(false)} />}
    </div>
  );
}
