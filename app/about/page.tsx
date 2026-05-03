import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CMR School Kompally",
  description: "Welcome to CMR School Kompally, an institution dedicated to nurturing young minds and shaping future leaders under the visionary leadership of Sri. Ch. Malla Reddy Garu.",
};

export default function AboutPage() {
  return (
    <div className="bg-white pb-20">
      <section className="relative flex min-h-[40vh] items-end overflow-hidden bg-primary/90">
        <div className="relative z-10 w-full px-6 py-16 lg:px-12 text-center mt-20">
          <h1 className="font-display text-4xl text-white md:text-5xl font-bold">About CMR School Kompally</h1>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-lg">Nurturing young minds and shaping future leaders</p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl text-primary mb-6 font-bold">Our Legacy & Philosophy</h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                Welcome to CMR School Kompally, an institution dedicated to nurturing young minds and shaping future leaders. Established under the visionary leadership of Sri. Ch. Malla Reddy Garu, MLA and former Minister of Telangana State, CMR School Kompally stands as a beacon of excellence in education. With a rich history of providing high-quality technical education, our school is committed to imparting holistic learning experiences from kindergarten to postgraduate levels.
            </p>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
                At CMR School Kompally, we believe in the power of education to transform lives and empower individuals to thrive in an ever-changing world. Rooted in the principles of holistic education, we aim to nurture not only academic excellence but also essential life skills, values, and qualities that foster personal growth and social responsibility.
            </p>
        </div>
      </section>

      <section id="vision-mission" className="scroll-mt-28 py-12 px-6 container mx-auto grid gap-12 md:grid-cols-2">
        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-10 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="font-display text-3xl text-primary mb-4 font-bold flex items-center gap-3">
            <span className="text-[#F5A623] text-4xl">👁</span> Vision
          </h2>
          <p className="font-body text-gray-600 leading-relaxed text-lg">
            CMR School Kompally envisions preparing every child to navigate the challenges of the future with confidence and resilience. We strive to instill in our students critical thinking skills, a global perspective, social intelligence, and a deep respect for core values such as honesty, loyalty, perseverance, and compassion. Our commitment to excellence drives us to continuously innovate and adapt to the evolving needs of our students and society.
          </p>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-10 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="font-display text-3xl text-primary mb-4 font-bold flex items-center gap-3">
            <span className="text-[#F5A623] text-4xl">🎯</span> Mission
          </h2>
          <p className="font-body text-gray-600 leading-relaxed text-lg">
            Our mission at CMR School Kompally is to create a nurturing environment where every individual is valued, respected, and empowered to reach their full potential. We are dedicated to providing a comprehensive education that fosters social awareness, civic responsibility, and personal growth. Through a holistic approach to learning, we aim to equip our students with the knowledge, skills, and mindset needed to become lifelong learners and responsible global citizens.
          </p>
        </div>
      </section>
    </div>
  );
}
