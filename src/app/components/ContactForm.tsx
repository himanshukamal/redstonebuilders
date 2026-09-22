"use client";
import React, { useState } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import ReactFlagsSelect from "react-flags-select";

type ContactFormProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  enquiryType?: string;
};

const ContactForm = ({
  title = "Book Your Consultation",
  subtitle = "For Best Quality Construction At Affordable Rates",
  buttonText = "Start Your Construction",
  enquiryType,
}: ContactFormProps) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    number: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [sendError, setSendError] = useState("");

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", number: "", message: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (!number.trim()) {
      newErrors.number = "Phone number is required.";
      valid = false;
    } else if (!/^\d{7,15}$/.test(number)) {
      newErrors.number = "Enter a valid phone number (7-15 digits).";
      valid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setIsSending(true);
    setSendError("");

    try {
      // Sent via our own API route so the Brevo API key stays on the server
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          phone: `${selectedCountry} ${number}`,
          message,
          enquiryType,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Could not send your message. Please try again.");
      }

      setSentSuccess(true);
      setName("");
      setNumber("");
      setMessage("");
      setErrors({ name: "", number: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSendError(
        error instanceof Error ? error.message : "Could not send your message. Please try again."
      );
    } finally {
      setIsSending(false);
      setTimeout(() => setSentSuccess(false), 3000); // reset success message after 3 sec
    }
  };

  return (
    <div
      id="enquiry"
      className="rounded-2xl bg-white p-4 w-full lg:max-w-[400px] h-fit flex flex-col gap-2 scroll-mt-[110px]"
    >
      <p className="text-[24px] font-extrabold text-black text-center">
        {title}
      </p>
      <p className="text-black font-semibold text-center">
        {subtitle}
      </p>

      <input
        className="h-[50px] p-2 w-full rounded-md bg-[#D9D9D9] outline-none"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && (
        <p className="text-red-500 text-sm px-1">{errors.name}</p>
      )}

      {/* Country Code with Full Width Dropdown */}
      <div className="flex w-full">
        <div className="w-2/5">
          <ReactFlagsSelect
            selected={selectedCountry}
            onSelect={(code) => setSelectedCountry(code)}
            searchable
            searchPlaceholder="Search country"
            className="!w-full 
                 [&_button]:!w-full 
                 [&_button]:!h-[50px] 
                 [&_button]:!bg-[#D9D9D9] 
                 [&_button]:!rounded-l-md 
                 [&_button]:!rounded-r-none 
                 [&_button]:!border-none 
                 [&_button]:!outline-none 
                 [&_ul]:!border-none 
                 [&_ul]:!w-full"
            fullWidth
          />
        </div>
        <input
          className="h-[50px] p-2 w-3/5 rounded-r-md bg-[#D9D9D9] outline-none"
          type="tel"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      {errors.number && (
        <p className="text-red-500 text-sm px-1">{errors.number}</p>
      )}

      <textarea
        className="h-[100px] p-2 w-full rounded-md bg-[#D9D9D9] resize-none outline-none"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {errors.message && (
        <p className="text-red-500 text-sm px-1">{errors.message}</p>
      )}

      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <button
            onClick={handleSubmit}
            className="w-full h-[64px] bg-[#E76969] flex items-center justify-center rounded-md text-white font-bold transition hover:bg-[#e76969fc] cursor-pointer"
          >
            {isSending ? "Sending..." : buttonText}
          </button>
        </HoverCard.Trigger>
        <HoverCard.Content
          sideOffset={5}
          className="bg-black text-white px-4 py-2 rounded-lg text-sm shadow-lg z-50"
        >
          Click to send us your project details!
        </HoverCard.Content>
      </HoverCard.Root>
      {sentSuccess && (
        <p className="text-green-600 font-semibold text-center mt-2">
          Message sent successfully!
        </p>
      )}
      {sendError && (
        <p className="text-red-500 font-semibold text-center mt-2">{sendError}</p>
      )}
    </div>
  );
};

export default ContactForm;
