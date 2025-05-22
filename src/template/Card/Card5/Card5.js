import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Card5Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Choice" },
  { id: 1, name: "Sub-Title", settingId: 121, value: "   The Eco-Tracker project aims to create a web-based platform that encourages individuals to adopt sustainable lifestyle choices and actively contribute to environmental conservation. The platform provides users with personalized tracking, education, and engagement features to empower them to make eco-friendly decisions in various aspects of their lives." },
  {id:2, name:'BackGround-Color',settingId:124,value:''},
   {id:3, name:'Image-1',settingId:125,value: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"},

   {id:4, name:'Button',settingId:121,value:'Follow'},
   {id:5, name:'Button-link',settingId:121,value:''},
];
const Card5 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
   const BackGroundColor = useGetSettingByID(sectionId,2);
   const Image1=useGetSettingByID(sectionId,3);
   const Button=useGetSettingByID(sectionId,4);
   const Buttonlink=useGetSettingByID(sectionId,5);
  return (
    <div className="px-2 py-20 w-full flex justify-center" style={{backgroundColor:BackGroundColor}}>
      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg overflow-hidden">
        {/* Image Side */}
        <div className="lg:w-1/2">
          <div
            className="h-80 lg:h-full bg-cover bg-center border lg:rounded-lg lg:scale-110"
            style={{
              backgroundImage:`url('${Image1}')`,
            }}
          />
        </div>

        {/* Content Side */}
        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 border lg:rounded-lg">
          <h2 className="text-3xl text-gray-800 font-bold leading-snug">
           {titletext} 
          </h2>
          <p className="mt-4 text-gray-600 text-base">
         {subtitletext}
          </p>
          <div className="mt-8">
            <a
              href={Buttonlink}
              className="inline-block bg-gray-900 text-white px-6 py-3 font-semibold rounded-md transition hover:bg-gray-700"
            >
              {Button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export {Card5,Card5Array};