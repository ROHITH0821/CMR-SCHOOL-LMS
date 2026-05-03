import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Salient Features - CMR School Kompally",
  description: "Explore the salient features of CMR School Kompally, including world-class infrastructure, technology integration, and holistic curriculum.",
};

const features = [
  {
    title: "World-Class Infrastructure",
    description: "Spanning over 5 acres of lush green campus, CMR School Kompally boasts a modern and spacious infrastructure designed to provide an enriching learning environment."
  },
  {
    title: "Activity-Based Curriculum",
    description: "Our curriculum emphasizes creative learning methods, ensuring students are actively engaged in their education through hands-on activities and experiential learning."
  },
  {
    title: "Extra and Co-Curricular Activities",
    description: "We offer a diverse range of extracurricular and co-curricular activities to complement academic learning, fostering holistic development and nurturing students’ talents and interests."
  },
  {
    title: "Highly Qualified Faculty",
    description: "Our faculty comprises well-trained and specialized educators committed to providing quality education and personalized attention to every student."
  },
  {
    title: "Child-Centric Approach",
    description: "With a focus on the individual needs and interests of each child, our approach to education ensures a personalized learning experience that promotes overall growth and development."
  },
  {
    title: "Safe and Secure Environment",
    description: "The safety and security of our students are paramount. We maintain stringent safety protocols to provide a secure learning environment where students can thrive."
  },
  {
    title: "Language Enhancement",
    description: "Our English lab and calligraphy classes aim to enhance language skills, promoting better communication and handwriting practices among students."
  },
  {
    title: "Mathematics & Abacus",
    description: "Equipped with advanced resources, our mathematics lab provides hands-on experiences. We also offer specialized training in abacus and advanced mathematics."
  },
  {
    title: "Advanced Science Labs",
    description: "Our science labs are equipped with state-of-the-art facilities and resources to facilitate practical learning experiences and experiments, enhancing scientific knowledge."
  },
  {
    title: "Technology Integration",
    description: "With a computer lab for each student equipped with the latest IT facilities and internet access, we ensure technology is seamlessly integrated into the learning process."
  },
  {
    title: "Comprehensive Library",
    description: "Our library offers a wide range of books and educational toys, providing students with access to diverse resources to support academic and recreational reading."
  },
  {
    title: "Audio-Visual Lab",
    description: "Our audio-visual lab facilitates interactive learning experiences, enhancing comprehension and retention of academic concepts through multimedia presentations."
  },
  {
    title: "Photography and Journalism",
    description: "Students are encouraged to explore their creative talents through photography and journalism, fostering self-expression and communication skills."
  },
  {
    title: "Professional Coaching in Sports",
    description: "We offer professional coaching in a variety of sports, including tennis, cricket, karate, kickboxing, yoga, basketball, football, and more."
  },
  {
    title: "State-of-the-Art Skating Rink",
    description: "Our state-of-the-art skating rink offers students the opportunity to learn and practice skating skills in a safe and controlled environment."
  },
  {
    title: "Parent Engagement Programs",
    description: "We conduct regular parent orientation programs and offer counseling services for both parents and students, fostering a collaborative partnership."
  },
  {
    title: "Unique Monitoring System",
    description: "Our school implements a unique system of monitoring to assess students’ progress and tailor educational approaches to meet their individual needs effectively."
  },
  {
    title: "Smart Boards and Visual Learning",
    description: "All classrooms are equipped with interactive smart boards, LCD projectors, and computers, facilitating visual learning across all subjects."
  },
  {
    title: "Cultural and Literary Activities",
    description: "Students participate in cultural and literary activities such as music, dance, quizzes, debates, painting, and calligraphy, promoting creativity."
  }
];

export default function SalientFeaturesPage() {
  return (
    <div className="bg-white pb-20">
      <section className="relative flex min-h-[30vh] items-end overflow-hidden bg-primary/90">
        <div className="relative z-10 w-full px-6 py-12 lg:px-12 text-center mt-20">
          <h1 className="font-display text-4xl text-white md:text-5xl font-bold">Salient Features</h1>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-lg">
            Discover what makes CMR School Kompally an exceptional place for learning and growth.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
              <h3 className="font-display text-xl font-bold text-primary mb-3 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#F5A623] shrink-0 mt-0.5" />
                {feature.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed text-base ml-9">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center bg-primary/5 rounded-3xl p-10 border border-primary/10">
          <p className="text-xl text-primary font-medium leading-relaxed">
            At CMR School Kompally, we are committed to providing a comprehensive and enriching educational experience that empowers students to excel academically, socially, and personally, ensuring they are well-prepared for the challenges of the future.
          </p>
        </div>
      </section>
    </div>
  );
}
