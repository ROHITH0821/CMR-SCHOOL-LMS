import type { Metadata } from "next";
import { BookOpen, GraduationCap, School, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Curriculum - CMR School Kompally",
  description: "Explore our comprehensive curriculum at CMR School Kompally spanning Pre-Primary, Primary, and Secondary education.",
};

const curriculumStages = [
  {
    title: "Pre-Primary (Nursery, PP1, PP2)",
    description: "At CMR School Kompally, we understand the importance of laying a strong foundation for our young learners. Our Pre-Primary curriculum is thoughtfully designed to prioritize the holistic development of each child, focusing on cognitive, motor, social, and emotional skills. Through a diverse range of engaging activities, our curriculum fosters language development, numeracy skills, and creativity. Experienced teachers create a safe and stimulating environment where age-appropriate teaching methods are utilized to meet the unique learning needs of every child.",
    icon: Star,
    color: "text-[#F5A623]",
    bg: "bg-[#F5A623]/10"
  },
  {
    title: "Primary (Grade I – V)",
    description: "In the Primary years, we are dedicated to building a solid foundation in core subjects such as English, Mathematics, Science, Social Studies, and languages including Telugu and Hindi. Our curriculum is carefully crafted to develop a wide range of skills, including problem-solving, critical thinking, and effective communication. Beyond academics, subjects like Art, Music, and Physical Education are integral components of our curriculum, providing students with a well-rounded education.",
    icon: BookOpen,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Secondary (Grade VI – VIII)",
    description: "The Secondary curriculum builds upon the foundational knowledge and skills acquired during the Primary years. With a comprehensive range of subjects including mathematics, science, social studies, Computer Science, and languages, our curriculum is designed to be challenging and rigorous. Our aim is to equip students with the necessary academic knowledge and practical skills to excel in further education or enter the workforce confidently.",
    icon: GraduationCap,
    color: "text-green-500",
    bg: "bg-green-50"
  }
];

export default function CurriculumPage() {
  return (
    <div className="bg-white pb-20">
      <section className="relative flex min-h-[30vh] items-end overflow-hidden bg-primary/90">
        <div className="relative z-10 w-full px-6 py-12 lg:px-12 text-center mt-20">
          <h1 className="font-display text-4xl text-white md:text-5xl font-bold">Our Curriculum</h1>
          <p className="mt-4 text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
            A thoughtfully designed educational journey from Pre-Primary through Secondary levels.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto max-w-5xl">
        <div className="space-y-12">
          {curriculumStages.map((stage, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className={`w-20 h-20 rounded-2xl ${stage.bg} flex items-center justify-center shrink-0`}>
                  <stage.icon className={`w-10 h-10 ${stage.color}`} />
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold text-primary mb-4">
                    {stage.title}
                  </h2>
                  <p className="font-body text-gray-600 leading-relaxed text-lg">
                    {stage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-3xl p-10 border border-gray-100 flex items-start gap-6">
          <School className="w-12 h-12 text-primary shrink-0" />
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-3">Additional Programs</h3>
            <p className="font-body text-gray-700 leading-relaxed text-lg">
              In addition to our standard curriculum, CMR School Kompally also offers Special Education, Enrichment Classes, and Remedial Classes to ensure that every student receives the support and resources they need to succeed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
