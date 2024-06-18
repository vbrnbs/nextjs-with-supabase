import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default function ProtectLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    return (
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="w-full">
          <div style={{background: 'linear-gradient(90deg, #883CF7 0%, #00E0CB 100%)'}} 
          className="py-6 font-bold text-white text-center">
           !GET YOUR SCORE NOW!
          </div>
          {children}
        </div>
        </div>
    )
}