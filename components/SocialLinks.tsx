import Image from "next/image";
import Link from "next/link";
import React from "react";
import siteConfig from "@/config/links";

const SocialLinks = () => {
  return (
    <div className="w-full flex items-center justify-center md:justify-end">
      <div className="max-w-48 flex flex-wrap gap-x-8 gap-y-4 my-8 leading-3">
        <Link
          href={siteConfig.links.insta}
          className=""
          prefetch={false}
          target="_blank"
        >
          <Image src="./instagram.svg" alt="insta" width={40} height={40} />
        </Link>
        <Link
          href={siteConfig.links.facebook}
          className=""
          prefetch={false}
          target="_blank"
        >
          <Image src="./facebook.svg" alt="facebook" width={40} height={40} />
        </Link>
        <Link
          href={siteConfig.links.linkedin}
          className=""
          prefetch={false}
          target="_blank"
        >
          <Image src="./linkedin.svg" alt="linkedin" width={40} height={40} />
        </Link>
        <Link
          href={siteConfig.links.x}
          className=""
          prefetch={false}
          target="_blank"
        >
          <Image src="./x.svg" alt="x" width={40} height={40} />
        </Link>
        <Link
          href={siteConfig.links.medium}
          className=""
          prefetch={false}
          target="_blank"
        >
          <Image src="./medium.svg" alt="medium" width={40} height={40} />
        </Link>
        <Link
          href={siteConfig.links.pinterest}
          className=""
          prefetch={false}
          target="_blank"
        >
          <Image src="./pinterest.svg" alt="pinterest" width={40} height={40} />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
