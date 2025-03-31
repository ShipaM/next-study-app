"use client";

import { Post } from "@/type/type";
import React, { FormEventHandler, useState } from "react";
import { getPostsBySearch } from "../../services/getPosts";

type SearchProps = {
  onSearch: (value: Post[]) => void;
};

export const PostSearch = ({ onSearch }: SearchProps) => {
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    onSearch(posts as unknown as Post[]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="m-2"
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="m-2 px-10" type="submit">
        Search
      </button>
    </form>
  );
};
