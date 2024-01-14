import React from 'react';
import { getAllPostsMetadata } from '@lib/services/blog';

// TODO: Implement this page.
const BlogPage = async () => {
  const posts = await getAllPostsMetadata();

  return (
    <div>
      <pre>
        {JSON.stringify(posts, null, 2)}
      </pre>
    </div>
  );
};

export default BlogPage;
