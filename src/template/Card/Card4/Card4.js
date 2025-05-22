import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Card4Array = [
  { id: 0, name: 'Title', settingId: 121, value: "TREE AND SHRUB PRUNING" },
  { id: 1, name: "Sub-Title", settingId: 121, value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!" },
  {id:2, name:'BackGround-Color',settingId:124,value:''},
  {id:3, name:'Image-1',settingId:121,value:'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png'},
  
];
const Card4 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
   const BackGroundColor = useGetSettingByID(sectionId,2);
   const Image1=useGetSettingByID(sectionId,3);

  const services = [
    {
      title: titletext,
      description:subtitletext,
      iconBg: 'bg-rose-500 shadow-rose-500/40',
      img: Image1,
    }
  ];

  return (
    <div className="h-full min-h-screen w-full bg-gray-800 pt-12 p-4" style={{backgroundColor:BackGroundColor}}>
      <div className="grid gap-14 md:grid-cols-3 md:gap-5">
        {services.map((service, index) => (
          <div key={index} className="rounded-xl bg-white p-14 text-center shadow-xl">
            <div className={`mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg ${service.iconBg}`}>
              <img src={service.img} alt=''/>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">{service.title}</h1>
            <p className="px-4 text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export {Card4,Card4Array};