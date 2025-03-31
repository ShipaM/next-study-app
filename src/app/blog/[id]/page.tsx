import React from "react";

async function getData(id: string | number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

type PostProps = {
  params: {
    id: string;
  };
};

const Post = async ({ params: { id } }: PostProps) => {
  const post = await getData(id);
  return (
    <>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
