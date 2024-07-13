import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 xl:py-24 border-t border-t-foreground/20 dark:bg-foreground/5 bg-foreground/10">
      <div className=" container flex flex-col items-center text-center md:grid md:grid-cols-3 md:grid-rows-2 gap-4 ">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={24} height={24} />
            <span className="text-lg font-semibold tracking-tighter">
              NTUIT
            </span>
          </div>
        </Link>
        <div className="hidden md:flex flex-col md:flex-row justify-center gap-4 lg:gap-8">
          <Link href="/" className="text-sm hover:underline" prefetch={false}>
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm hover:underline"
            prefetch={false}
          >
            Blog
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Contact
          </Link>
        </div>
        <SocialLinks />
        <div className="col-span-3 row-start-2">
          {" "}
          <div className="container divide-y divide-gray-800 border-gray-800 dark:divide-gray-200 dark:border-gray-850">
            <div className="flex flex-col items-center gap-2 text-foreground/50">
              <p className="text-xs">
                &copy; 2024 NTUI Software. All rights reserved.
              </p>
              <p className="text-xs">Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
