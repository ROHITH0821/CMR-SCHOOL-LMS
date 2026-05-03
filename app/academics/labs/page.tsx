import type { Metadata } from "next";
import { Rocket, Microscope, Calculator, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Labs - CMR School Kompally",
  description: "Explore our state-of-the-art Space Lab, Science Lab, Maths Lab, and Computer Lab at CMR School Kompally.",
};

const labs = [
  {
    title: "Space Lab",
    description: "Welcome to the Space Lab, where students embark on an exhilarating journey through the cosmos without ever leaving the classroom. A cutting-edge facility designed to ignite curiosity, inspire exploration, and deepen understanding of the universe.",
    features: [
      "Interactive Learning Stations: Explore celestial bodies, galaxies, and cosmic phenomena.",
      "State-of-the-Art Telescopes: Observe planets, stars, and constellations firsthand.",
      "Virtual Space Tours: Virtual reality experiences of space missions.",
      "Hands-On Experiments: Build model rockets and conduct properties of space materials experiments."
    ],
    icon: Rocket,
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    title: "Science Lab",
    description: "A vibrant hub of experimentation, discovery, and innovation, where students engage in immersive learning experiences across physics, chemistry, biology, and environmental science.",
    features: [
      "Modern Equipment and Facilities for wide-ranging experiments.",
      "Strict Safety Protocols with trained lab assistants.",
      "Interactive Learning Stations for hands-on active learning.",
      "Collaborative Learning Spaces fostering teamwork and camaraderie."
    ],
    icon: Microscope,
    color: "text-green-500",
    bg: "bg-green-50"
  },
  {
    title: "Maths Lab",
    description: "A dynamic learning space designed to transform abstract mathematical concepts into tangible, hands-on experiences that engage, inspire, and empower students to become confident problem solvers.",
    features: [
      "Interactive Learning Tools including geometric shapes and manipulatives.",
      "Technology Integration with interactive whiteboards and educational software.",
      "Hands-On Activities emphasizing collaborative projects and real-world applications.",
      "Flexible Learning Spaces to accommodate different learning styles."
    ],
    icon: Calculator,
    color: "text-[#F5A623]",
    bg: "bg-[#F5A623]/10"
  },
  {
    title: "Computer Lab",
    description: "Enter a world of boundless possibilities, where students harness the power of technology to explore, create, and innovate with our state-of-the-art resources.",
    features: [
      "High-Tech Infrastructure featuring advanced software applications.",
      "High-speed Internet Connectivity for research and collaboration.",
      "Multimedia Resources for digital storytelling and interactive presentations.",
      "Programming and Coding Tools to develop computational thinking."
    ],
    icon: Monitor,
    color: "text-blue-500",
    bg: "bg-blue-50"
  }
];

export default function LabsPage() {
  return (
    <div className="bg-white pb-20">
      <section className="relative flex min-h-[30vh] items-end overflow-hidden bg-primary/90">
        <div className="relative z-10 w-full px-6 py-12 lg:px-12 text-center mt-20">
          <h1 className="font-display text-4xl text-white md:text-5xl font-bold">State-of-the-Art Labs</h1>
          <p className="mt-4 text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Hands-on learning environments designed to foster inquiry, innovation, and critical thinking.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {labs.map((lab, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className={`w-16 h-16 rounded-2xl ${lab.bg} flex items-center justify-center mb-6`}>
                <lab.icon className={`w-8 h-8 ${lab.color}`} />
              </div>
              <h2 className="font-display text-3xl font-bold text-primary mb-4">
                {lab.title}
              </h2>
              <p className="font-body text-gray-600 leading-relaxed mb-6">
                {lab.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-100">
                <h3 className="font-display text-lg font-bold text-primary mb-4">Key Features:</h3>
                <ul className="space-y-3">
                  {lab.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="font-body text-sm text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
