// app/careers/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Careers | Dorii Software",
  description:
    "Join Dorii Software! We invite fresh IT engineers, digital marketing students, and IT product marketing students to be part of our innovative software and business automation team.",
  keywords: [
    "Dorii Software Careers",
    "IT jobs Siliguri",
    "Software internships",
    "Digital marketing internship",
    "ERP software careers",
    "IT product marketing Siliguri",
  ],
  alternates: { canonical: "https://dorii.in/careers" },
};

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Junior Software Engineer Intern",
      department: "IT / Software Development",
      description:
        "We welcome fresh IT engineers and computer science students to work on ERP and business automation projects. Gain hands-on experience and mentorship from industry experts.",
    },
    {
      title: "Digital Marketing Intern",
      department: "Marketing",
      description:
        "Assist in SEO, social media campaigns, content creation, and analytics. Perfect for students pursuing digital marketing or related fields.",
    },
    {
      title: "IT Product Marketing Intern",
      department: "Marketing / Product",
      description:
        "Support marketing of software products, create campaigns, and analyze product adoption. Ideal for students in IT product marketing or business technology programs.",
    },
    {
      title: "Business Analyst Intern",
      department: "Business / IT",
      description:
        "Work closely with clients and the development team to gather requirements, analyze business workflows, and suggest process improvements. Ideal for students interested in business analysis, ERP systems, or IT consulting.",
    },
  ];

  return (
    <main className="mt-8 max-w-(--breakpoint-xl) mx-auto w-full py-16 xs:py-24 px-6">
      <section aria-labelledby="careers-heading" className="text-center">
        {/* JSON-LD Job Schema */}
        <Script
          id="career-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dorii Software",
              url: "https://dorii.in",
              logo: "https://www.dorii.in/og-image.png",
              sameAs: [
                "https://www.linkedin.com/company/dorii-software",
                "https://github.com/doriisoftware",
              ],
              potentialAction: jobOpenings.map((job) => ({
                "@type": "CreateAction",
                name: job.title,
                target: "https://www.dorii.in/contact",
                description: job.description,
              })),
            }),
          }}
        />

        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Careers at Dorii Software</h1>
          <p className="text-muted-foreground text-lg">
            We are always looking for passionate, talented individuals to join
            our growing team. If you are a fresh IT engineer, digital marketing
            enthusiast, or pursuing IT product marketing, we want to hear from
            you!
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {jobOpenings.map((job) => (
            <article
              key={job.title}
              className="border rounded-2xl p-6 bg-background shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
              <p className="text-primary font-medium mb-3">{job.department}</p>
              <p className="text-muted-foreground leading-relaxed">
                {job.description}
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center text-primary font-medium hover:underline"
              >
                Apply Now →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Join Dorii Software?
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 rounded-2xl border bg-background shadow-sm hover:shadow-md transition">
            <svg
              className="w-12 h-12 mb-4 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
            <h3 className="font-semibold text-lg mb-2">Young & Dynamic Team</h3>
            <p className="text-muted-foreground leading-relaxed">
              Collaborate with fresh, talented engineers and marketing
              enthusiasts in a creative environment.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl border bg-background shadow-sm hover:shadow-md transition">
            <svg
              className="w-12 h-12 mb-4 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m0 0l3 3m-3-3v6"
              />
            </svg>
            <h3 className="font-semibold text-lg mb-2">
              Mentorship & Guidance
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Learn from industry experts while gaining exposure to
              enterprise-grade software projects.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl border bg-background shadow-sm hover:shadow-md transition">
            <svg
              className="w-12 h-12 mb-4 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7h18M3 12h18M3 17h18"
              />
            </svg>
            <h3 className="font-semibold text-lg mb-2">Growth & Innovation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Contribute to ERP, business automation, and innovative software
              products while developing your skills.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl border bg-background shadow-sm hover:shadow-md transition">
            <svg
              className="w-12 h-12 mb-4 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h3 className="font-semibold text-lg mb-2">Flexible Environment</h3>
            <p className="text-muted-foreground leading-relaxed">
              Work in a supportive environment with flexible schedules that
              encourage learning and creativity.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl border bg-background shadow-sm hover:shadow-md transition">
            <svg
              className="w-12 h-12 mb-4 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"
              />
            </svg>
            <h3 className="font-semibold text-lg mb-2">
              Mission-Driven Culture
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Join a team that values innovation, talent, and delivering
              meaningful software to real businesses.
            </p>
          </div>

          {/* 6 - NEW */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl border bg-background shadow-sm hover:shadow-md transition">
            <svg
              className="w-12 h-12 mb-4 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14l-4-4 4-4"
              />
            </svg>
            <h3 className="font-semibold text-lg mb-2">
              Learning & Development
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Continuous learning through workshops, hands-on projects, and
              skill-building opportunities to accelerate your career.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 text-center bg-muted p-10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          If you are excited about technology, marketing, or IT product
          innovation, reach out to us and start your journey with Dorii
          Software.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full px-8 py-3 bg-primary text-white font-semibold hover:bg-primary/90 transition"
        >
          Apply Now
        </Link>
      </section>
    </main>
  );
}
