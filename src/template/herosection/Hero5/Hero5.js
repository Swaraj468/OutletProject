import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Hero5Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Crypt AI and beyond" },
  { id: 1, name: 'Sub Title', settingId: 121, value: "not your average crypto coin" },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "#f9b8" },
  { id: 3, name: 'Image', settingId: 121, value: "https://iili.io/2ysFUen.png" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Create a coin" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
  { id: 6, name: 'Button Name-2', settingId: 121, value: "Join Discord" },
  { id: 7, name: 'Anoter Link-2', settingId: 121, value: "" },
];
const Hero5 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
   const Button2=useGetSettingByID(sectionId,6);
   const Anoterlink2=useGetSettingByID(sectionId,7);
  return (
    <div className="w-full mx-auto text-center mb-10 -mt-0 -sm:mt-4 max-w-[1024px]" style={{backgroundImage:`url('${Image}')`,backgroundColor:BackgroundColor}}>
      <h1 className="semibold text-[2.6rem] leading-10 sm:text-6xl sm:leading-auto mb-6 block">
    {titletext}
      </h1>
      <h2 className="semibold text-[1.75rem] leading-9 sm:text-4xl sm:leading-auto mb-6 block">
      {subtitletext}
      </h2>
      <div className="w-screen sm:w-auto max-w-[1024px] ml-[-32px] sm:ml-0">
        <button
          type="button"
          className="inline-flex items-center shadow-sm text-sm rounded-lg text-white active:ring-2 hover:ring-2 ring-slate-100 ring-offset-2 mx-1 text-[1.1rem] sm:text-[1.5rem] font-light px-3 sm:px-6 py-3 bg-gradient-to-bl from-fuchsia-500 to-indigo-500 hover:from-fuchsia-600 hover:to-indigo-600"
        >
        <a href={Anoterlink1}>{Button1}</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
        <button
          type="button"
          className="inline-flex items-center shadow-sm text-sm rounded-lg text-white active:ring-2 hover:ring-2 ring-slate-100 ring-offset-2 mx-1 text-[1.1rem] sm:text-[1.5rem] font-light px-3 sm:px-6 py-3 bg-[#5965f3] hover:bg-[#3e4be0] sm:ml-4 mt-2"
        ><a href={Anoterlink2}>{Button2}</a>  
        </button>
      </div>
    </div>
  );
};


export {Hero5,Hero5Array};