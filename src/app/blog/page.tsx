"use client";
import { Post } from "@/type/type";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../../services/getPosts";
import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: {
//       revalidate: 60,
//     },
//   });

//   return response.json();
// }

// export const metadata: Metadata = {
//   title: "Blog | Next App",
// };

const Blog = () => {
  // const posts: Post[] = (await getData()) || [];
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Blog</h1>
      <PostSearch onSearch={setPosts} />
      {isLoading ? <>Loading...</> : <Posts posts={posts} />}
    </>
  );
};

export default Blog;
