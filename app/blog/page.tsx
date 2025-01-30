"use client";

import { Button } from "@nextui-org/button";
import { useState } from "react";

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

export default function BlogPage() {
  const [filter, setFilter] = useState<string>("all");

  // Blog kategorileri
  const categories = [
    "all",
    "Web Development",
    "Backend",
    "Frontend",
    "DevOps",
    "Software Architecture",
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="relative flex flex-col gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold font-space">
              Technical{" "}
              <span className="text-violet-500 dark:text-violet-400">Blog</span>
            </h1>
            <p className="text-lg text-default-600 max-w-lg">
              Insights, tutorials, and thoughts on software development,
              architecture, and best practices.
            </p>
          </div>

          {/* Filtreler */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                className={`capitalize ${
                  filter === category
                    ? "bg-violet-500/10 text-violet-500"
                    : "hover:bg-violet-500/5"
                }`}
                size="sm"
                variant="light"
                onClick={() => setFilter(category)}
              >
                {category === "all" ? "All Posts" : category}
              </Button>
            ))}
          </div>

          {/* Dekoratif çizgi */}
          <div className="w-full h-px bg-gradient-to-r from-violet-500/20 via-violet-500/10 to-transparent" />
        </div>

        {/* Blog Posts Grid - Henüz içerik yok */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center text-default-500 py-12">
            Blog posts coming soon...
          </div>
        </div>
      </div>
    </div>
  );
}
