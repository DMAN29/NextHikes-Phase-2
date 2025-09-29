"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { BiMailSend } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

export default function ContactInfo() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    findUs: "",
  });

  // Error messages per field
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    findUs: "",
  });

  // Handle input changes to update state and clear errors
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate form and return errors object
  const validate = () => {
    const newErrors: typeof errors = {
      name: "",
      email: "",
      phoneNumber: "",
      findUs: "",
    };
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.findUs.trim()) newErrors.findUs = "Please select an option";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.values(validationErrors).some((msg) => msg !== "")) {
      setErrors(validationErrors);
      return;
    }
    // Submission logic here (e.g., API call)
    alert("Form submitted successfully");
  };

  return (
    <section className="md:w-5/6 w-full md:mx-auto my-20 px-3">
      <div
        className="bg-white rounded-2xl flex flex-col md:flex-row overflow-hidden md:justify-end "
        style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#372874] to-[#D564AB] inline-block">
              Touch
            </span>
          </h1>
          <p className="font-medium mt-4 mb-8 text-sm md:text-base">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-600 text-xs">{errors.name}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-600 text-xs">{errors.email}</p>
            )}

            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number*"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:outline-none"
            />
            {errors.phoneNumber && (
              <p className="text-red-600 text-xs">{errors.phoneNumber}</p>
            )}

            <select
              name="findUs"
              value={formData.findUs}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:outline-none"
            >
              <option value="">How did you find us?</option>
              <option>Google</option>
              <option>Friend</option>
              <option>Advertisement</option>
              <option>Other</option>
            </select>
            {errors.findUs && (
              <p className="text-red-600 text-xs">{errors.findUs}</p>
            )}

            <button
              type="submit"
              className="w-full py-2 rounded text-white font-semibold bg-gradient-to-r from-[#372874] to-[#D564AB] hover:opacity-90 transition"
            >
              SEND
            </button>
          </form>

          <div className="flex flex-wrap mt-8 gap-8">
            <div className="flex items-center gap-2">
              <LuPhoneCall fontSize={"1.5rem"} />
              <div>
                <div className="font-bold">PHONE</div>
                <div className="text-[#D564AB]">03 5342 1254</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BiMailSend fontSize={"1.5rem"} />
              <div>
                <div className="font-bold">EMAIL</div>
                <div className="text-[#D564AB]">info@emce.com.au</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <SlLocationPin fontSize={"1.5rem"} />
              <div>
                <div className="font-bold">Address</div>
                <div className="text-[#D564AB]">Bhutan</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex items-center justify-center relative h-auto md:h-auto">
          <iframe
            title="Next Hikes: IT Solutions"
            src="https://www.google.com/maps?q=Next+Hikes+IT+Solutions&output=embed"
            width="100%"
            height="100%"
            className="p-2 md:py-8 md:pr-8 rounded-2xl z-2 h-full"
            allowFullScreen
            loading="lazy"
          />
          <div className="absolute top-0 right-0 h-full z-1 bg-[#183A4A] w-full md:w-2/3 " />
        </div>
      </div>
    </section>
  );
}
