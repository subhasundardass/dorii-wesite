import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {/* Home */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild className="text-sm font-medium">
          <Link href="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Services */}
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-sm font-medium">
          Services
        </NavigationMenuTrigger>

        <NavigationMenuContent>
          <ul className="grid w-75 gap-2 p-4">
            <li>
              <NavigationMenuLink asChild>
                <Link
                  href="/services/custom-software-development"
                  className="block text-sm font-medium rounded-md p-2 hover:bg-muted"
                >
                  Custom Software Development
                </Link>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink asChild>
                <Link
                  href="/services/odoo-customisation"
                  className="block text-sm font-medium rounded-md p-2 hover:bg-muted"
                >
                  Odoo Customization
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      {/* Solutions */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild className="text-sm font-medium">
          <Link href="/solutions">Solutions</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* About */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild className="text-sm font-medium">
          <Link href="/about">About</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Blog */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild className="text-sm font-medium">
          <Link href="/blog">Blog</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Career */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild className="text-sm font-medium">
          <Link href="/careers">Career</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
