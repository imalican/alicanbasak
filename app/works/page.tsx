"use client";

import { Button } from "@nextui-org/button";
import { useState } from "react";

import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";

export default function WorksPage() {
  const [filter, setFilter] = useState<string>("all");

  // Benzersiz yılları al ve "all" seçeneğini ekle
  const years = ["all", ...new Set(works.map((work) => work.year))]
    .sort()
    .reverse();

  // Seçilen yıla göre işleri filtrele
  const filteredWorks = works.filter((work) => {
    if (filter === "all") return true;

    return work.year === filter;
  });

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="relative flex flex-col gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold font-space">
              Professional{" "}
              <span className="text-violet-500 dark:text-violet-400">
                Experience
              </span>
            </h1>
            <p className="text-lg text-default-600 max-w-lg">
              A showcase of my professional journey and contributions in
              software development.
            </p>
          </div>

          {/* Filtreler */}
          <div className="flex flex-wrap items-center gap-3">
            {years.map((year) => (
              <Button
                key={year}
                className={`capitalize ${
                  filter === year
                    ? "bg-violet-500/10 text-violet-500"
                    : "hover:bg-violet-500/5"
                }`}
                size="sm"
                variant="light"
                onClick={() => setFilter(year)}
              >
                {year === "all" ? "All Years" : year}
              </Button>
            ))}
          </div>

          {/* Dekoratif çizgi */}
          <div className="w-full h-px bg-gradient-to-r from-violet-500/20 via-violet-500/10 to-transparent" />
        </div>

        {/* Works Grid */}
        <div className="grid gap-6">
          {filteredWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
}
