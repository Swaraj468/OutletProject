import React,{useState} from 'react';
import { useGetSettingByID } from '../../../helper/section';
const HeroSection17Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Start creating AI Arts today" },
  { id: 1, name: 'Sub Title', settingId: 121, value: " Automate your workflow with our state of the art tools. Let Your Imagination Run Wild." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "" },
  { id: 3, name: 'Image', settingId: 121, value: "https://images.unsplash.com/photo-1542831371-29b0f74f9713" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Get Started Now" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
  ];


const Hero17 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);

   const sectionData = [
    {
      id: 1,
      title: titletext,
      description: subtitletext,
      buttonText: Button1,
      buttonLink: Anoterlink1,
      buttonStyles: 'bg-black text-white dark:bg-white dark:text-black',
    },
  ];
const [alignment] = useState('center');
const getFlexStyles = (alignment) => {
  const mapping = {
    'left': { justifyContent: 'flex-start', alignItems: 'flex-start' },
    'center': { justifyContent: 'center', alignItems: 'center' },
    'right': { justifyContent: 'flex-end', alignItems: 'flex-end' },
  };
  return mapping[alignment] || mapping['center'];
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
const [gethight] = useState('small');
  const Gethight = (gethight) => {
    const mapping = {
      'small': { height: '1rem' },
      'medium': { height: '2rem' },
      'large': { height: '3rem' },
      'Extra-large': { height: '4rem' },
    };
    return mapping[gethight] || mapping['medium'];
  }
 
  const [getText]=useState('center');
   const getTextAlign=(getText)=>{
    const mapping={
        'left':{textAlign:'start'},
        'center':{textAlign:'center'},
        'right':{textAlign:'end'},
    }
    return mapping[getText] || mapping['center'];
   }
  return (
    <div>
      {sectionData.map((section) => (
        <div key={section.id} className="bg-slate-50 flex dark:bg-gray-800 border-b my-20" style={{...getFlexStyles(''),backgroundImage:`url(${Image})`,backgroundColor:BackgroundColor}}>
          <div className="py-8 px-6 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-2xl text-center" >
              <h2 style={{...Gethight(''),...getTextAlign('left')}} className="text-center  text-2xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
                {section.title}
              </h2>
              <p style={{...getTextAlign('left')}}  className="mx-auto mt-3 sm:mt-6 max-w-xl text-md sm:text-lg sm:leading-snug text-gray-600 dark:text-gray-300">
                {section.description}
              </p>
              <div style={{...getFlexStyles('center')}} className="mt-6 sm:mt-10 flex items-center justify-center gap-x-6">
                <a 
                  className={`flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base py-1.5 h-[38px] text-sm py-6 px-8 ${section.buttonStyles}`}
                  href={section.buttonLink}
                >
                  {section.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Hero17, HeroSection17Array };
