import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Card8Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Completely unstyled" },
  { id: 1, name: "Sub-Title", settingId: 121, value: "accessible UI components, designed to integrate beautifully with Tailwind CSS." },
  {id:2, name:'BackGround-Color',settingId:124,value:''},
  {id:3, name:'Image-1',settingId:121,value:'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  {id:4, name:'Link',settingId:121,value:'#'},

];

const Card8 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackGroundColor = useGetSettingByID(sectionId,2);
  const Image1=useGetSettingByID(sectionId,3);
  const Link=useGetSettingByID(sectionId,4);

   const features = [
    {
      subtitle:titletext,
      description:subtitletext,
      image: Image1,
      link: Link,
    },
    {
      subtitle:titletext,
      description:subtitletext,
      image: Image1,
      link: Link,
    },
    {
      subtitle:titletext,
      description:subtitletext,
      image: Image1,
      link: Link,
    },
  ];
  
  return (
    <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8" style={{backgroundColor:BackGroundColor}}>
      {features.map((feature, index) => (
        <li
          key={index}
          className="relative flex flex-col sm:flex-row xl:flex-col items-start"
        >
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              {feature.subtitle}
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p>{feature.description}</p>
            </div>
            <a
              href={feature.link}
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
            >
              Learn more
              <span className="sr-only">, {feature.subtitle}</span>
              <svg
                className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0L3 3L0 6" />
              </svg>
            </a>
          </div>
          <img
            src={feature.image}
            alt=""
            className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
            width="1216"
            height="640"
          />
        </li>
      ))}
    </ul>
  );
};

export {Card8,Card8Array};