import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-3xl md:text-4xl md:leading-14 font-bold tracking-tight sm:max-w-xl md:text-center sm:mx-auto">
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
        <div className="flex flex-col justify-center bg-muted/80 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="">
            Our mission is to empower businesses by blending the energy and
            creativity of young engineers with the guidance of experienced
            industry professionals. The result is ERP and automation software
            that works in the real world — intuitive, scalable, and reliable.
          </p>
        </div>

        <div className="flex flex-col justify-center bg-muted/80 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="">
            Our vision is to become a trusted leader in ERP and business
            automation by creating innovative, dependable solutions that support
            long-term growth for businesses across industries.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/about"
          className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition"
        >
          Read More About Us
        </Link>
      </div>
    </section>
  );
};

export default About;
