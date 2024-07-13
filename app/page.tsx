import Hero from "@/components/Hero";
import QuizBanner from "@/components/QuizBanner";


export default async function Index() {
  return (
    <div className="animate-in w-full min-h-screen flex flex-col px-0">
      {/* <QuizBanner /> */}
      <Hero />
      
    </div>
  );
}
