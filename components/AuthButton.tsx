import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import { LogIn, LogInIcon, LogOutIcon } from "lucide-react";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4 max-w-40">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          <LogOutIcon />
        </button>
      </form>
    </div>
  ) : (
    <Button variant="outline">
      <Link
        href="/login"
        className="flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover text-xs font-light"
      >
        {/* <LogIn /> */}
        login
      </Link>
    </Button>
  );
}

// NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmbmtyY3doZmZncHl4b3l4bmpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzNDMzNjksImV4cCI6MjAzMTkxOTM2OX0.4I1KcaXe6VEuEA2QEcBC_eiTULeZ0fv5U5nRNfINugU
// NEXT_PUBLIC_SUPABASE_URL=https://efnkrcwhffgpyxoyxnjp.supabase.co
