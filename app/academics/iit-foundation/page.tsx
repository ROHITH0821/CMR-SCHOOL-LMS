import type { Metadata } from "next";
import { CheckCircle2, Rocket, Brain, BookOpen, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "IIT Foundation - CMR School Kompally",
  description: "IIT Foundation program for grades 6th to 9th at CMR School Kompally.",
};

const features = [
  {
    title: "Comprehensive STEM Focus",
    description: "Thorough understanding of key concepts in mathematics, physics, chemistry, and biology.",
    icon: Brain
  },
  {
    title: "Interactive Learning",
    description: "Stimulating learning environment that encourages curiosity, critical thinking, and problem-solving skills.",
    icon: Rocket
  },
  {
    title: "Structured Materials",
    description: "Comprehensive study materials, practice worksheets, and regular assessments to track progress.",
    icon: BookOpen
  },
  {
    title: "Personalized Support",
    description: "Regular doubt-clearing sessions and one-on-one guidance to ensure each student receives needed support.",
    icon: UserCheck
  }
];

export default function IITFoundationPage() {
  return (
    <div className="bg-white pb-20">
      <section className="relative flex min-h-[30vh] items-end overflow-hidden bg-primary/90">
        <div className="relative z-10 w-full px-6 py-12 lg:px-12 text-center mt-20">
          <h1 className="font-display text-4xl text-white md:text-5xl font-bold">IIT Foundation Program</h1>
          <p className="mt-4 text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Welcome to the IIT Foundation program for students in grades 6th to 9th!
          </p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto max-w-4xl">
        <div className="prose prose-lg max-w-none text-gray-700 mb-16">
          <p className="leading-relaxed">
            At CMR SCHOOL, KOMPALLY, we believe in nurturing young minds and preparing them for a successful future in the fields of science, technology, engineering, and mathematics (STEM). Our program is designed to provide a strong foundation in these core subjects and give students the skills and confidence they need to excel in their studies and beyond.
          </p>
          <p className="leading-relaxed mt-4">
            The IIT Foundation program for grades 6th to 9th focuses on providing a comprehensive and thorough understanding of key concepts in mathematics, physics, chemistry, and biology. Our expert faculty members are dedicated to creating a stimulating learning environment that encourages curiosity and critical thinking. Through interactive and engaging classroom sessions, students will develop a deep understanding of fundamental concepts and build problem-solving skills that will serve them well in their academic careers and beyond.
          </p>
          <p className="leading-relaxed mt-4">
            Furthermore, the IIT Foundation program is designed to not only prepare students for success in their academic pursuits but also to instill a love for learning and a passion for discovery. We believe in fostering a growth mindset and encouraging students to explore their interests and pursue their goals with confidence.
          </p>
        </div>

        <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">Program Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/5 rounded-3xl p-10 border border-primary/10">
          <p className="text-xl text-primary font-medium leading-relaxed">
            We are committed to providing a nurturing and supportive environment where students can thrive and reach their full potential. Join us at IIT Foundation and let us guide your child towards a bright and successful future in STEM.
          </p>
        </div>
      </section>
    </div>
  );
}
