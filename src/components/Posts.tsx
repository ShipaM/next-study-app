import { Post } from "@/type/type";
import Link from "next/link";
import React from "react";

type PostsProps = {
  posts: Post[];
};

export const Posts = ({ posts }: PostsProps) => {
  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
