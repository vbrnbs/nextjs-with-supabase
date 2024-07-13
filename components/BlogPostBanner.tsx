import Link from "next/link";

interface BlogPostBannerProps {
    title: string;
    correspond: string;
    link: string;
    }

const BlogPostBanner: React.FC<BlogPostBannerProps> = ({title, correspond, link}) => {

  return (
    <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <Link href={link} target="_blank">
      <div className="rounded-[10px] p-4 !pt-8 sm:p-6 bg-background text-foreground">
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: title }}></div>
      {/* <div className="mt-4" dangerouslySetInnerHTML={{ __html: correspond }}></div> */}
      </div>
      </Link>
    </article>
    
  );
};

export default BlogPostBanner;
