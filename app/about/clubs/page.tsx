import type { Metadata } from "next";
import { Activity, Palette, BookOpen, HeartHandshake, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Clubs & Houses - CMR School Kompally",
  description: "Explore the vibrant clubs and student houses at CMR School Kompally.",
};

const clubCategories = [
  {
    title: "Sports Clubs",
    description: "From football to basketball, cricket to badminton, our sports clubs provide a platform for students to showcase their athletic talents and learn the values of teamwork and sportsmanship.",
    icon: Activity,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Arts and Music Clubs",
    description: "If you have a flair for creativity, our arts and music clubs are the perfect place for you. Whether it’s painting, dancing, or playing a musical instrument, you’ll find a supportive community to nurture your talents.",
    icon: Palette,
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    title: "Academic Clubs",
    description: "For those who are passionate about learning, our academic clubs offer opportunities for intellectual growth and exploration. Whether it’s science, mathematics, or literature, you’ll find a club that challenges and inspires you.",
    icon: BookOpen,
    color: "text-[#F5A623]",
    bg: "bg-[#F5A623]/10"
  },
  {
    title: "Community Service Clubs",
    description: "At CMR School Kompally, we believe in the importance of giving back to the community. Our community service clubs organize various initiatives and events to make a positive impact on the world around us.",
    icon: HeartHandshake,
    color: "text-green-500",
    bg: "bg-green-50"
  }
];

const houses = [
  "INCREDIBLE",
  "PIONEER",
  "MARVELS",
  "MASTERMINDS"
];

export default function ClubsPage() {
  return (
    <div className="bg-white pb-20">
      <section className="relative flex min-h-[30vh] items-end overflow-hidden bg-primary/90">
        <div className="relative z-10 w-full px-6 py-12 lg:px-12 text-center mt-20">
          <h1 className="font-display text-4xl text-white md:text-5xl font-bold">Student Clubs & Houses</h1>
          <p className="mt-4 text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Welcome to the vibrant and exciting world of clubs at CMR School Kompally! Our clubs offer students the opportunity to explore their passions, develop new skills, and make lifelong friendships.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="font-display text-3xl font-bold text-primary mb-6">Our Club Categories</h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
                Joining a club at CMR School Kompally is a fantastic way to enrich your school experience, develop leadership skills, and make a meaningful contribution to the school community.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clubCategories.map((club, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl ${club.bg} flex items-center justify-center mb-6`}>
                <club.icon className={`w-7 h-7 ${club.color}`} />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">
                {club.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed">
                {club.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold text-primary">Students Club House</h2>
                <p className="font-body text-gray-600 mt-4 text-lg">Fostering healthy competition and camaraderie</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {houses.map((house) => (
                    <div key={house} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:border-[#F5A623] hover:shadow-md transition-all">
                        <Shield className="w-10 h-10 text-[#F5A623] mx-auto mb-4" />
                        <h4 className="font-display font-bold text-primary text-xl">{house}</h4>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
