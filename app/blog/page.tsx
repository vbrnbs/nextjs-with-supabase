'use client'

import BlogPostBanner from '@/components/BlogPostBanner';
import React, { useEffect, useState } from 'react';
import siteConfig from "@/config/links";

// Define a type for the post
type Post = {
  title: string;
  contentSnippet: string;
  link: string;
};

const BlogLanding: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const rssUrl = encodeURIComponent(siteConfig.medium.url);
      const apiUrl = `${siteConfig.medium.api}${rssUrl}`;
      const result = await fetch(apiUrl).then((res) => res.json());
      console.log(result);

      // Assuming result.items is of type Post[], otherwise, you might need to map or transform the data
      const fetchedPosts: Post[] = result.items.map((item: any) => ({
        title: item.title,
        contentSnippet: item.description, // Adjust according to the actual structure of the response
        link: item.link,
      }));

      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  return (
	<div className='min-h-screen w-full flex flex-col lg:flex-row items-center lg:justify-center gap-4 mt-4 p-4'>
	  {posts.map((post, index) => (     
		<div key={index} className='w-96 h-28'>
            <BlogPostBanner title={post.title} correspond={post.contentSnippet} link={post.link} />
            

            {/* <iframe src="https://medium.com/@barnabas-vszgi/the-missing-link-from-your-omnichannel-strategy-bcaf430e2acc" frameBorder="0"></iframe> */}
		</div>
        
	  ))}
      <div className="w-96 h-28 rounded-md bg-brand"></div>
	</div>
  );
};

export default BlogLanding;