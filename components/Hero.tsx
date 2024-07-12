import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "./Header";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { Highlight } from "./ui/hero-highlight";

export default function HeroSection() {
  return (
    <>

      {/* Hero */}
      <div className="container pb-24 lg:py-32">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:order-1 order-2 lg:col-span-3 mt-12 lg:mt-0 px-4">
            <div className="scroll-m-20 text-4xl font-extrabold tracking-tight line-height-title">
            DISCOVER HOW TO CONNECT{" "}
            <div className="flex">
            <Highlight>ONLINE&OFFLINE</Highlight>{" "}
            </div>
              
              {/* <span className="bg-brand p-1">E </span> */}
              AUDIENCE
            </div>
            <p className="mt-8 text-xl text-muted-foreground">
             Create a seamless offline digital experience!
            </p>
            <div className="flex gap-2 mt-3 text-lg text-muted-foreground items-center pl-2">
                <CircleCheck className="w-4 h-4 " /> Bridge in omnichannel marketing
            </div>
            <div className="flex gap-2 text-lg text-muted-foreground items-center pl-2">
                <CircleCheck className="w-4 h-4 " /> Utilize  Social Media Content
            </div>
            <div className="flex gap-2 text-lg text-muted-foreground items-center pl-2">
                <CircleCheck className="w-4 h-4 " /> Gather Data 
            </div>
            <p className="mt-3 text-xl text-muted-foreground">
            🚀Customer Engagement 💥$ales! 
            </p>
        
            <div className="mt-16 lg:mt-8 flex sm:items-center justify-center gap-3 lg:gap-2 sm:flex-row sm:gap-3">
            {/* <Button className="w-min">Learn more...</Button> */}
              {/* <div className="w-full max-w-lg  lg:w-auto">
                <Input placeholder="Enter work email" type="email" />
              </div> */}
              {/* <Button className="w-min">Join the Waitlist</Button> */}
              <Button className="w-full">I'm Interested</Button>
            </div>
          </div>
          {/* End Col */}
          <div className="lg:order-2 order-1 lg:col-span-4 mt-10 lg:mt-0">
            <div className="w-full flex justify-center bg-brand rounded-lg">
            <Image src="/control.png" alt="quiz-banner" /* layout="fill" objectFit="cover"*/ width={800} height={800} />

            </div>
          {/* <Header /> */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
}
