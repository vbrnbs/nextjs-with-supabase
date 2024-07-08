import AuthButton from "../components/AuthButton";
import { ModeToggle } from "../components/ui/ThemeToggle";   
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { NavigationMenuDemo } from "./test";


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

// const isSupabaseConnected = canInitSupabaseClient();
const Navigation = () => {
  return (
    <div className="w-full flex container items-center justify-center p-3 border-b border-b-foreground/10">
      <nav className="w-full flex justify-between">
      <Link href="/">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
          </Link>
        <div className="flex gap-3">
          
          {/* {isSupabaseConnected && <AuthButton />} */}
          <NavigationMenuDemo />

          <AuthButton />
          <ModeToggle />
        </div>
        
      </nav>
      
    </div>
  )
}

export default Navigation
