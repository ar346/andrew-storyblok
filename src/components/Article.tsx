import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import type { SbBlokData } from "@storyblok/js";

type ArticleProps = {
  blok: SbBlokData & {
    title: string;
    content: string;
  };
};

export default function Article({ blok }: ArticleProps) {
  const dirtyHtml = marked(blok.content, {async: false});
  const cleanHtml = sanitizeHtml(dirtyHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title", "width", "height"],
      a: ["href", "name", "target"],
    },
  });

  return (
    <div className="flex justify-center px-4">
      <article className="prose prose-lg max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-8">{blok.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
      </article>
    </div>
  );
}


