"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const streams = ["All", "Science", "Commerce"] as const;
const years = ["2024", "2023", "2022"] as const;

const toppers = [
  { name: "Aanya Reddy", stream: "Science", year: "2024", score: "498/500", img: 1 },
  { name: "Vihaan Rao", stream: "Science", year: "2024", score: "497/500", img: 2 },
  { name: "Neha Kulkarni", stream: "Commerce", year: "2023", score: "495/500", img: 3 },
  { name: "Arjun Sen", stream: "Science", year: "2022", score: "496/500", img: 4 },
];

export default function AchievementsPage() {
  const [year, setYear] = useState<(typeof years)[number]>("2024");
  const [stream, setStream] = useState<(typeof streams)[number]>("All");

  const filtered = useMemo(() => {
    return toppers.filter((t) => t.year === year && (stream === "All" || t.stream === stream));
  }, [year, stream]);

  return (
    <div className="bg-white">
      <section className="section-padding container-custom">
        <h1 className="font-display text-4xl text-primary">Achievements</h1>
        <p className="mt-4 max-w-2xl text-textSecondary">
          Board toppers, awards, sports, and Olympiads — a snapshot of student excellence.
        </p>
      </section>

      <section className="section-padding border-t border-border bg-cardBg">
        <div className="container-custom">
          <h2 className="mb-6 font-display text-2xl text-primary">Board toppers</h2>
          <div className="mb-8 flex flex-wrap gap-3">
            <select
              value={year}
              onChange={(e) => setYear(e.target.value as (typeof years)[number])}
              className="rounded-pill border border-border bg-white px-4 py-2 text-sm"
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
            <div className="flex flex-wrap gap-2">
              {streams.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStream(s)}
                  className={`rounded-pill px-4 py-2 text-sm ${
                    stream === s ? "bg-primary text-white" : "bg-white border border-border"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <div key={t.name} className="overflow-hidden rounded-card border border-border bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`https://picsum.photos/seed/top${t.img}/600/450`}
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <span className="absolute right-3 top-3 rounded-pill bg-accent px-3 py-1 text-xs font-bold text-primary">
                    {t.score}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-display text-lg text-primary">{t.name}</p>
                  <p className="text-sm text-textMuted">
                    {t.stream} · {t.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding container-custom">
        <h2 className="mb-6 font-display text-2xl text-primary">Awards & recognitions</h2>
        <div className="columns-2 gap-4 md:columns-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-card border border-border">
              <div className="relative aspect-[3/4] bg-sectionAlt">
                <Image
                  src={`https://picsum.photos/seed/award${i}/400/500`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <h2 className="mb-8 font-display text-2xl text-accent">Sports medals</h2>
          <ul className="space-y-4 border-l-2 border-accent/50 pl-6">
            <li>2026 — Regional athletics: 12 gold, 8 silver</li>
            <li>2025 — National badminton: quarter-finalists</li>
            <li>2024 — CBSE clusters: football champions</li>
          </ul>
        </div>
      </section>

      <section className="section-padding container-custom">
        <h2 className="mb-6 font-display text-2xl text-primary">Olympiad & competitions</h2>
        <div className="overflow-x-auto rounded-modal border border-border">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="bg-sectionAlt">
              <tr>
                <th className="p-3 font-medium">Student</th>
                <th className="p-3 font-medium">Competition</th>
                <th className="p-3 font-medium">Level</th>
                <th className="p-3 font-medium">Year</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["R. Kiran", "SOF IMO", "National", "2025"],
                ["S. Dia", "NSSQ", "State", "2025"],
                ["M. Omar", "Robotics Challenge", "Zonal", "2024"],
              ].map((row, idx) => (
                <tr key={idx} className="border-t border-border">
                  {row.map((cell) => (
                    <td key={cell} className="p-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
