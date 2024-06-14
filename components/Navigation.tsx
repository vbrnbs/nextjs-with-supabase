import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { ModeToggle } from "../components/ui/ThemeToggle";   
import Image from "next/image";

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
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          {isSupabaseConnected && <AuthButton />}
          <ModeToggle />
        </div>
        
      </nav>
      
    </div>
  )
}

export default Navigation
