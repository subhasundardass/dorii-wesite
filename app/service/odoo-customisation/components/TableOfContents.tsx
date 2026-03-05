"use client";
import FreeConsultationPopup from "@/components/ConsultationPopup";
import ConsultationPopup from "@/components/ConsultationPopup";
import { useEffect, useState } from "react";

export default function TableOfContents() {
  const tocItems = [
    { id: "what-is-odoo-customisation", label: "What Is Odoo Customisation?" },
    { id: "when-should-you-customise", label: "When Should You Customise?" },
    { id: "workflow-automation", label: "Workflow Automation" },
    { id: "custom-module-development", label: "Custom Module Development" },
    { id: "implementation-setup", label: "Implementation & Setup" },
    { id: "industries-we-serve", label: "Industries We Serve" },
    {
      id: "serving-siliguri-north-bengal",
      label: "Serving Siliguri & North Bengal",
    },
    { id: "cost-timeline", label: "Cost & Timeline" },
    { id: "choosing-a-developer", label: "Choosing a Developer" },
    { id: "frequently-asked-questions", label: "Frequently Asked Questions" },
  ];

  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // trigger when section is near middle
        threshold: 0,
      },
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      tocItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      {/* MOBILE */}
      <div className="lg:hidden mb-10">
        <h3 className="text-sm uppercase tracking-widest text-gray-700 dark:text-gray-300 mb-4">
          Table of Contents
        </h3>

        <ul className="flex flex-wrap gap-4 text-sm">
          {tocItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${
                  activeId === item.id
                    ? "text-purple-700 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-purple-700 transition`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* DESKTOP */}
      <aside className="hidden lg:block sticky top-24 h-fit pr-4">
        <h3 className="text-sm uppercase tracking-widest text-gray-700 dark:text-gray-300 mb-6">
          Table of Contents
        </h3>

        <ul className="space-y-2 text-sm border-l text-gray-700 dark:text-gray-300">
          {tocItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block pl-4 py-2 border-l-2 ${
                  activeId === item.id
                    ? "border-[#734B66] text-[#734B66] font-semibold"
                    : "border-transparent text-gray-700 dark:text-gray-300"
                } hover:border-[#734B66] hover:text-[#5e2b97] transition-all duration-200`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 p-4  border  rounded-lg space-y-4">
          <p className="text-sm  leading-relaxed">
            Need a custom Odoo solution? We’ll send a fixed-price quote within
            <span className="text-[#734B66] font-semibold"> 48 hours</span>.
          </p>
          <FreeConsultationPopup
            buttonText="Book a Free Consultation"
            buttonClass="block w-full text-center px-4 py-2.5 rounded-md bg-[#734B66] text-white text-sm font-semibold hover:bg-[#5e3d54] transition"
          />
          {/* <button
            id="open-consultation-popup"
            className="block w-full text-center px-4 py-2.5 rounded-md bg-[#734B66] text-white text-sm font-semibold hover:bg-[#5e3d54] transition"
          >
            Book a Free Consultation
          </button> */}
        </div>
      </aside>
    </>
  );
}
