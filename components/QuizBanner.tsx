import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function QuizBanner() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row md:justify-between md:pr-3 items-center bg-brand-reverse lg:mt-32">
      <div className="w-full flex justify-center px-4 py-24 lg:px-0 lg:py-0 text-white">
        <div className="text-center">
          <p>10 Questions - 3 minutes</p>
          <div className="w-full flex justify-center mt-5">
            <h1 className="scroll-m-20 max-w-2xl text-4xl font-extrabold tracking-tight lg:text-5xl">
              DIGITAL SIGNAGE READINESS QUIZ
            </h1>
          </div>
          <div className="mt-5 max-w-3xl">
            <p className="text-3xl text-muted-foreground py-4">
              Drive growth and generate more sales!
            </p>
            <p>
              Discover if your business is ready to leverage the power of
              digital signage. Take our quick quiz and unlock new opportunities
              to boost engagement, drive sales, and stay ahead of the
              competition.
            </p>
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <Link href="/quiz">
              <Button size={"lg"} variant={"default"} className="bg-white text-slate-950">
                TAKE QUIZ
              </Button>
            </Link>
            <Link href="/login">
            <Button
                size={"lg"}
                variant={"outline"}
                className="bg-transparent"
              >
                Learn More...
              </Button>
            </Link>

          </div>
        </div>
      </div>

      <div className="w-full h-full lg:-translate-y-24">
        <Image
          src="/control.png"
          alt="quiz-banner"
          className="rounded-md shadow-lg"
          /* layout="fill" objectFit="cover"  */ width={800}
          height={800}
        />
      </div>
    </div>
  );
}
