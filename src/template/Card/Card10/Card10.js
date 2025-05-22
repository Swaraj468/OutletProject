import React from "react";
import { useGetSettingByID } from '../../../helper/section';
const Card10Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Meet Our Talented Team" },
  { id: 1, name: "Sub-Title", settingId: 121, value: " We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients." },
  {id:2, name:'BackGround-Color',settingId:124,value:''},
  {id:3, name:'Image-1',settingId:125,value:'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'},
  {id:4, name:'Button',settingId:121,value:'Join Team'},
  {id:5, name:'Link',settingId:121,value:'#'},
  { id: 6, name: 'Name', settingId: 121, value: "Alex Morgan" },
  {id:7, name:'Card-title',settingId:121,value:'Laravel Developer'},
  { id: 8, name: 'Card-description', settingId: 121, value: "Alex Morgan" },
];
// Sample data array


const Card10 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackGroundColor = useGetSettingByID(sectionId,2);
  const Image1=useGetSettingByID(sectionId,3);
  const Button=useGetSettingByID(sectionId,4);
  const Links=useGetSettingByID(sectionId,5);
  const Name=useGetSettingByID(sectionId,6);
  const Cardtitle=useGetSettingByID(sectionId,7);
  const Carddescription=useGetSettingByID(sectionId,8);
  const teamMembers = [
    {
      name: Name,
      title: Cardtitle,
      description: Carddescription,
      img: Image1,
    }
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
  return (
    <section className="py-20 px-4 bg-white" style={{backgroundColor:BackGroundColor}}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {titletext}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
           {subtitletext}
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
              href={Links}
              className="block bg-white hover:bg-gray-50 transition-colors duration-200 rounded-lg px-8 py-4 font-medium text-indigo-600"
            >
              {Button}<span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export {Card10,Card10Array};
