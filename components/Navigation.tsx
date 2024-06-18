import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { ModeToggle } from "../components/ui/ThemeToggle";   
import Image from "next/image";
import Link from "next/link";

const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

const isSupabaseConnected = canInitSupabaseClient();
const Navigation = () => {
  return (
    <div className="w-full flex container flex-col items-center justify-center">
      <nav className="w-full flex justify-between border-b border-b-foreground/10 h-16">
        <div className="w-full flex justify-between items-center p-3 text-sm">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
          </Link>
          {isSupabaseConnected && <AuthButton />}
          <AuthButton />
          <ModeToggle />
        </div>
        
      </nav>
      
    </div>
  )
}

export default Navigation
