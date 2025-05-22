import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Card3Array = [
{ id: 0, name: 'Title', settingId: 121, value: "Sarah Smith" },
  { id: 1, name: "Sub-Title", settingId: 121, value: "Indoor" },
  {id:2, name:'BackGround-Color',settingId:124,value:''},
   {id:3, name:'Image-1',settingId:121,value:'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png'},
   {id:4, name:'Image-2',settingId:121,value:'https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png'},
    {id:5, name:'Image-3',settingId:121,value:'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png'},
   {id:6, name:'Button',settingId:121,value:'Follow'},
   {id:7, name:'Button-link1',settingId:121,value:''},
   {id:8, name:'Button-link2',settingId:121,value:''},
   {id:9, name:'Button-link3',settingId:121,value:''},
];
const Card3 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
   const BackGroundColor = useGetSettingByID(sectionId,2);
   const Image1=useGetSettingByID(sectionId,3);
   const Image2=useGetSettingByID(sectionId,4);
   const Image3=useGetSettingByID(sectionId,5);
   const Button=useGetSettingByID(sectionId,6);
   const Buttonlink1=useGetSettingByID(sectionId,7);
   const Buttonlink2=useGetSettingByID(sectionId,8);
   const Buttonlink3=useGetSettingByID(sectionId,9);

  const products = [
    {
      bgColor: 'bg-orange-500',
      image: Image1,
      category: subtitletext,
      name: titletext,
      price: Button,
      href: Buttonlink1,
      priceTextColor: 'text-orange-500'
    },
    {
      bgColor: 'bg-teal-500',
      image: Image2,
      category: subtitletext,
      name: titletext,
      price: Button,
      href: Buttonlink2,
      priceTextColor: 'text-teal-500'
    },
    {
      bgColor: 'bg-purple-500',
      image: Image3,
      category: subtitletext,
      name: titletext,
      price: Button,
      href: Buttonlink3,
      priceTextColor: 'text-purple-500'
    },

   
  ];

  return (
    <div className="p-1 flex flex-wrap items-center justify-center" style={{backgroundColor:BackGroundColor}}>
      
      {products.map((product, index) => (
        <div key={index} className={`flex-shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg max-w-xs shadow-lg`}>
          <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: 'radial-gradient(black, transparent 60%)',
                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                opacity: 0.2
              }}
            ></div>
            <img className="relative w-40" src={product.image} alt={product.name} />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{product.name}</span>
              <span className={`block bg-white rounded-full ${product.priceTextColor} text-xs font-bold px-3 py-2 leading-none flex items-center`}>
               <a href={product.href}>{product.price}</a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export {Card3,Card3Array};