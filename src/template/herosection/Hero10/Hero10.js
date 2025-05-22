import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Hero10Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Catching Life  Stories" },
  { id: 1, name: 'Sub Title', settingId: 121, value: "Professional photography services for weddings, events, portraits, and commercial shoots. Let us tell your story through our lens." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "#ffffff" },
  { id: 3, name: 'Image', settingId: 121, value: "" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Book Now" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
];

const Hero10 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
  return (
    <section className="relative text-white overflow-hidden bg-gradient-to-b from-[#121212] to-purple-800 min-h-screen flex items-center justify-center" style={{backgroundImage:`url(${Image})`,backgroundColor:BackgroundColor}}>
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
         {titletext}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg">
      {subtitletext}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center items-center mt-8" data-aos="fade-up" data-aos-delay="400">
          <a
            href="#pricing"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            <span className="absolute inset-0 rounded-full bg-purple-600 opacity-50 animate-ping" />
            <span className="relative z-10 pr-2">{Button1}</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute sm:bottom-14 bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href={Anoterlink1} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export {Hero10,Hero10Array};
