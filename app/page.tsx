import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import QuizBanner from "@/components/QuizBanner";
import ChooseUs from "@/components/ChooseUs";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";

export default async function Index() {
  return (
    <div className="animate-in w-full min-h-screen flex flex-col items-center px-0">
      <QuizBanner />
      
    </div>
  );
}
