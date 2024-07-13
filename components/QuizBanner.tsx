import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Highlight } from "./ui/hero-highlight";
// import useScreenSize from "@/hooks/useScreenSize";

export default function QuizBanner() {
  // const isMobile = useScreenSize();

  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center lg:mt-32 gap-4">
      <div className="max-w-[700px] flex justify-center lg:justify-end items-center py-8 px-4 lg:px-0 lg:py-0 lg:h-[500px]">
        <div className="text-center lg:text-right mb-3">
          <p>12 Questions ~ 3 minutes</p>

          <p className="text-3xl my-3 mb-2 text-brand">
            OMNICHANNEL MARKETING
          </p>

          <p className="text-3xl mt-12 mb-6 font-bold">
            
          </p>
          <div className="w-full flex justify-center lg:justify-end mt-5">
            <h1 className="scroll-m-20 max-w-2xl text-4xl font-extrabold lg:text-6xl">
              {/* DIGITAL SIGNAGE READINESS{" "} */}
              DISCOVER, HOW TO CONNECT{" "}
              <Highlight>ONLINE&OFFLINE</Highlight>{" "}
              {/* <span className="bg-brand p-1">E </span> */}
              AUDIENCE
            </h1>
          </div>
          <div className="my-5 max-w-3xl">
            <p className="text-center lg:text-right mt-2 text-2xl">
              Create a seamless offline digital experience!
            </p>
            <p className="text-2xl text-muted-foreground lowercase">
              {/* INCREASE SALES & ENHANCE CUSTOMER EXPERIENCE */}
            </p>
            <div className="text-justify lg:text-right mt-6 text-lg">
              {/* <br /> Bridge the gap between online and offline audiences, while
              enhancing customer engagement, and leveraging data insights! */}
              <p className="text-center lg:text-right mt-2 text-lg">
                {" "}
                Discover what do you need to get started invading the offline
                digital space!
              </p>
              <p className="text-center lg:text-right text-lg">
                Take our quick quiz and unlock new opportunities!
              </p>
            </div>
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
              <Button size={"lg"} variant={"default"}>
                TAKE QUIZ
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        <Image
          src="/control.png"
          alt="quiz-banner"
          objectFit="contain"
          width={600}
          height={600}
          className="rounded-md shadow-lg"

          // fill={isMobile ? true : false}
          // {isMobile ? (width={500}) : ""}
        />
      </div>
    </div>
  );
}
