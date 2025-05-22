import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Card1Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Sarah Smith" },
  { id: 1, name: "Sub-Title", settingId: 121, value: "Freelance Web Designer" },
  {id:2, name:'BackGround-Color',settingId:124,value:''},
   {id:3, name:'Image-1',settingId:121,value:'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'},
   {id:4, name:'Image-2',settingId:121,value:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'},
   {id:5, name:'Button',settingId:121,value:'Follow'},
   {id:6, name:'Button-link',settingId:121,value:''},
];
const Card1=({sectionId})=> {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
   const BackGroundColor = useGetSettingByID(sectionId,2);
   const Image1=useGetSettingByID(sectionId,3);
   const Image2=useGetSettingByID(sectionId,4);
   const Button=useGetSettingByID(sectionId,5);
   const Buttonlink=useGetSettingByID(sectionId,6);

  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900" style={{backgroundColor:BackGroundColor}}>
      {/* Header image */}
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src={Image1}
          alt="Mountain"
        />
      </div>

      {/* Profile image */}
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32 w-full"
          src={Image2}
          alt="Woman looking front"
        />
      </div>

      {/* User Info */}
      <div className="text-center mt-2">
        <h2 className="font-semibold">{titletext}</h2>
        <p className="text-gray-500">{subtitletext}</p>
      </div>

      {/* Follow Button */}
      <div className="p-4 border-t mx-8 mt-2">
        <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
         <a href={Buttonlink}>{Button}</a>
        </button>
      </div>
    </div>
  );
}
export {Card1,Card1Array};