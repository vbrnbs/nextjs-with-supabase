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
          <div className="py-6 font-bold bg-purple-950 text-center">
            This is a PUBLIC anyone can see without authentication
          </div>
          
          {children}
        </div>
        </div>

    )
}