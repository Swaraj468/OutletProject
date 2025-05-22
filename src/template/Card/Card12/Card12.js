import React from "react";
import { useGetSettingByID } from '../../../helper/section';
const Card12Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Professional UI/UX Design Service" },
  { id: 1, name: "Sub-Title", settingId: 121, value: "Our expert designers craft stunning user interfaces and seamless experiences tailored to your needs." },
    {id:2, name:'BackGround-Color',settingId:124,value:''},
   {id:3, name:'Image-1',settingId:125,value:"https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxwcm9kdWN0fGVufDB8MHx8fDE3MTIwNjI5MDF8MA&ixlib=rb-4.0.3&q=80&w=1080"},
   {id:4, name:'Button',settingId:121,value:'Follow'},
   {id:5, name:'Button-link',settingId:121,value:"https://amitpachange.com"},
];

const Card12 = ({sectionId}) => {
      const titletext = useGetSettingByID(sectionId,0);
      const subtitletext = useGetSettingByID(sectionId,1);
      const BackGroundColor = useGetSettingByID(sectionId,2);
       const Image1=useGetSettingByID(sectionId,3);
       const Button=useGetSettingByID(sectionId,4);
       const Buttonlink=useGetSettingByID(sectionId,5);
  const services = [
  {
    title: titletext,
    description: subtitletext,
    image: Image1,
  }
];

  return (
    <div className="flex flex-col w-fit mx-auto" >
      <div className="product-card grid grid-cols-1 md:grid-cols-2 gap-10 py-12 lg:pb-8 lg:pt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b from-${service.gradientFrom} to-${service.gradientTo} dark:from-gray-800 dark:to-gray-700 border rounded-xl w-fit mx-auto flex flex-col justify-center gap-y-4`}
          >
            <div className="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl"  style={{backgroundColor:BackGroundColor}}>
              <img
                className="rounded-[calc(20px-12px)] rounded-b-none"
                src={service.image}
                alt={service.title}
                style={{ width: "100%", height: "250px" }}
              />
              <div className="flex flex-col gap-y-2">
                <h4 className="text-2xl font-bold text-black dark:text-white lg:text-left">
                  {service.title}
                </h4>
                <p className="text-black dark:text-white text-sm lg:text-left">
                  {service.description}
                </p>
                <button className="flex items-start bg-black text-white w-fit px-5 py-1 rounded-full">
                <a href={Buttonlink}>{Button}</a>
                  
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export {Card12,Card12Array};
