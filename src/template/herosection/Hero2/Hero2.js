import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Hero2Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Make managing your finances easier with AI" },
  { id: 1, name: 'Sub Title', settingId: 121, value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "" },
  { id: 3, name: 'Image', settingId: 125, value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6v93uCXnFSRc57Og2PVYOSinP-OfIhyKqQQ&s" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Get Started" },
  { id: 5, name: 'Button Name-2', settingId: 121, value: "See Demo" },
  { id: 6, name: 'Anoter Link-1', settingId: 121, value: "" },
  { id: 7, name: 'Anoter Link-2', settingId: 121, value: "" },
]
const Hero2 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
   const Image = useGetSettingByID(sectionId,3);
   const Anoterlink1=useGetSettingByID(sectionId,4);
   const Anoterlink2=useGetSettingByID(sectionId,5);
   const Button1=useGetSettingByID(sectionId,4);
   const Button2=useGetSettingByID(sectionId,5);
  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10 pt-12 min-h-screen bg-white">
      {/* Left Content */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {titletext}
        </h1>
        <p className="text-gray-600 mt-4">
         {subtitletext}
        </p>
        <div className="mt-6 flex items-center space-x-4">
          <a
            href={Anoterlink1}
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
          >
          {Button1}
          </a>
          <a
            href={Anoterlink2}
            className="px-6 py-3 flex items-center border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            <span>{Button2}</span>
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative">
        {/* Background Shapes */}
        <div className="absolute w-40 h-40 bg-yellow-200 rounded-lg top-10 -left-10" />
        <div className="absolute w-20 h-20 bg-purple-300 rounded-full top-20 left-32" />
        <div className="absolute w-12 h-12 border border-gray-300 rounded-full bottom-10 left-16" />
        <div className="absolute w-10 h-10 bg-blue-200 rounded-full bottom-20 right-16" />
        {/* Image */}
        <img
          src={Image}
          alt="Finance Illustration"
          className="relative z-10 mx-auto"
        />
      </div>
    </div>
  );
};

export {Hero2,Hero2Array};
