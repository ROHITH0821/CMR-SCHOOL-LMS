import type { Metadata } from "next";
import { Palette, Music, Activity, Trophy, Move, Gamepad2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Co-Curricular Activities - CMR School Kompally",
  description: "Explore our comprehensive co-curricular programs including Dance, Music, Art & Craft, and a wide range of Indoor and Outdoor sports.",
};

const artsPrograms = [
  {
    title: "Dance Program",
    description: "Not just a form of artistic expression, but a powerful tool for holistic development and self-discovery. Students explore classical, contemporary, folk, and hip-hop styles.",
    benefits: [
      "Physical Fitness: Improves flexibility, strength, and cardiovascular health.",
      "Creative Expression: Communicate emotions through movement.",
      "Self-Confidence: Gain poise and stage presence through performances.",
      "Teamwork: Synchronize movements and collaborate in ensembles."
    ],
    icon: Move,
    color: "text-pink-500",
    bg: "bg-pink-50"
  },
  {
    title: "Music Program",
    description: "A journey of musical exploration spanning vocal training, instrumental instruction, music theory, and composition across classical, jazz, pop, and traditional genres.",
    benefits: [
      "Creative Expression: Channel imagination into tangible artistic expression.",
      "Cognitive Development: Enhances memory, attention, and mathematical abilities.",
      "Emotional Well-being: Uplifts spirit and cultivates emotional resilience.",
      "Collaboration: Work together in ensembles towards common musical goals."
    ],
    icon: Music,
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    title: "Art & Craft",
    description: "A colorful journey of creativity through painting, drawing, sculpting, and crafting in a supportive and encouraging environment.",
    benefits: [
      "Creative Expression: Communicate thoughts visually and freely.",
      "Fine Motor Skills: Develop hand-eye coordination and dexterity.",
      "Problem-Solving: Experiment, innovate, and find creative solutions.",
      "Cultural Appreciation: Understand diverse artistic movements and history."
    ],
    icon: Palette,
    color: "text-orange-500",
    bg: "bg-orange-50"
  }
];

const sportsPrograms = [
  {
    category: "Indoor Sports",
    description: "Our indoor sports facilities provide students with opportunities to develop strategic thinking, focus, and precision in a controlled environment.",
    activities: ["Carroms", "Chess", "Table Tennis"],
    icon: Gamepad2,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    category: "Outdoor Sports",
    description: "Expansive outdoor facilities designed to build physical endurance, team spirit, and athletic excellence across a variety of disciplines.",
    activities: ["Cricket", "Tennis", "Basketball", "Athletics", "Kho-Kho", "Kabaddi", "Skating"],
    icon: Trophy,
    color: "text-green-500",
    bg: "bg-green-50"
  }
];

export default function CoCurricularPage() {
  return (
    <div className="bg-white pb-20">
      <section className="relative flex min-h-[30vh] items-end overflow-hidden bg-primary/90">
        <div className="relative z-10 w-full px-6 py-12 lg:px-12 text-center mt-20">
          <h1 className="font-display text-4xl text-white md:text-5xl font-bold">Co-Curricular & Sports</h1>
          <p className="mt-4 text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Fostering holistic development through vibrant arts and dynamic athletic programs.
          </p>
        </div>
      </section>

      {/* Arts Section */}
      <section className="py-20 px-6 container mx-auto border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <Palette className="w-8 h-8 text-accent" />
              Performing & Visual Arts
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Empowering students to explore their creativity, develop fine motor skills, and express themselves through various artistic mediums.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {artsPrograms.map((program, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl ${program.bg} flex items-center justify-center mb-6`}>
                  <program.icon className={`w-8 h-8 ${program.color}`} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-4">
                  {program.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed mb-6">
                  {program.description}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <h4 className="font-display text-lg font-bold text-primary mb-4">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {program.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="font-body text-sm text-gray-700 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-20 px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <Activity className="w-8 h-8 text-accent" />
              Sports & Athletics
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Cultivating physical fitness, strategic thinking, and teamwork through comprehensive indoor and outdoor athletic programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sportsPrograms.map((sport, idx) => (
              <div key={idx} className="bg-gray-50 rounded-3xl p-8 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl ${sport.bg} flex items-center justify-center mb-6`}>
                  <sport.icon className={`w-8 h-8 ${sport.color}`} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-4">
                  {sport.category}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed mb-6">
                  {sport.description}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-3">
                    {sport.activities.map((activity, aIdx) => (
                      <span key={aIdx} className="px-4 py-2 bg-white text-primary font-medium text-sm rounded-full border border-gray-100 shadow-sm">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
