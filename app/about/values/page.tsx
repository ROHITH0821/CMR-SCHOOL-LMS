import type { Metadata } from "next";
import { Heart, UserCheck, Trophy, Sparkles, Brain, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Values - CMR School Kompally",
  description: "Explore the core values of CMR School Kompally that form the foundation of our educational philosophy.",
};

const values = [
  {
    title: "Respect and Teaching",
    description: "We believe that school is a place where every child is respected first and foremost. We uphold the value of respect in all our interactions, fostering an environment where students feel valued, heard, and supported. Our teachers are dedicated to not only imparting knowledge but also instilling values that promote empathy, understanding, and mutual respect.",
    icon: Heart
  },
  {
    title: "Teacher Responsibility",
    description: "We firmly believe that a student’s success is a reflection of our dedication and commitment as educators. At CMR School Kompally, we recognize that it is the responsibility of the teacher to inspire, guide, and support students on their educational journey. We are committed to providing high-quality instruction, personalized support, and encouragement.",
    icon: UserCheck
  },
  {
    title: "Hard Work and Success",
    description: "We understand the importance of hard work and perseverance in achieving success. Our faculty and staff work tirelessly to ensure the success of every child entrusted to our care. We collaborate with parents, students, and the community to create a supportive and empowering environment where students can excel.",
    icon: Trophy
  },
  {
    title: "Promotion of Healthy Learning Ambience",
    description: "We are dedicated to fostering a healthy and conducive learning environment where students feel safe, engaged, and motivated to learn. We prioritize the physical, emotional, and mental well-being of our students, providing support services and resources to promote overall wellness.",
    icon: Sparkles
  },
  {
    title: "Discovery and Nurturing of Multiple Intelligences",
    description: "We recognize that every child is unique and possesses a diverse range of talents, abilities, and intelligences. At CMR School Kompally, we are committed to discovering and nurturing the multiple intelligences of each child, providing opportunities for exploration, creativity, and self-expression.",
    icon: Brain
  },
  {
    title: "Neutralization of Individual Differences",
    description: "We celebrate diversity and understand the importance of embracing individual differences. We strive to create an inclusive and welcoming environment where all students feel accepted, respected, and valued. By embracing diversity, we promote a culture of mutual understanding and acceptance.",
    icon: Users
  }
];

export default function ValuesPage() {
  return (
    <div className="bg-white pb-20">
      <section className="relative flex min-h-[30vh] items-end overflow-hidden bg-primary/90">
        <div className="relative z-10 w-full px-6 py-12 lg:px-12 text-center mt-20">
          <h1 className="font-display text-4xl text-white md:text-5xl font-bold">Our Core Values</h1>
          <p className="mt-4 text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
            At CMR School Kompally, our core values form the foundation of our educational philosophy and guide our interactions with students, parents, and the community.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-[#F5A623] transition-colors">
                <value.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                {value.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center bg-gray-50 rounded-3xl p-10 border border-gray-100">
          <p className="text-xl text-gray-700 font-medium leading-relaxed">
            These core values embody the essence of CMR School Kompally and guide our efforts to provide a holistic and enriching educational experience for every child. We are committed to upholding these values in all aspects of school life.
          </p>
        </div>
      </section>
    </div>
  );
}
