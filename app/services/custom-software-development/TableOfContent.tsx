"use client";

import { useRef, useState } from "react";

export default function TableOfContent() {
  const mobileTocRef = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);

  const closeMobileToc = () => {
    mobileTocRef.current?.removeAttribute("open");
  };

  const links = (
    <nav onClick={closeMobileToc} className="flex flex-col gap-1 text-sm">
      {/* Overview */}
      <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-3 mb-1">
        Overview
      </p>

      <a
        href="#introduction"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transitiontoc-link"
      >
        Introduction
      </a>

      <a
        href="#what-is-custom-software"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        What is Custom Software Development
      </a>

      <a
        href="#why-businesses-need-custom-software"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transitiontoc-link"
      >
        Why Businesses Need Custom Software
      </a>

      <a
        href="#benefits-of-custom-software"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transitiontoc-link"
      >
        Benefits of Custom Software
      </a>

      <a
        href="#challenges-we-solve"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transitiontoc-link"
      >
        Challenges We Solve
      </a>

      {/* Software */}
      <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-4 mb-1">
        Software Solutions
      </p>

      <a
        href="#types-of-custom-software"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transitiontoc-link"
      >
        Types of Custom Software Solutions
      </a>

      {/* Development */}
      <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-4 mb-1">
        Development Process
      </p>

      <a
        href="#software-development-process"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transitiontoc-link"
      >
        Our Development Process
      </a>

      <a
        href="#technologies-used"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transitiontoc-link"
      >
        Technologies We Use
      </a>

      {/* Business */}
      <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-4 mb-1">
        Business Insights
      </p>

      <a
        href="#industries-we-serve"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transitiontoc-link"
      >
        Industries We Serve
      </a>

      <a
        href="#custom-software-siliguri-north-bengal"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transitiontoc-link"
      >
        Custom Software in Siliguri & North Bengal
      </a>

      <a
        href="#cost-of-custom-software"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transitiontoc-link"
      >
        Cost of Custom Software Development
      </a>

      <a
        href="#future-trends"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transitiontoc-link"
      >
        Future Trends
      </a>

      {/* FAQ */}
      <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-4 mb-1">
        FAQs
      </p>

      <a
        href="#faq"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transitiontoc-link"
      >
        Frequently Asked Questions
      </a>

      <a
        href="#start-project"
        className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transitiontoc-link"
      >
        Start Your Project
      </a>
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 overflow-y-auto [scrollbar-width:thin] [&::-webkit-scrollbar]:w-[5px]">
        <div className="px-5 py-5">
          <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
            Table of Contents
          </p>
          {links}
        </div>
      </aside>

      {/* Floating Mobile Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-20 left-4 z-50 bg-[#734B66] text-white px-4 py-2.5 rounded-md shadow-md text-sm font-medium hover:bg-[#5e3d54] transition"
      >
        ☰
      </button>

      {/* Bottom Sheet */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40">
          {/* Bottom Sheet */}
          <div className="absolute bottom-0 left-0 w-full h-[90vh] bg-white dark:bg-gray-900 rounded-t-2xl flex flex-col">
            {/* Fixed Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
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

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div onClick={() => setOpen(false)}>{links}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
