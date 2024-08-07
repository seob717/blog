import React from "react";
import "github-markdown-css";

import { MDXRemote } from "next-mdx-remote/rsc";

import { cn } from "@/lib/utils";
import { MdxData } from "@/utils/getBlogPosts";

type Props = {
  post: MdxData;
};

const bgColors = [
  "bg-amber-400",
  "bg-emerald-400",
  "bg-blue-400",
  "bg-red-400",
  "bg-cyan-400",
  "bg-pink-400",
  "bg-violet-400",
];

const Post = ({ post }: Props) => {
  const {
    data: { title, publishedAt, tags },
    content,
  } = post;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-end justify-between my-8">
        <div className="flex flex-col gap-y-2">
          <ul className="flex gap-x-2 items-center">
            {(tags ?? []).map((tag, index) => (
              <li
                key={tag}
                className={cn(
                  "py-1 px-2 text-white rounded-md text-sm font-semibold",
                  bgColors[index % bgColors.length],
                )}
              >
                {tag}
              </li>
            ))}
          </ul>
          <h3 className="text-2xl font-bold">{title}</h3>
          <span className="text-muted-foreground text-sm">{publishedAt}</span>
        </div>
      </div>

      <section className="markdown-body pb-10">
        <MDXRemote source={content} />
      </section>
    </div>
  );
};

export default Post;
