import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Hero16Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Welcome to Our Site" },
  { id: 1, name: 'Sub Title', settingId: 121, value: " We offer a range of services to help you achieve your goals." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "" },
  { id: 3, name: 'Image', settingId: 121, value: "https://images.unsplash.com/photo-1542831371-29b0f74f9713" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: " Get Started" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
];
const Hero16 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
  return (
    <section className="bg-indigo-600 text-white py-20 px-4" style={{backgroundColor:BackgroundColor}}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Text Column */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold leading-tight mb-4">{titletext}</h2>
          <p className="text-xl mb-4">
          {subtitletext}
          </p>
          <button className="bg-white text-indigo-600 font-bold py-3 px-6 rounded hover:bg-indigo-600 hover:text-white">
         <a href={Anoterlink1}>{Button1}</a>
          </button>
        </div>

        {/* Image Column */}
        <div className="md:w-1/2">
          <img
            src={Image}
            alt="Hero"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export {Hero16,Hero16Array};
