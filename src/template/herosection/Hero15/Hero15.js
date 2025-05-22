import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Hero15Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Leading US-Based cycle maker New Product Launch" },
  { id: 1, name: 'Sub Title', settingId: 121, value: "Innovative technology to revolutionize industry standards, Available for pre-order now and shipping to customers in the coming months." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "" },
  { id: 3, name: 'Image', settingId: 125, value: "https://demo.themesberg.com/landwind/images/hero.png" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Pre-Book" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
  { id: 6, name: 'Button Name-2', settingId: 121, value: "Get Figma file " },
  { id: 7, name: 'Anoter Link-2', settingId: 121, value: "" },
];

const Hero15 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
   const Button2=useGetSettingByID(sectionId,6);
   const Anoterlink2=useGetSettingByID(sectionId,7);
  return (
    <section className="bg-white dark:bg-gray-900" style={{backgroundColor:BackgroundColor}}>
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        {/* Text Column */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            {titletext}
          </h1>

          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
           {subtitletext} </p>

          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href={Anoterlink1}
              target="_blank"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >{Button1}</a>

            <a
              href={Anoterlink2}
              target="_blank"
              className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >{Button2} </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={Image}
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
};

export {Hero15,Hero15Array};
