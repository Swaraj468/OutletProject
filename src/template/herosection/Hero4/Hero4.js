import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Hero4Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Elevate Your Style with Modern Design." },
  { id: 1, name: 'Sub Title', settingId: 121, value: " Discover top-quality products with exclusive deals tailored just for you." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "#f9b8" },
  { id: 3, name: 'Image', settingId: 121, value: "https://iili.io/2ysFUen.png" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Shop Now" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
];
const Hero4 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 text-center" style={{backgroundColor:BackgroundColor,backgroundImage:`url('${Image}')`}}>
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-custom-radial"></div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
         {titletext}
        </h1>
        <p className="mt-4 text-lg text-gray-600">
       {subtitletext}
        </p>
        <a
          href={Anoterlink1}
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
         {Button1}
        </a>
      </div>
    </section>
  );
};

export {Hero4,Hero4Array};
