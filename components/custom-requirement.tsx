// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
// } from "@/components/ui/accordion";
// import { cn } from "@/lib/utils";
// import * as AccordionPrimitive from "@radix-ui/react-accordion";
// import { PlusIcon } from "lucide-react";

// const faq = [
//   {
//     question: "What is your return policy?",
//     answer:
//       "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
//   },
//   {
//     question: "How do I track my order?",
//     answer:
//       "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
//   },
//   {
//     question: "Do you ship internationally?",
//     answer:
//       "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
//   },
//   {
//     question: "What payment methods do you accept?",
//     answer:
//       "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
//   },
//   {
//     question: "What if I receive a damaged item?",
//     answer:
//       "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
//   },
//   {
//     question: "How can I contact customer support?",
//     answer:
//       "You can reach our support team via email at support@example.com or through the live chat on our website. We're available 24/7 to assist you.",
//   },
// ];

const CustomRequirement = () => {
  return (
    <div
      id="faq"
      className="w-full max-w-(--breakpoint-xl) mx-auto py-8 xs:py-16 px-6"
    >
      <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl leading-[1.15]! font-bold tracking-tighter">
        Tell Us What You’re Looking For
      </h2>
      <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
        Have a custom need? Share your requirements, and we’ll build the perfect
        solution for you.
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Requirement Form */}
          <form className="space-y-5 w-full">
            <div>
              <label className="text-sm font-medium">Your Name</label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-input bg-background 
                px-4 py-3 text-sm
                focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary
                transition-all duration-200"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="
                mt-1 w-full rounded-lg border border-input bg-background 
                px-4 py-3 text-sm
                focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary
                transition-all duration-200
            "
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <input
                    type="text"
                    className="
                mt-1 w-full rounded-lg border border-input bg-background 
                px-4 py-3 text-sm
                focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary
                transition-all duration-200
            "
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Your Requirements</label>
              <textarea
                className="mt-1 w-full h-32 rounded-lg border bg-background px-3 py-2 text-sm resize-none"
                placeholder="Tell us what you are looking for..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto rounded-full px-6 py-2.5
             bg-primary text-primary-foreground
             font-medium
             hover:bg-primary/90
             transition-colors"
            >
              Submit Requirement
            </button>
          </form>

          {/* Right: Image Placeholder */}
          <div className="w-full h-72 md:h-full rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
            <span className="text-sm">Image / Illustration Here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomRequirement;
