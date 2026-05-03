import type { Metadata } from "next";
import { Trophy, Medal, Brain, PenTool } from "lucide-react";

export const metadata: Metadata = {
  title: "Competitions - CMR School Kompally",
  description: "Explore the various competitions and skill development programs at CMR School Kompally, including SOF Olympiads, MI Champs, SIP Abacus, and Writivity.",
};

const competitions = [
  {
    title: "SOF Olympiads",
    description: "The Science Olympiad Foundation (SOF) Olympiads encourage students to develop analytical and reasoning skills. Our students consistently excel in these prestigious national and international level competitions.",
    details: "Our students demonstrated exceptional performance in IGKO with 75 participants.",
    achievers: [
      "Vismitha - Zonal Ranker",
      "Naitik Sai Nayak - Zonal Ranker",
      "Nishant Sai Nayak - Zonal Ranker"
    ],
    icon: Trophy,
    color: "text-yellow-500",
    bg: "bg-yellow-50"
  },
  {
    title: "MI Champs India",
    description: "An initiative to nurture '21st Century Skills' through Math, Science, and English Olympiads (AIMCE, AISCE, AIECE). We carefully shape students to become active, valuable, and contributing members of our nation's progress.",
    details: "Out of 28 participants, we secured 5 State Ranks among the top 10.",
    achievers: [
      "M. Varun Goud (Rank 1) - Grade III",
      "Naitik Sai Nayak (Rank 3) - Grade III",
      "B. Vismitha (Rank 7) - Grade III",
      "Ansh Rai (Rank 7) - Grade IV",
      "Nishant Sai Nayak (Rank 10) - Grade V"
    ],
    icon: Medal,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "SIP Abacus",
    description: "A skill development program designed to enhance soft-skills, numerical abilities, and overall intelligence. The SIP Abacus program is tailored to engage children productively, making math learning fun and effective in today's digitally distracted world.",
    details: "SIP Abacus makes your child 5 times better.",
    achievers: [],
    icon: Brain,
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    title: "Writivity Handwriting",
    description: "A focused program to improve penmanship and presentation skills. Good handwriting is an essential component of clear communication and academic excellence.",
    details: "Students are trained rigorously and evaluated. Trophies were awarded to top performers.",
    achievers: [
      "Y. Manasa - Grade III",
      "Naitik Sai Nayak - Grade III",
      "Nishant Sai Nayak - Grade V"
    ],
    icon: PenTool,
    color: "text-green-500",
    bg: "bg-green-50"
  }
];

export default function CompetitionsPage() {
  return (
    <div className="bg-white pb-20">
      <section className="relative flex min-h-[30vh] items-end overflow-hidden bg-primary/90">
        <div className="relative z-10 w-full px-6 py-12 lg:px-12 text-center mt-20">
          <h1 className="font-display text-4xl text-white md:text-5xl font-bold">Competitions & Programs</h1>
          <p className="mt-4 text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Fostering competitive spirit, skill development, and academic excellence beyond the standard curriculum.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {competitions.map((comp, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className={`w-16 h-16 rounded-2xl ${comp.bg} flex items-center justify-center mb-6`}>
                <comp.icon className={`w-8 h-8 ${comp.color}`} />
              </div>
              <h2 className="font-display text-3xl font-bold text-primary mb-4">
                {comp.title}
              </h2>
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                {comp.description}
              </p>
              <p className="font-body text-gray-800 font-medium mb-6">
                {comp.details}
              </p>
              
              {comp.achievers.length > 0 && (
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <h3 className="font-display text-lg font-bold text-primary mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent" />
                    Our Achievers:
                  </h3>
                  <ul className="space-y-3">
                    {comp.achievers.map((achiever, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="font-body text-sm text-gray-700 leading-relaxed font-medium">{achiever}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
