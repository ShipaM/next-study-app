import { Post } from "@/type/type";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

const Blog = async () => {
  const posts: Post[] = (await getData()) || [];
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
