"use client";

import ProjectCard from "@/components/ProjectCard";
import { title } from "@/components/primitives";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="relative flex flex-col gap-6 mb-16">
          {/* Sol tarafta başlık ve açıklama */}
          <div className="flex flex-col gap-3">
            <h1 className={`${title({ size: "md" })} font-space`}>
              Personal{" "}
              <span className="text-violet-500 dark:text-violet-400">
                Projects
              </span>
            </h1>
            <p className="text-lg text-default-600 max-w-lg font-satoshi">
              Web geliştirme, mobil uygulamalar ve yapay zeka çözümlerini
              kapsayan proje portföyümü keşfedin.
            </p>
          </div>

          {/* Sağ tarafta teknolojiler */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-violet-500/20 bg-gradient-to-r from-violet-500/5 to-transparent backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-violet-500/50" />
              <span className="text-sm text-default-600">All Projects</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-violet-500/20 hover:bg-violet-500/5 transition-colors cursor-pointer">
              <span className="text-sm text-default-500">Web Development</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-violet-500/20 hover:bg-violet-500/5 transition-colors cursor-pointer">
              <span className="text-sm text-default-500">Mobile Apps</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-violet-500/20 hover:bg-violet-500/5 transition-colors cursor-pointer">
              <span className="text-sm text-default-500">AI Solutions</span>
            </div>
          </div>

          {/* Dekoratif çizgi */}
          <div className="w-full h-px bg-gradient-to-r from-violet-500/20 via-violet-500/10 to-transparent" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
