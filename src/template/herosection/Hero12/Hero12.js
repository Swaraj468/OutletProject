import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Hero12Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Best Service Offered Here" },
  { id: 1, name: 'Sub Title', settingId: 121, value: "Introducing our latest service offering. Get started quickly and efficiently with our range of solutions. Designed to meet your needs using the latest technologies." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "" },
  { id: 3, name: 'Image', settingId: 125, value: "" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: " Browse All Examples" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
  { id: 7, name: 'Button Name-2', settingId: 121, value: "Search Examples" },
  { id: 8, name: 'Anoter Link-2', settingId: 121, value: "" },
];
const Hero12 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
   const Button2=useGetSettingByID(sectionId,6);
   const Anoterlink2=useGetSettingByID(sectionId,7);
  return (
    <div className="flex h-screen justify-center items-center dark:bg-gray-800" style={{backgroundImage:`url(${Image})`,backgroundColor:BackgroundColor}}>
      <div className="text-center max-w-6xl mx-10">
        <h1 className="my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-gray-100">
         {titletext}
        </h1>
        <div>
          <p className="max-w-2xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl dark:text-gray-400">
          {subtitletext}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
          <a
            href={Anoterlink1}
            className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400"
          >
          {Button1}
          </a>
          <a
            href={Anoterlink2}
            className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400"
          >
          {Button2}
          </a>
        </div>
      </div>
    </div>
  );
};

export {Hero12,Hero12Array};
