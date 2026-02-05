import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import { Phone } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 bg-background border-b border-accent z-50 shadow-sm">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button> */}
          <Link href="/contact" passHref>
            <Button className="hidden xs:inline-flex">Contact</Button>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
