import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Hero13Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Best Service Offered Here" },
  { id: 1, name: 'Sub Title', settingId: 121, value: "Introducing our latest service offering. Get started quickly and efficiently with our range of solutions. Designed to meet your needs using the latest technologies." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "" },
  { id: 3, name: 'Image', settingId: 125, value: "https://images.unsplash.com/photo-1543949648-5456dc883a25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Getting started" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
  { id: 7, name: 'Button Name-2', settingId: 121, value: " Contribute" },
  { id: 8, name: 'Anoter Link-2', settingId: 121, value: "" },
];
const Hero13 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
   const Button2=useGetSettingByID(sectionId,6);
   const Anoterlink2=useGetSettingByID(sectionId,7);
  return (
    <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8" style={{backgroundColor:BackgroundColor}}>
      {/* Text Column */}
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
          {titletext}
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
         {subtitletext}
          </p>
          <div className="mt-5 sm:flex md:mt-8">
            <div className="rounded-md shadow">
              <a
                href={Anoterlink1}
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
              {Button1}
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href={Anoterlink2}
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
               {Button2}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded md:p-8">
          <div className="rounded-lg bg-white text-black w-full">
            <img
              src={Image}
              alt="Illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export {Hero13,Hero13Array};
