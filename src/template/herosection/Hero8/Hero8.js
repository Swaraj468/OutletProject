import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Hero8Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Leads NexTech" },
  { id: 1, name: 'Sub Title', settingId: 121, value: "Harnessing Research for developing Sustainable, Scalable, & Impactful Solutions." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "" },
  { id: 3, name: 'Image', settingId: 121, value: "https://www.leadsnextech.com/_next/static/media/bg.153fe1e6.jpg" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Get Started" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
  { id: 6, name: 'Button Name-2', settingId: 121, value: "Documentation" },
  { id: 7, name: 'Anoter Link-2', settingId: 121, value: "" },
];
const Hero8 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
   const Button2=useGetSettingByID(sectionId,6);
   const Anoterlink2=useGetSettingByID(sectionId,7);
  return (
    <section className="relative text-white overflow-hidden" style={{backgroundColor:BackgroundColor}}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${Image}')`,
          filter: 'brightness(0.4)'
        }}
      />

      <div className="container mx-auto lg:px-12 px-5 py-24 md:py-32 relative z-10 lg:h-[90vh]">
        <div className="flex flex-col md:flex-row items-center justify-around">
          {/* Left column */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
           {titletext}            
            </h1>

            <p className="text-xl mb-5 text-gray-300">
           {subtitletext}
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px]">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg lg:blur-md blur-0 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative flex items-center justify-center gap-2">
                  <span className="text-white font-medium"><a href={Anoterlink1}>{Button1}</a></span>
                  <svg
                    className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </button>

              <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-lg text-white/70 hover:bg-white/10 hover:text-white transition-all min-w-[160px]">
               <a href={Anoterlink2}>{Button2}</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export {Hero8,Hero8Array};
