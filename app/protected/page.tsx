import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";

import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();
  const { data: notes } = await supabase.from('player').select()


  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div> 
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <AuthButton />
        </nav>
            <div className="h-screen w-screen flex items-center justify-center">
            <pre>{JSON.stringify(notes, null, 2)}</pre>
            </div>
            
          </div>
  );
}
