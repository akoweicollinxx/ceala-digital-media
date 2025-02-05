import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import ShowcaseNavbar from "@/components/showcase-navbar";
import Footer from "@/components/footer";

type BlogProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params: { slug } }: BlogProps) {
  const blogsDirectory = path.join(process.cwd(), "content/blogs");
  const filePath = path.join(blogsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <div>
      <ShowcaseNavbar />
    <article className="max-w-4xl mx-auto pt-[130px] md:pt-[170px] px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
        <p className="text-sm text-gray-600">
          By {data.author} on {data.publishDate}
        </p>
        <img
          src={data.image}
          alt={data.title}
          className="mt-6 w-full h-64 object-cover rounded-lg"
        />
      </header>
      <MDXRemote source={content} />
    </article>
    <Footer/>
    </div>
  );
}
