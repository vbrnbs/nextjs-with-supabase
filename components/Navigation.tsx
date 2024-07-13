// "use client";
import AuthButton from "../components/AuthButton";
import { ModeToggle } from "../components/ui/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavigationMenuDemo } from "./NavigationMenu";
import CollapsibleMenu from "@/components/ui/CollapsibleMenu";
import HamburgerIcon from "./ui/HamburgerIcon";
// import useScreenSize from "@/components/ui/useScreenSize";
// import { useState } from "react";
// const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

// const canInitSupabaseClient = () => {
//     // This function is just for the interactive tutorial.
//     // Feel free to remove it once you have Supabase connected.
//     try {
//       createClient();
//       return true;
//     } catch (e) {
//       return false;
//     }
//   };
// const isMobile = useScreenSize();
const screen = 768;
// const isMobile = useScreenSize();

// const isSupabaseConnected = canInitSupabaseClient();
const Navigation = () => {
  return (
    <div className="w-full flex container items-center justify-center p-3 border-b border-b-foreground/10">
      <nav className="w-full flex justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
        </Link>
        
        <div className="flex gap-0 md:gap-3">
          {/* {isSupabaseConnected && <AuthButton />} */}
          {/* <NavigationMenuDemo /> */}
          {/* <CollapsibleMenu /> */}
          {/* {isMobile ? <CollapsibleMenu /> : <NavigationMenuDemo />} */}
          {/* <HamburgerIcon /> */}
          {/* {window.innerWidth < 768 ? (
            <CollapsibleMenu />
          ) : (
            <NavigationMenuDemo />
          )} */}
          {/* {isMobile ? <CollapsibleMenu /> : <NavigationMenuDemo />} */}
          <NavigationMenuDemo />
          <AuthButton />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
