import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Hero9Array = [
  { id: 0, name: 'Title', settingId: 121, value: " Winding Mountain Road" },
  { id: 1, name: 'Sub Title', settingId: 121, value: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "#ffffff" },
  { id: 3, name: 'Image', settingId: 121, value: "https://picsum.photos/id/1018/2000" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Read More" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
];

const Hero9 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl" style={{backgroundColor:BackgroundColor}}>
      {/* Image Column */}
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img
          className="h-full w-full object-cover"
          src={Image}
          alt="Winding mountain road"
        />
      </div>

      {/* Text Column */}
      <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        {/* Text Wrapper */}
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
           {titletext}
          </h2>
          <p className="mt-4">
          {subtitletext}
          </p>

          {/* Button */}
          <div className="mt-8">
            <a
              href={Anoterlink1}
              className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
            >
             {Button1}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export {Hero9,Hero9Array};
