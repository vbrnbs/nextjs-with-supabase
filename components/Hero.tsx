import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "./Header";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>

      {/* Hero */}
      <div className="container py-24 lg:py-32">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:order-1 order-2 lg:col-span-3 mt-12 lg:mt-0">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            The Smart & Simple Digital Signage Solution
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
                Control screens effortlessly!
            </p>
            <div className="flex gap-2 mt-3 text-lg text-muted-foreground items-center pl-2">
                <CircleCheck className="w-4 h-4 " /> Simple to use
            </div>
            <div className="flex gap-2 text-lg text-muted-foreground items-center pl-2">
                <CircleCheck className="w-4 h-4 " /> Any screen type
            </div>
            <div className="flex gap-2 text-lg text-muted-foreground items-center pl-2">
                <CircleCheck className="w-4 h-4 " /> Get started for free!
            </div>
        
            <div className="mt-5 lg:mt-8 flex sm:items-center gap-3 lg:gap-2 sm:flex-row sm:gap-3">
              <div className="w-full max-w-lg  lg:w-auto">
                <Input placeholder="Enter work email" type="email" />
              </div>
              <Button className="w-min">Join the Waitinglist</Button>
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
