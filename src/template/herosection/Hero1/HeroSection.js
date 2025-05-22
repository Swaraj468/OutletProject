import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
import { getFlexStyles, getFontSize, Gethight, getdisplayhight } from '../HeroSectionCSSSectting';
import { useGetThemeByTag } from '../../../helper/theam';
const HeroSectionArray = [
  { id: 0, name: 'Title', settingId: 121, value: "Every piece of Jewelry tells a story" },
  { id: 1, name: 'Sub Title', settingId: 121, value: "“A gentleman knows his appearance is very important that shows his characteristic.” - Unknown" },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "" },
  { id: 3, name: 'Image', settingId: 121, value: "https://res.cloudinary.com/dkt1t22qc/image/upload/v1742496031/Prestataires_Documents/dygqcsf4puzswq30yssx.png" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Shop Now" },
  { id: 5, name: 'Button Name-2', settingId: 121, value: "Click" },
  { id: 6, name: 'Anoter Link-1', settingId: 121, value: "" },
  { id: 7, name: 'Anoter Link-2', settingId: 121, value: "" },
]

const HeroSection = ({ sectionId }) => {
  const settingData = useGetSettingByID(sectionId, 1); // Call the hook at the top level
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
   const Image = useGetSettingByID(sectionId,3);
   const Anoterlink1=useGetSettingByID(sectionId,4);
   const Anoterlink2=useGetSettingByID(sectionId,5);
   const Button1=useGetSettingByID(sectionId,4);
   const Button2=useGetSettingByID(sectionId,5);
  const Product = [
    { name: "", Paragraph: subtitletext }
  ]
  const buttons = [
    { text:Button1 , style: 'bg-white text-black',herf:Anoterlink1 },
    { text:Button2, style: 'border-2 border-white text-white',herf:Anoterlink2 }
  ];
 
  return (
    // getdisplayhight() function :- Display Hight Small,Medium,large,Extra-large
    <div className="flex flex-col h-[800px]" style={{ ...getdisplayhight(''),backgroundColor:useGetThemeByTag('background') }}>
      {/* Hero Section */}
      <div className="flex-1">
        {/* getFlexStyles() function :- Left Right Top Bottom  */}
        <div style={{ ...getFlexStyles(useGetSettingByID(sectionId, 1)),backgroundImage:`url(${Image})` }}
          className={`h-full  bg-cover bg-center bg-no-repeat flex items-center text-white pl-[137px]`}
        >

      {Product.map((item, index) => (
          <div key={index} className="flex flex-col">
              {/*[ getFontSize() function Text Font Size Change Small,medium,Large ],[ GetHight() Text Gap Size :-Small,medium,large ] */}
              <div className="text-[34px] leading-8"
                style={{ ...Gethight(settingData), ...getFontSize('large') }}>
                {titletext}
              </div>
              {/*[ getFontSize() function Text Font Size Change Small,medium,Large ],[ GetHight() Text Gap Size :-Small,medium,large ] */}
              <div className="text-[56px] font-medium mb-4"
                style={{ ...Gethight('medium'), ...getFontSize('large') }}>
                {item.nameTwo}
              </div>
              {/*[ getFontSize() function Text Font Size Change Small,medium,Large ],[ GetHight() Text Gap Size :-Small,medium,large ] */}
              <p className="w-[397px] mb-[40px]"
                style={{ ...Gethight('medium'), ...getFlexStyles('small') }}>
                {item.Paragraph}
              </p>
              {/* [GetHight() Text Gap Size :-Small,medium,large ] */}
              <div className="flex gap-[16px]" style={{ ...Gethight('medium') }}>
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`rounded-[4px] p-[12px] font-medium ${button.style}`}
                  > <a href={button.herf}>{button.text}</a>                   
                  </button>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export { HeroSection, HeroSectionArray };
