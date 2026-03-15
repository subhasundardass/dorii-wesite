import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import { MessageCircle, Phone } from "lucide-react";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 bg-background border-b border-accent z-50 shadow-sm">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          {/* <ThemeToggle /> */}
          {/* <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button> */}
          {/* <Link href="/contact" passHref>
            <Button className="hidden xs:inline-flex">Contact</Button>
          </Link> */}
          <Link
            href="https://wa.me/919732939123?text=Hi%20I%20want%20to%20discuss%20a%20software%20project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hidden xs:inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#0f7a6d] text-white rounded-full px-5 shadow-md hover:shadow-lg transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-white"
              >
                <path d="M16 .396C7.163.396 0 7.558 0 16.395c0 2.885.755 5.702 2.19 8.18L.16 32l7.63-1.99a15.94 15.94 0 0 0 8.21 2.27c8.837 0 16-7.162 16-15.999C32 7.558 24.837.396 16 .396zm0 29.267a13.18 13.18 0 0 1-6.72-1.85l-.48-.28-4.53 1.18 1.21-4.41-.31-.51a13.16 13.16 0 1 1 10.83 5.87zm7.25-9.84c-.4-.2-2.37-1.17-2.73-1.3-.36-.13-.62-.2-.88.2-.26.4-1 1.3-1.23 1.56-.23.26-.46.3-.86.1-.4-.2-1.67-.61-3.17-1.94-1.17-1.04-1.96-2.33-2.19-2.73-.23-.4-.02-.62.17-.82.17-.17.4-.46.6-.69.2-.23.26-.4.4-.66.13-.26.07-.49-.03-.69-.1-.2-.88-2.13-1.2-2.92-.31-.75-.63-.65-.88-.66l-.75-.01c-.26 0-.69.1-1.05.49-.36.4-1.38 1.35-1.38 3.29 0 1.94 1.41 3.81 1.61 4.07.2.26 2.78 4.25 6.73 5.96.94.41 1.68.66 2.26.85.95.3 1.81.26 2.49.16.76-.11 2.37-.97 2.7-1.9.33-.94.33-1.75.23-1.9-.1-.16-.36-.26-.76-.46z" />
              </svg>
              WhatsApp Us
            </Button>
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
