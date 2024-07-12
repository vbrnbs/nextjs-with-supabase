'use client'

import BlogPostBanner from '@/components/BlogPostBanner';
import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';

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
      const rssUrl = encodeURIComponent('https://medium.com/feed/@barnabas-vszgi');
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;
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
	<div>
	  {posts.map((post, index) => (
        
		<div key={index}>
            <BlogPostBanner title={post.title} correspond={post.contentSnippet} link={post.link} />
            {/* <iframe src="https://medium.com/@barnabas-vszgi/the-missing-link-from-your-omnichannel-strategy-bcaf430e2acc" frameBorder="0"></iframe> */}
		</div>
	  ))}
	</div>
  );
};

export default BlogLanding;