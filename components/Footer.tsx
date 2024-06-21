import siteConfig from "@/config/links";
import { FlagIcon, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-screen flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 xl:py-24 border-t border-t-foreground/20 dark:bg-foreground/5 bg-foreground/10">
      <div className="container flex flex-col items-center justify-center gap-6 text-center md:flex-row md:gap-10">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={24} height={24} />
            <span className="text-lg font-semibold tracking-tighter sm:text-xl md:text-base">
              NTUIT
            </span>
          </div>
        </Link>

        <nav className="flex flex-col gap-2 md:flex-row md:ml-auto md:gap-4 lg:gap-8">
          <Link
            href="#"
            className="text-sm tracking-wide font-semibold  transition-colors"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm tracking-wide font-semibold transition-colors"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm tracking-wide font-semibold transition-colors"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm tracking-wide font-semibold transition-colors"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center justify-center gap-4 md:gap-8 lg:ml-auto">
          <Link
            href={siteConfig.links.twitter}
            className="w-6 h-6"
            prefetch={false}
            target="_blank"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="#" className="w-6 h-6" prefetch={false} target="_blank">
            <FlagIcon className="w-6 h-6" />
          </Link>
          <Link href="#" className="w-6 h-6" prefetch={false} target="_blank">
            <FlagIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-4xl divide-y divide-gray-800 border-gray-800 dark:divide-gray-200 dark:border-gray-850">
        <div className="flex flex-col items-center gap-2 pt-12 text-foreground/50">
          <p className="text-xs ">
            &copy; 2024 NTUI Software. All rights reserved.
          </p>
          <p className="text-xs">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
