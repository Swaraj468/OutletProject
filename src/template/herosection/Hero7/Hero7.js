import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Hero7Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Navigating the digital landscape for success" },
  { id: 1, name: 'Sub Title', settingId: 121, value: " Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media  marketing, and content creation." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "#381e1e" },
  { id: 3, name: 'Image', settingId: 121, value: "https://images.unsplash.com/photo-1620914854125-67a1981aae6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Book a consultation" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
];

const Hero7 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
  return (
    <div className="dark:bg-gray-800 bg-[#F9F9F9] w-full" style={{backgroundColor:BackgroundColor}}>
      <section className="px-8 lg:px-16 py-20 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="order-2 md:order-1 max-w-[531px] flex flex-col items-center text-center md:text-left md:items-start gap-9">
          <h1 className="dark:text-white text-black text-3xl md:text-4xl lg:text-6xl font-medium">
          {titletext}
          </h1>
          <p className="dark:text-gray-400 text-black text-base md:text-lg lg:text-xl font-normal sm:leading-7">
          {subtitletext}
          </p>
          <button
            type="button"
            className="cursor-pointer px-5 py-3 md:px-7 md:py-4 lg:px-9 lg:py-5 dark:bg-[#B9FF66] bg-[#191a23] rounded-2xl dark:text-black text-white text-base md:text-lg lg:text-xl font-normal leading-7 transition-transform duration-200 hover:scale-105"
            aria-label="Book a consultation"
          ><a href={Anoterlink1}>{Button1}</a>
          </button>
        </div>
          <img src={Image} style={{borderRadius:'1rem'}} alt=''/>
      </section>
    </div>
  );
};

export {Hero7,Hero7Array};
