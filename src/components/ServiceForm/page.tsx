"use client";

// import { UserService } from "@/utils/Services/allApi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FrontEndIcon = () => (
  <Image src={"/icons/frontend-icon.svg"} alt="frontend-service" fill />
);

const BackEndIcon = () => (
  <Image src={"/icons/backend-icon.svg"} alt="backend-service" fill />
);

const AiIntegrationIcon = () => (
  <Image src={"/icons/ai-icon.svg"} alt="ai-integration-service" fill />
);

const DigitalMarketingIcon = () => (
  <Image
    src={"/icons/marketing-icon.svg"}
    alt="digital-marketing-service"
    fill
  />
);

const ServiceCard = ({ icon, title, selected, onClick }: any) => (
  <div
    onClick={onClick}
    className={`
      bg-white w-full p-4 lg:p-6 rounded-2xl flex flex-col items-center justify-center 
      text-center cursor-pointer transition-all duration-300 ease-in-out transform
      ${selected ? "ring-2 ring-blue-500" : ""}
    `}
  >
    <div className="relative h-12 lg:h-16 w-16 mb-4">{icon}</div>
    <h3 className="font-medium text-[#363636] sm:text-xs md:text-sm mt-2">
      {title}
    </h3>
  </div>
);

export default function ServiceFormPage({ backgroundColor }: any) {
  const [selectedService, setSelectedService] = useState(
    "Front-End Development"
  );
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
  });

  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev: any) => ({ ...prev, [name]: "" })); // clear error on change
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

    setLoading(true);

    const data = {
      name: formData.fullName,
      city: formData.city,
      email: formData.email,
      phoneNumber: formData.phone,
      launchProject: formData.launchPlan,
      projectAbout: formData.projectAbout,
    };

    // try {
    //   const res = await UserService.createQuery(data);
    //   if (res?.success) {
    //     setShowPopup(true);
    //     setFormData({
    //       fullName: "",
    //       city: "",
    //       email: "",
    //       phone: "",
    //       launchPlan: "immediate",
    //       projectAbout: "",
    //     });
    //   } else if (
    //     res?.response?.error === "Error creating query: Validation error"
    //   ) {
    //     setErrorPopup(true);
    //   }
    // } catch (error) {
    // } finally {
    //   setLoading(false);
    // }
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
    { key: "Immediately", value: "immediate" },
    { key: "Within 2-3 weeks", value: "2-3 weeks" },
    { key: "1 Month", value: "one month" },
    { key: "Not sure", value: "not sure" },
  ];

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
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
                {/* Full Name */}
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

                {/* Email */}
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

                {/* Phone */}
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-600"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength={10}
                    pattern="[0-9]{10}"
                    className="mt-1 w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-black"
                    placeholder="9876543210"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Launch Plan */}
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
                  className={`w-full md:w-auto px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg focus:outline-none transform transition-all duration-300 text-[12px] ${
                    loading
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-[#011C2A] text-white cursor-pointer"
                  }`}
                >
                  {loading ? "Submitting..." : "Send Message"}
                </button>
              </div>
            </form>

            {/* Popup */}
          </div>
        </div>
      </main>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Thanks for contacting us!
            </h3>
            <p className="text-gray-600 mt-2">
              {" "}
              We will contact you shortly 😊
            </p>

            <Link href={"/"}>
              <button
                // onClick={() => setShowPopup(false)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
              >
                Close
              </button>
            </Link>
          </div>
        </div>
      )}
      {errorPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Your query is already submitted!
            </h3>
            <p className="text-gray-600 mt-2">
              {" "}
              Our team will contact you shortly 😊
            </p>

            <Link href={"/"}>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                Close
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
