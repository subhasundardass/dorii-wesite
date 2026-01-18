import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-(--breakpoint-xl) mx-auto py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight sm:text-center sm:mx-auto">
        About Dorii Software
      </h2>

      <p className="mt-6 max-w-[100ch] xs:text-lg  sm:text-center sm:mx-auto ">
        At Dorii Software , we specialize in creating scalable business
        automation and ERP solutions that transform the way companies manage
        sales, inventory, warehouses, HR, accounts, manufacturing, and supply
        chain operations. Our focus is on building software that drives
        efficiency, minimizes errors, and fuels business growth.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="">
            To empower businesses by combining the creativity and talent of
            young engineers with guidance from seasoned industry experts . We
            deliver ERP and automation software that is intuitive, scalable, and
            practical for real-world operations.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="">
            To be recognized as a trusted leader in ERP and business automation
            software, providing innovative, reliable, and adaptable solutions
            that grow with our clients’ businesses across industries.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/about"
          className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition"
        >
          Learn More About Us
        </Link>
      </div>
    </section>
  );
};

export default About;
