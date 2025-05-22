import React from "react";
const Card10Array = [
  { id: 0, name: 'Title', settingId: 121, value: "" },
  { id: 1, name: "Alignment", settingId: 122, value: "center" },
  { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
  {id:3, name:'Color Picker',settingId:124,value:''},
   {id:4, name:'font Size',settingId:121,value:'2rem'},
   {id:5, name:'Image',settingId:125,value:''},
];
// Sample data array
const teamMembers = [
  {
    name: "Alex Morgan",
    title: "CEO & Founder",
    description: "Visionary leader with 15+ years of experience in tech innovation.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sarah Johnson",
    title: "Chief Design Officer",
    description: "Award-winning designer with a passion for creating beautiful, functional interfaces.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Michael Chen",
    title: "CTO",
    description: "Tech genius with expertise in AI and machine learning technologies.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Director",
    description: "Creative strategist who excels at building and promoting brands.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "David Wilson",
    title: "Lead Developer",
    description: "Full-stack developer with a knack for solving complex problems.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sophia Lee",
    title: "UX Researcher",
    description: "Human-centered designer focused on creating intuitive user experiences.",
    img: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "James Taylor",
    title: "Product Manager",
    description: "Strategic thinker who bridges the gap between business and technology.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Olivia Martinez",
    title: "Customer Success",
    description: "Dedicated to ensuring our clients achieve their goals and succeed.",
    img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

const TeamMemberCard = ({ name, title, description, img }) => (
  <div className="group">
    <div className="relative overflow-hidden rounded-xl mb-4">
      <img
        src={img}
        alt={name}
        className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
      />
      {/* Removed icons container */}
    </div>
    <div className="text-center">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-indigo-600 font-medium">{title}</p>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

const Card10 = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Talented Team
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(0, 4).map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teamMembers.slice(4).map((member, index) => (
            <TeamMemberCard key={index + 4} {...member} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 p-px rounded-lg">
            <a
              href="#"
              className="block bg-white hover:bg-gray-50 transition-colors duration-200 rounded-lg px-8 py-4 font-medium text-indigo-600"
            >
              Join Our Team <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export {Card10,Card10Array};
