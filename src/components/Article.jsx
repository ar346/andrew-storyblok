import { marked } from "marked";

export default function Article({ blok }) {
  const html = marked(blok.content); 

  return (
    <div className="flex justify-center px-4">
      <article className="prose prose-lg  max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-8">{blok.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  );
}

