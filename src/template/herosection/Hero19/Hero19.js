import React,{useState} from 'react';
import { useGetSettingByID } from '../../../helper/section';
const HeroSection19Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Welcome to Our Awesome Website" },
  { id: 1, name: 'Sub Title', settingId: 121, value: "Discover amazing features and services that await you." },
  { id: 2, name: 'BackGround Color', settingId: 124, value: "" },
  { id: 3, name: 'Image', settingId: 125, value: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: 'Button Name-1', settingId: 121, value: "Get Started" },
  { id: 5, name: 'Anoter Link-1', settingId: 121, value: "" },
  ]
const Hero19 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackgroundColor = useGetSettingByID(sectionId,2);
   const Image = useGetSettingByID(sectionId,3);
   const Button1=useGetSettingByID(sectionId,4);
   const Anoterlink1=useGetSettingByID(sectionId,5);
  const heroData = [
    {
      title: titletext,
      description:
      subtitletext,
      backgroundImage:Image,
      buttonText: Button1,
      buttonLink: Anoterlink1,
    },
    // Add more sections here if needed
  ];

  const [alignment] = useState('center');
  const getFlexStyles = (alignment) => {
    const mapping = {
      'top': { justifyContent: 'flex-start', alignItems:'flex-start'},
      'center': { justifyContent: 'center', alignItems:'center'},
      'right': { justifyContent: 'flex-end', alignItems:'flex-end'},
    };
    return mapping[alignment] || mapping['center'];
  };

  const [items] = useState('center');
  const displayBox = (items) => {
    const mapping = {
      'topleft': { justifyContent: 'flex-start', alignItems: 'flex-start' },
      'topcenter': { justifyContent: 'center', alignItems: 'flex-start' },
      'topright': { justifyContent: 'flex-end', alignItems: 'flex-start' },
      'centerleft': { justifyContent: 'flex-start', alignItems: 'center' },
      'center': { justifyContent: 'center', alignItems: 'center' },
      'centerright': { justifyContent: 'flex-end', alignItems: 'center' },
      'bottomleft': { justifyContent: 'flex-start', alignItems: 'flex-end' },
      'bottomcenter': { justifyContent: 'center', alignItems: 'flex-end' },
      'bottomright': { justifyContent: 'flex-end', alignItems: 'flex-end' },
    };
    return mapping[items] || mapping['center'];
  };
  return (
    <div>
      {heroData.map((section, index) => (
        <div 
          key={index} style={{...getFlexStyles('center'),backgroundColor:BackgroundColor}}
          className="flex relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden" 
        >
          <div className="absolute inset-0" style={{}}>
            <img
              src={section.backgroundImage}
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center" style={{...displayBox('center')}}>
            <h1 className="text-5xl font-bold leading-tight mb-4">{section.title}</h1>
            <p className="text-lg text-gray-300 mb-8">{section.description}</p>
            <a
              href={section.buttonLink}
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              {section.buttonText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Hero19, HeroSection19Array };
