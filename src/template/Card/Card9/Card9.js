import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Card9Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Post title" },
  { id: 1, name: "Sub-Title", settingId: 121, value: "Description of your post/article." },
   {id:2, name:'Image-1',settingId:121,value:"https://plus.unsplash.com/premium_photo-1661597156656-75ba116e9e1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
   {id:3, name:'Button-link',settingId:121,value:"https://amitpachange.com"},
   {id:4, name:'BackGround-Color',settingId:124,value:""},

];
const Card9 = ({sectionId}) => {
    const titletext = useGetSettingByID(sectionId,0);
    const subtitletext = useGetSettingByID(sectionId,1);
     const Image1=useGetSettingByID(sectionId,2);
     const Buttonlink=useGetSettingByID(sectionId,3);
     const color=useGetSettingByID(sectionId,4);

  return (
    <div className="max-w-2xl mx-auto mt-24">
      <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start" style={{backgroundColor:color}}>
        {/* Image */}
        <div className="relative w-32 h-32 flex-shrink-0">
          <img
            className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
            loading="lazy"
            src={Image1}
            alt="Post"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-2 py-2">
          <p className="text-xl font-bold">{titletext}</p>

          <p className="text-gray-500">
            {subtitletext}
          </p>

          <span className="flex items-center text-gray-500">
            <svg
              className="w-4 h-4 mr-1 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              />
            </svg>
            <a href= {Buttonlink} target="_blank" rel="noopener noreferrer">
              amitpachange.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export {Card9,Card9Array};