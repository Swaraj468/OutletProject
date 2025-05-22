
import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Card7Array = [
  { id: 0, name: 'Title', settingId: 121, value: "CXcon: Experience Transformation" },
  { id: 1, name: "Sub-Title", settingId: 121, value: "Our second CXcon in October was dedicated to experience transformation. The free one-day virtual event brought together 230+ heads of digital, thought leaders, and UX practitioners to discuss allaspects of experience design." },
  {id:2, name:'BackGround-Color',settingId:124,value:''},
   {id:3, name:'Image-1',settingId:121,value: "https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW"},

   {id:5, name:'Button',settingId:121,value:'Follow'},
   {id:6, name:'Button-link',settingId:121,value:''},
];
const Card7 = ({sectionId}) => {
    const titletext = useGetSettingByID(sectionId,0);
    const subtitletext = useGetSettingByID(sectionId,1);
     const BackGroundColor = useGetSettingByID(sectionId,2);
     const Image1=useGetSettingByID(sectionId,3);
     const Button=useGetSettingByID(sectionId,5);
     const Buttonlink=useGetSettingByID(sectionId,6);
  return (
    <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white" style={{backgroundColor:BackGroundColor}}>
      <div className="mx-auto max-w-6xl">
        <h2 className="sr-only">Featured case study</h2>
        <section className="font-sans text-black">
          <div className="lg:flex lg:items-center rounded-3xl overflow-hidden shadow-lg">
            {/* Image Section */}
            <div className="flex-shrink-0 w-full lg:w-1/2 h-80 lg:h-auto">
              <img
                src={Image1}
                alt="CXcon: Experience Transformation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 bg-gray-100 w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                {titletext}
              </h2>
              <p className="mt-4 text-gray-700">
             {subtitletext}
              </p>
              <a
                href={Buttonlink}
                className="inline-block mt-6 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-3 rounded-md transition duration-200"
              >
                {Button}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


export {Card7,Card7Array};