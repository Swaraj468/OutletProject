import React from "react";
import { useGetSettingByID } from '../../../helper/section';
const Card13Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Headless UI" },
  { id: 1, name: "Sub-Title", settingId: 121, value: "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.." },
  {id:2, name:'BackGround-Color',settingId:124,value:''},
  {id:3, name:'Image-1',settingId:125,value:'https://images.unsplash.com/photo-1549049950-48d5887197a0?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  {id:4, name:'Button',settingId:121,value:' Learn More'},
  {id:5, name:'Link',settingId:121,value:'#'},
  {id:6, name:'Heading',settingId:121,value:'Featured Resources'},
];

const Card13 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackGroundColor = useGetSettingByID(sectionId,2);
  const Image1=useGetSettingByID(sectionId,3);
  const Button=useGetSettingByID(sectionId,4);
  const Link=useGetSettingByID(sectionId,5);
  const Heading=useGetSettingByID(sectionId,6);

  const resources = [
    {
      title: titletext,
      description:subtitletext,
      image:Image1,
      color: "indigo",
      link: Link,
    }
   
  ];
  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white" style={{backgroundColor:BackGroundColor}}>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
        {Heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3
                  className={`text-xl font-semibold text-${resource.color}-500 dark:text-${resource.color}-300 mb-2`}
                >
                  {resource.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  className={`inline-block bg-${resource.color}-500 hover:bg-${resource.color}-600 text-white px-4 py-2 rounded-full`}
                >
                 {Button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export {Card13,Card13Array};
