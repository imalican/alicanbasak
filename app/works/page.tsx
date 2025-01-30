"use client";

import { Card, CardBody } from "@nextui-org/card";
import { BsArrowUpRight } from "react-icons/bs";

import { title } from "@/components/primitives";

// Örnek works verileri
const works = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration.",
    role: "Lead Developer",
    year: "2024",
    category: "Web Application",
    link: "#",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare management solution for medical professionals.",
    role: "Frontend Developer",
    year: "2023",
    category: "Enterprise Software",
    link: "#",
  },
  // Daha fazla proje eklenebilir
];

export default function WorksPage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="relative flex flex-col gap-6 mb-16">
          {/* Sol tarafta başlık ve açıklama */}
          <div className="flex flex-col gap-3">
            <h1 className={`${title({ size: "md" })} font-space`}>
              Professional{" "}
              <span className="text-violet-500 dark:text-violet-400">
                Experience
              </span>
            </h1>
            <p className="text-lg text-default-600 max-w-lg font-satoshi">
              A collection of commercial projects and professional work
              experience in software development.
            </p>
          </div>

          {/* Sağ tarafta yıl bilgisi */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-violet-500/20 bg-gradient-to-r from-violet-500/5 to-transparent backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-violet-500/50" />
              <span className="text-sm text-default-600">2022 - Present</span>
            </div>
          </div>

          {/* Dekoratif çizgi */}
          <div className="w-full h-px bg-gradient-to-r from-violet-500/20 via-violet-500/10 to-transparent" />
        </div>

        {/* Works Grid */}
        <div className="grid gap-6">
          {works.map((work) => (
            <Card
              key={work.id}
              isPressable
              className="group relative block overflow-hidden bg-white/10
              before:absolute before:inset-0 before:z-0
              before:bg-gradient-to-r before:from-transparent before:via-violet-500/5 before:to-transparent
              before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-[3000ms]
              border border-violet-500/20 backdrop-blur-sm
              transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            >
              <CardBody className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6 p-2">
                  {/* Sol taraf - Yıl ve kategori */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:w-48 md:border-r border-violet-500/20 md:pr-6">
                    <span className="text-2xl font-bold text-violet-500 dark:text-violet-400">
                      {work.year}
                    </span>
                    <span className="text-sm text-default-500">
                      {work.category}
                    </span>
                  </div>

                  {/* Orta - Başlık ve açıklama */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold group-hover:text-violet-400 transition-colors">
                        {work.title}
                      </h3>
                      <BsArrowUpRight className="text-violet-500 group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                    <p className="text-default-500 mb-4">{work.description}</p>
                    <span className="text-sm text-default-400">
                      {work.role}
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
