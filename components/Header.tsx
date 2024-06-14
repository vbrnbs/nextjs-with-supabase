import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col items-center">
    <div className="flex justify-center">
      <div className="w-1/2">
        
      </div>
      <div className="w-1/2">

      </div>

    </div>
    <div className="flex justify-center p-24">
          <div className="">
            <div className="text-4xl">王</div>
          </div>
          <div className="flex-col">
            <h1 className="text-9xl grotesk font-grotesk">NTUIT</h1>
            <h1 className="text-9xl ">SIGNAGE</h1>
          </div>
    </div>
    <p className="text-2xl">
    Control all displays from one device
  </p>
  </div>
  );
}