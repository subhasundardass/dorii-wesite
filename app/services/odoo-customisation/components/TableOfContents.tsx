"use client";

import { useState } from "react";
import FreeConsultationPopup from "@/components/ConsultationPopup";

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

export default function TableOfContents() {
  const [open, setOpen] = useState(false);

  const links = (
    <nav className="flex flex-col gap-1 text-sm">
      {tocItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="py-2 px-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 sticky top-24 h-[calc(100vh-6rem)] border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
        <div className="px-5 py-5">
          <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
            Table of Contents
          </p>

          {links}

          {/* CTA */}
          <div className="mt-6 p-4 border rounded-lg space-y-4 bg-white dark:bg-gray-800">
            <p className="text-sm leading-relaxed">
              Need a custom Odoo solution? We'll send a fixed-price quote within{" "}
              <span className="text-[#734B66] font-semibold">48 hours</span>.
            </p>

            <FreeConsultationPopup
              buttonText="Book a Free Consultation"
              buttonClass="block w-full text-center px-4 py-2.5 rounded-md bg-[#734B66] text-white text-sm font-semibold hover:bg-[#5e3d54] transition"
            />
          </div>
        </div>
      </aside>

      {/* Floating Mobile Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-20 left-4 z-50 bg-[#734B66] text-white px-4 py-2.5 rounded-md shadow-md text-sm font-medium hover:bg-[#5e3d54] transition"
      >
        ☰ Contents
      </button>

      {/* Mobile Bottom Sheet */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40">
          <div className="absolute bottom-0 left-0 w-full h-[90vh] bg-white dark:bg-gray-900 rounded-t-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-sm uppercase tracking-widest text-gray-500">
                Table of Contents
              </h3>

              <button
                onClick={() => setOpen(false)}
                className="text-sm border px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                ✕ Close
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div onClick={() => setOpen(false)}>{links}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
