import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Principal's Message - CMR School Kompally",
  description: "Read the message from the Principal of CMR School Kompally regarding our mission, values, and commitment to holistic education.",
};

export default function PrincipalMessagePage() {
  return (
    <div className="bg-white pb-20">
      <section className="relative flex min-h-[30vh] items-end overflow-hidden bg-primary/90">
        <div className="relative z-10 w-full px-6 py-12 lg:px-12 text-center mt-20">
          <h1 className="font-display text-4xl text-white md:text-5xl font-bold">Principal's Desk</h1>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto bg-gray-50 p-10 md:p-14 rounded-3xl border border-gray-100 shadow-sm">
          <div className="prose prose-lg text-gray-700 mx-auto">
            <p className="font-semibold text-xl mb-6 text-primary">
              Dear Parents, Students, and Esteemed Members of the CMR School Kompally Community,
            </p>
            <p className="mb-6 leading-relaxed">
              It is with great pleasure and a deep sense of responsibility that I extend my warm greetings to each and every one of you. As the Principal of CMR School Kompally, it is my privilege to welcome you to our vibrant and dynamic learning community.
            </p>
            <p className="mb-6 leading-relaxed">
              At CMR School Kompally, we believe in nurturing not just academic excellence but also character, values, and skills that will empower our students to excel in all facets of life. Our mission is to provide a holistic education that fosters intellectual curiosity, critical thinking, creativity, and a strong sense of social responsibility.
            </p>
            <p className="mb-6 leading-relaxed">
              As educators, we are committed to creating a safe, inclusive, and stimulating environment where every student feels valued, respected, and supported. Our dedicated team of teachers strives to inspire and motivate students to discover their passions, unlock their potential, and achieve their goals.
            </p>
            <p className="mb-6 leading-relaxed">
              We are proud to offer a diverse range of academic programs, extracurricular activities, and support services designed to meet the unique needs and interests of each student. Whether it’s through innovative teaching methods, state-of-the-art facilities, or meaningful engagement with the community, we are dedicated to providing an enriching and rewarding educational experience for all.
            </p>
            <p className="mb-6 leading-relaxed">
              As we embark on this journey together, I encourage you to actively participate in your child’s education and engage with our school community. Together, we can create a nurturing and empowering environment where every student can thrive and succeed.
            </p>
            <p className="leading-relaxed font-medium">
              I look forward to partnering with you to ensure the success and well-being of our students.
            </p>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="font-display text-2xl text-primary font-bold">Principal</p>
                <p className="text-gray-500">CMR School Kompally</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
