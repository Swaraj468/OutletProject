import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Card2Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Simplest Salad Recipe ever" },
  { id: 1, name: "Sub-Title", settingId: 121, value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!" },
  {id:2, name:'BackGround-Color',settingId:124,value:''},
  {id:3, name:'Image-1',settingId:121,value:'https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
];

const Card2=({sectionId})=>{
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackGroundColor = useGetSettingByID(sectionId,2);
  const Image1=useGetSettingByID(sectionId,3);

   const blogPosts = [
    {
      id: 1,
      title: titletext,
      image: Image1,
      description: subtitletext,
    }
  ];
  
  const BlogCard = ({ title, image, description}) => (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      <div className="relative">
        <img className="w-full" src={image} alt={title} />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
      </div>
      <div className="px-6 py-4 mb-auto">
        <h3 className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
  return (
    <>
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16" style={{backgroundColor:BackGroundColor}}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogPosts.map(post => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
    </>
  );
}

export {Card2,Card2Array};