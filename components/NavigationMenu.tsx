"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ModeToggle } from "./ui/ThemeToggle";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link2, Menu, MenuIcon } from "lucide-react";
import Image from "next/image";
import BlogLanding from "@/app/blog/page";
import BlogPostBanner from "./BlogPostBanner";
import AuthButton from "./AuthButton";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <MenuIcon />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            
            <ul className="grid gap-3 p-6 w-[300px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-background">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-start md:justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
                    href="/blog"
                  >
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    <div className="mb-2 mt-4 text-lg font-medium">blog</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Articles, tutorials, and more...
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Why 王NTUIT">
                Learn more about the 王NTUIT design system.
              </ListItem>
              <ListItem href="/quiz" title="GET YOUR READINESS-SCORE">
                Take the quiz to see how ready you are for the future.
              </ListItem>
              <div className="w-full p-4 rounded-sm">
              <Image src="/example.webp" alt="logo" width={320} height={320} />
              </div>
                

              <div className="flex w-full justify-end"></div>
            </ul>
            <div className="absolute top-0 right-0 md:left-0 md:right-100 md:top-0 p-6">
              <ModeToggle />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
