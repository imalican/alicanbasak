"use client";

import { Card, CardBody } from "@nextui-org/card";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

import { works } from "@/data/works";

export function WorksList() {
  const [selectedYear, setSelectedYear] = useState<string>("all");

  // Benzersiz yılları al ve "all" seçeneğini ekle
  const years = ["all", ...new Set(works.map((work) => work.year))]
    .sort()
    .reverse();

  // Seçilen yıla göre işleri filtrele
  const filteredWorks = works.filter((work) => {
    if (selectedYear === "all") return true;

    return work.year === selectedYear;
  });

  // Yıl gösterimini güncelle
  const formatWorkYear = (work: (typeof works)[0]) => {
    if (work.year === work.startYear) {
      return work.year;
    }

    return `${work.startYear} - ${work.year}`;
  };

  return (
    <>
      {/* Yıl filtreleri */}
      <div className="flex flex-wrap items-center gap-3">
        {years.map((year) => (
          <button
            key={year}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-violet-500/20
            transition-all duration-300 hover:bg-violet-500/5
            ${
              selectedYear === year
                ? "bg-gradient-to-r from-violet-500/5 to-transparent backdrop-blur-sm"
                : "hover:border-violet-500/30"
            }`}
            onClick={() => setSelectedYear(year)}
          >
            {selectedYear === year && (
              <span className="w-2 h-2 rounded-full bg-violet-500/50" />
            )}
            <span className="text-sm text-default-600">
              {year === "all" ? "All Years" : year}
            </span>
          </button>
        ))}
      </div>

      {/* Works Grid */}
      <div className="grid gap-6">
        {filteredWorks.map((work) => (
          <Card
            key={work.id}
            isPressable
            as="a"
            className="group relative block overflow-hidden bg-white/10
            before:absolute before:inset-0 before:z-0
            before:bg-gradient-to-r before:from-transparent before:via-violet-500/5 before:to-transparent
            before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-[3000ms]
            border border-violet-500/20 backdrop-blur-sm
            transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            href={work.link}
            target="_blank"
          >
            <CardBody className="relative z-10">
              <div className="flex flex-col gap-6 p-2">
                {/* Üst kısım - Başlık ve meta bilgiler */}
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Sol taraf - Yıl ve kategori */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:w-48 md:border-r border-violet-500/20 md:pr-6">
                    <span className="text-2xl font-bold text-violet-500 dark:text-violet-400">
                      {formatWorkYear(work)}
                    </span>
                    <span className="text-sm text-default-500">
                      {work.category}
                    </span>
                  </div>

                  {/* Sağ taraf - Başlık ve açıklama */}
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

                {/* Alt kısım - Achievements ve Technologies */}
                <div className="border-t border-violet-500/20 pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-violet-500 dark:text-violet-400 mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {work.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="text-sm text-default-500 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500/50 mt-1.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-violet-500 dark:text-violet-400 mb-3">
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {work.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-500
                            transition-all duration-300 group-hover:bg-violet-500/20 group-hover:text-violet-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}
