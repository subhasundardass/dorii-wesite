"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface CTAProps {
  title: string;
  description: string;
  secondaryDescription?: string;
  primaryText?: string;
  secondaryText?: string;
  primaryUrl?: string; // URL for primary button
  secondaryUrl?: string; // URL for secondary button
}

export const CTA: React.FC<CTAProps> = ({
  title,
  description,
  secondaryDescription,
  primaryText = "Book a Free Demo",
  secondaryText = "Talk to an Expert",
  primaryUrl = "/demo",
  secondaryUrl = "/contact",
}) => {
  const router = useRouter();

  // Internal click handlers
  const handlePrimaryClick = () => {
    router.push(primaryUrl);
  };

  const handleSecondaryClick = () => {
    router.push(secondaryUrl);
  };

  return (
    <section className=" px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold">{title}</h2>

        <p className="mt-4 text-lg sm:text-xl mx-auto">{description}</p>

        {secondaryDescription && (
          <p className="mt-4 max-w-3xl mx-auto">{secondaryDescription}</p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={handlePrimaryClick}
            className="
              w-full sm:w-auto px-8 py-4 rounded-lg
              bg-blue-600 text-white font-semibold
              hover:bg-blue-700
              dark:bg-blue-500 dark:hover:bg-blue-600
              transition
            "
          >
            {primaryText}
          </button>

          <button
            onClick={handleSecondaryClick}
            className="
              w-full sm:w-auto px-8 py-4 rounded-lg
              border border-gray-300 text-gray-700 font-semibold
              hover:bg-gray-100
              dark:border-gray-600 dark:text-gray-200
              dark:hover:bg-gray-800
              transition"
          >
            {secondaryText}
          </button>
        </div>
      </div>
    </section>
  );
};
