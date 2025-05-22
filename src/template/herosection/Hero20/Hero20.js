import React,{useState} from 'react';
import { useGetSettingByID } from '../../../helper/section';
const HeroSection20Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Welcome to Our Awesome Website" },
  { id: 1, name: 'Sub Title', settingId: 121, value: "Discover amazing features and services that await you." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "" },
  { id: 3, name: 'Image', settingId: 125, value: "https://dummyimage.com/720x600" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Get Started" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
  { id: 6, name: 'Button Name-2', settingId: 121, value: "Get Started" },
  { id: 7, name: 'Anoter Link-2', settingId: 121, value: "" },
  ]
const Hero20 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Images = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
   const Button2=useGetSettingByID(sectionId,6);
   const Anoterlink2=useGetSettingByID(sectionId,7);
  const buttons = [
    {
      text: Button1,
      bgClass: 'bg-indigo-500',
      hoverClass: 'hover:bg-indigo-600',
      textClass: 'text-white',
      href:Anoterlink1,
    },
    {
      text: Button2,
      bgClass: 'bg-gray-100',
      hoverClass: 'hover:bg-gray-200',
      textClass: 'text-gray-700',
      href:Anoterlink2,
    },
  ];
 const Image=[{href:Images}]
  const Paragraph=[
    {name:titletext,paragraph:subtitletext}
  ]
  const [getlinkStyle] = useState('center');
  const getlinkStyles = (getlinkStyle) => {
    const mapping = {
      'top': { justifyContent: 'flex-start',alignItems:'flex-start'},
      'center': { justifyContent: 'center', alignItems: 'center' },
      'Bottom': { justifyContent: 'flex-end', alignItems: 'flex-end' },
    };
    return mapping[getlinkStyle] || mapping['center'];
  };

  return (
    <section className="text-gray-600 body-font" style={{backgroundColor:BackgroundColor}}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" style={{...getlinkStyles('Bottom')}} >
        {Paragraph.map((item)=>(
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" stt>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
           {item.name}
          </h1>
          <p className="mb-8 leading-relaxed">
           {item.paragraph}
          </p>
          <div className="flex justify-center">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`inline-flex ${button.textClass} ${button.bgClass} border-0 py-2 px-6 focus:outline-none ${button.hoverClass} rounded text-lg`}
              > <a href={button.href}>{button.text}</a>
              </button>
            ))}
          </div>
        </div>
        ))}
        {Image.map((item)=>(
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={item.href} />
        </div>
        ))}
      </div>
    </section>
  );
};

export { Hero20, HeroSection20Array };
