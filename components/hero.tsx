import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="mt-12 lg:mt-0
  min-h-[calc(100vh-4rem)]
  w-full
  flex
  items-center
  justify-center
  overflow-hidden
  border-b border-accent"
    >
      <div className="max-w-(--breakpoint-xl) w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl">
          <Badge className="rounded-full py-1 border-none">
            End-to-End Business Automation & ERP Solutions
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-3xl sm:text-4xl lg:text-[1.75rem] xl:text-4xl font-bold leading-[1.2]! tracking-tight">
            Automate Your Business. Boost Efficiency. Grow Faster with Custom
            ERP Solutions.
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            Dorii Software builds custom business automation and ERP solutions
            for companies across India and international markets. With strong
            delivery roots in Siliguri, we help businesses automate sales,
            inventory, supply chain, HR, accounts, and manufacturing operations
            at scale.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full text-base"
              >
                Talk to Us <ArrowUpRight className="h-5! w-5!" />
              </Button>
            </Link>
            {/* <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
            >
              <CirclePlay className="h-5! w-5!" /> Watch Demo
            </Button> */}
          </div>
        </div>
        <div className="relative hidden lg:block lg:max-w-lg xl:max-w-xl w-full rounded-xl">
          <Image
            src="/hero2.svg"
            loading="eager"
            width={384}
            height={351}
            alt="Custom ERP and business automation software by Dorii Software"
            className="w-full h-auto object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
