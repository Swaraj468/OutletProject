import React,{useState} from 'react';
import { useGetSettingByID } from '../../../helper/section';
const HeroSection18Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Start creating AI Arts today" },
  { id: 1, name: 'Sub Title', settingId: 121, value: " example is the AI Content Generator that helps you and your team break through creative blocks to create amazing, original content 10X faster." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "" },
  { id: 3, name: 'Image', settingId: 125, value: "https://images.unsplash.com/photo-1542831371-29b0f74f9713" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Get started for free 🚀" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
  ]
const Hero18 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
  // Array to store the name sections you want to map

  const Descrption=[
    {Paragraph:subtitletext}
  ]
 const button=[
    {name:Button1,href:Anoterlink1}
 ]
 const [getlinkStyle] = useState('center');
 const getlinkStyles = (getlinkStyle) => {
   const mapping = {
     'top': { justifyContent: 'flex-start', alignItems: 'flex-start' },
     'center': { justifyContent: 'center', alignItems: 'center' },
     'bottom': { justifyContent: 'flex-end', alignItems: 'flex-end' },
   };
   return mapping[getlinkStyle] || mapping['center'];
 };

 const [fontSize] = useState('small');
  const getFontSize = (fontSize) => {
    const mapping = {
      'small': { fontSize: '1rem' },
      'medium': { fontSize: '1.5rem' },
      'large': { fontSize: '2rem' },
      'Extra-large': { fontSize: '3rem' },
    };
    return mapping[fontSize] || mapping['medium'];
  }

  return (
    <div className="flex h-screen justify-center items-center dark:bg-slate-800"  style={{...getlinkStyles('top'),backgroundImage:`url(${Image})`,backgroundColor:BackgroundColor}}>
      <div className="mx-auto mt-10 flex justify-center  px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl" style={{...getFontSize('')}}>
           {titletext}
          </h1>
          {Descrption.map((item)=>(
          <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500 dark:text-slate-400 sm:mt-5 md:mt-5" style={{...getFontSize('small')}}>
          {item.Paragraph}
          </p>
           ))}
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center" style={{...getlinkStyles('bottom')}}>
            {button.map((item)=>(
            <div className="rounded-md shadow">
              <a  style={{...getFontSize('small')}}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                href={item.href}
              >
               {item.name}
              </a>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero18, HeroSection18Array };
