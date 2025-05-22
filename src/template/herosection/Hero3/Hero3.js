import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Hero3Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Elevate Your Style with Modern Design." },
  { id: 1, name: 'Sub Title', settingId: 121, value: "Explore innovative designs crafted with precision and elegance to enhance your lifestyle." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "#f9b800" },
  { id: 3, name: 'Image', settingId: 125, value: "https://iili.io/2ysFUen.png" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Get Started" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
];

const Hero3 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Anoterlink1=useGetSettingByID(sectionId,4);
   const Button1=useGetSettingByID(sectionId,5);
  return (
    <section className="mx-auto max-w-[1440px] min-w-[280px] py-8 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="w-full rounded-[50px] sm:rounded-[60px] md:rounded-[70px] lg:rounded-[80px]  flex flex-col lg:flex-row items-center py-6 sm:py-9 md:py-11 lg:py-14 px-2 sm:px-4 md:px-8 xl:px-16" style={{backgroundColor:BackgroundColor}}>
        <img
          className="w-full lg:w-1/2 xl:w-full max-w-[550px] lg:order-2"
          src={Image}
          alt=""
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl leading-[48px] md:text-5xl md:leading-[58px] lg:text-[50px] lg:leading-[70px] font-bold mb-6 md:mb-12">
           {titletext}
          </h1>
          <p className="text-xl leading-[27px] font-normal sm:text-[24px] mb-8 md:mb-12">
           {subtitletext}
          </p>
          <button className="w-full flex items-center justify-between outline-gray-600 max-w-[350px] text-xl font-bold sm:text-lg rounded-[38px] bg-[#262626] text-white py-4 px-6 sm:px-9">
            <span><a href={Anoterlink1}>{Button1}</a></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              height="20px"
              width="20px"
              viewBox="0 0 330 330"
            >
              <path d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export {Hero3,Hero3Array};
