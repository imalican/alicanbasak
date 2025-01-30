"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { BsArrowRight } from "react-icons/bs";

import { title } from "@/components/primitives";

// Örnek blog verileri
const blogPosts = [
  {
    id: 1,
    title: "Modern Web Development in 2024",
    excerpt:
      "Exploring the latest trends and tools in web development, including server components, edge computing, and AI integration.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: "/blog/web-dev.jpg",
  },
  {
    id: 2,
    title: "Understanding TypeScript Generics",
    excerpt:
      "Deep dive into TypeScript's powerful generic types and how they can make your code more robust and reusable.",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "TypeScript",
    image: "/blog/typescript.jpg",
  },
  // Daha fazla blog yazısı eklenebilir
];

export default function BlogsPage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-8">
        {/* Özgün Blog Hero Section */}
        <div className="relative flex flex-col gap-6 mb-16">
          {/* Sol tarafta başlık ve açıklama */}
          <div className="flex flex-col gap-3">
            <h1 className={`${title({ size: "md" })} font-space`}>
              Latest{" "}
              <span className="text-violet-500 dark:text-violet-400">
                Articles
              </span>
            </h1>
            <p className="text-lg text-default-600 max-w-lg font-satoshi">
              Exploring the frontiers of web development, sharing insights, and
              diving deep into technical concepts.
            </p>
          </div>

          {/* Alt kısımda kategori filtreleri */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-violet-500/20 bg-gradient-to-r from-violet-500/5 to-transparent backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-violet-500/50" />
              <span className="text-sm text-default-600">All Articles</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-violet-500/20 hover:bg-violet-500/5 transition-colors cursor-pointer">
              <span className="text-sm text-default-500">Web Development</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-violet-500/20 hover:bg-violet-500/5 transition-colors cursor-pointer">
              <span className="text-sm text-default-500">TypeScript</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-violet-500/20 hover:bg-violet-500/5 transition-colors cursor-pointer">
              <span className="text-sm text-default-500">React</span>
            </div>
          </div>

          {/* Dekoratif çizgi */}
          <div className="w-full h-px bg-gradient-to-r from-violet-500/20 via-violet-500/10 to-transparent" />
        </div>

        {/* Featured Post */}
        <Card
          isPressable
          className="group relative block overflow-hidden rounded-xl bg-white/10 p-0
          before:absolute before:inset-0 before:z-0
          before:bg-gradient-to-r before:from-transparent before:via-violet-500/10 before:to-transparent
          before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-[3000ms]
          after:absolute after:inset-0 after:z-0 after:bg-gradient-to-r
          after:from-transparent after:via-white/10 after:to-transparent
          after:translate-x-[-200%] hover:after:translate-x-[200%]
          after:transition-transform after:duration-[3000ms] after:delay-150
          border border-violet-500/10 backdrop-blur-sm
          transition-all duration-100 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
        >
          <div className="relative z-10 grid md:grid-cols-2">
            <CardHeader className="p-0 overflow-hidden">
              <div className="relative w-full h-[300px] md:h-full">
                <Image
                  removeWrapper
                  alt={blogPosts[0].title}
                  className="object-cover"
                  classNames={{
                    img: "w-full h-full object-cover",
                  }}
                  src={blogPosts[0].image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </CardHeader>
            <CardBody className="flex flex-col justify-center p-8">
              <div className="p-3 rounded-lg bg-violet-500/10 self-start transition-all duration-300 group-hover:bg-violet-500/20 mb-4">
                <span className="text-violet-500 transition-all duration-300 group-hover:text-violet-400">
                  {blogPosts[0].category}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-violet-400">
                {blogPosts[0].title}
              </h2>
              <p className="text-default-600 text-lg mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-2 text-violet-500 transition-all duration-300 group-hover:text-violet-400">
                <span className="font-medium">Read Article</span>
                <BsArrowRight />
              </div>
            </CardBody>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => (
            <Card
              key={post.id}
              isPressable
              className="group relative block overflow-hidden rounded-xl bg-white/10 p-0
              before:absolute before:inset-0 before:z-0
              before:bg-gradient-to-r before:from-transparent before:via-violet-500/10 before:to-transparent
              before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-[3000ms]
              after:absolute after:inset-0 after:z-0 after:bg-gradient-to-r
              after:from-transparent after:via-white/10 after:to-transparent
              after:translate-x-[-200%] hover:after:translate-x-[200%]
              after:transition-transform after:duration-[3000ms] after:delay-150
              border border-violet-500/10 backdrop-blur-sm
              transition-all duration-100 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            >
              <div className="relative z-10">
                <CardHeader className="p-0">
                  <div className="relative w-full h-[200px]">
                    <Image
                      removeWrapper
                      alt={post.title}
                      className="object-cover"
                      classNames={{
                        img: "w-full h-full object-cover",
                      }}
                      src={post.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </CardHeader>
                <CardBody className="p-6">
                  <div className="p-2 rounded-lg bg-violet-500/10 self-start transition-all duration-300 group-hover:bg-violet-500/20 mb-4 inline-block">
                    <span className="text-violet-500 transition-all duration-300 group-hover:text-violet-400 text-sm">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-violet-400">
                    {post.title}
                  </h3>
                  <p className="text-default-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardBody>
                <CardFooter className="px-6 py-4 flex justify-between border-t border-violet-500/20">
                  <span className="text-small text-default-400">
                    {post.date}
                  </span>
                  <div className="flex items-center gap-1 text-violet-500 transition-all duration-300 group-hover:text-violet-400">
                    <span className="text-small font-medium">Read Article</span>
                    <BsArrowRight size={14} />
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
