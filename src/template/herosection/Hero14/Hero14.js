import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Hero14Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Leading US-Based cycle maker New Product Launch" },
  { id: 1, name: 'Sub Title', settingId: 121, value: "Innovative technology to revolutionize industry standards, Available for pre-order now and shipping to customers in the coming months." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "" },
  { id: 3, name: 'Image', settingId: 121, value: "" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "  Pre-Book" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
];
const Hero14 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
  return (
    <div className="h-screen flex items-center bg-green-700" style={{backgroundImage:`url(${Image})`,backgroundColor:BackgroundColor}}>
      <div className="px-4 mx-auto mt-16 mb-16 max-w-7xl sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl font-title">
         {titletext}
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
           {subtitletext}
          </p>
          <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href={Anoterlink1}
                className="block shadow-lg w-full px-8 py-3 text-base font-medium text-gray-200 hover:text-gray-100 bg-gray-100/10 hover:bg-gray-200/30 hover:backdrop-blur-xl backdrop-blur-lg rounded-md md:py-4 md:text-lg md:px-10"
              >
               {Button1}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {Hero14,Hero14Array};
