import Hero from "@/components/Hero";
import Dashboard from '@/components/Dashboard';
import Quiz from '@/components/Quiz';
import ChooseUs from "@/components/ChooseUs";

export default async function Index() {


  return (
    <div className="w-screen min-h-screen flex flex-col items-center px-4 md:px-0">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
      <Hero />
      <ChooseUs />
      <Quiz />

        {/* <Header />
         */}
        <main className="flex-1 flex flex-col gap-6">
        </main>
      </div>
      <Dashboard />

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          {/* Powered by{" "} */}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            {/* Supabase */}
          </a>
        </p>
      </footer>
    </div>
  );
}
