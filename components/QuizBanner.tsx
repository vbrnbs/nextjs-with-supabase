import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Highlight } from "./ui/hero-highlight";

export default function QuizBanner() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row lg:justify-between lg:pr-3 items-center lg:mt-32 gap-4">
      <div className="w-full flex justify-center lg:justify-end items-center py-8 px-4 lg:px-0 lg:py-0 lg:h-[500px]">
      
        <div className="text-center lg:text-right mb-3">
        <p>12 Questions ~ 3 minutes</p>
          <p className="text-2xl text-muted-foreground py-4 lowercase">
            INCREASE SALES & ENHANCE CUSTOMER EXPERIENCE
            {/* Drive growth and generate more sales! */}
          </p>
          
          <div className="w-full flex justify-center lg:justify-end mt-5">
            <h1 className="scroll-m-20 max-w-2xl text-4xl font-extrabold tracking-tight lg:text-6xl">
              DIGITAL SIGNAGE READINESS <span className="bg-brand p-1">SCORE</span>
            </h1>
          </div>
          <div className="my-5 max-w-3xl">
            
            <p className="text-3xl mt-12 mb--6">
            <Highlight>
              Find out if you're ready for digital signage!
            </Highlight>
            </p>
            <p className="text-right my-6 text-lg">
              Discover if your business is ready to leverage the power of
              digital signage. Take our quick quiz and unlock new opportunities
              to boost engagement, drive sales, and stay ahead of the
              competition.
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-end mt-8 gap-4">
          <Link href="/login">
              <Button
                size={"lg"}
                variant={"outline"}
                className="bg-transparent"
              >
                Learn More...
              </Button>
            </Link>
            <Link href="/quiz">
              <Button
                size={"lg"}
                variant={"default"}
              >
                TAKE QUIZ
              </Button>
            </Link>
           
          </div>
        </div>
      </div>

      <div className="w-full">
        <Image
          src="/control.png"
          alt="quiz-banner"
          className="rounded-md shadow-lg"
           objectFit="cover" 
          width={500} 
          height={500}
        />
      </div>
    </div>
  );
}
