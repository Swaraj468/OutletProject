import React from 'react';
import { useGetSettingByID } from '../../../helper/section';
const Card11Array = [
  { id: 0, name: 'Title', settingId: 121, value: "Meet Our Talented Team" },
  { id: 1, name: "Sub-Title", settingId: 121, value: " We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients." },
  {id:2, name:'BackGround-Color',settingId:124,value:''},
  {id:3, name:'Image',settingId:125,value:''},
  {id:4, name:'Button',settingId:121,value:'Join Team'},
  {id:5, name:'Link',settingId:121,value:'#'},
];

const Card11 = ({sectionId}) => {
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
  const BackGroundColor = useGetSettingByID(sectionId,2);
  const Image=useGetSettingByID(sectionId,3);
  const Button=useGetSettingByID(sectionId,4);
  const Links=useGetSettingByID(sectionId,5);

  const ticketData = [
    {
      title: titletext,
      description: subtitletext,
      border: '',
      dark: false,
    }
  ];

  const TicketCard = ({ title, description, price, border }) => (
    <div 
      className={`flex flex-col justify-between px-6 lg:px-[35px] xl:px-[50px] py-7 lg:py-[50px] xl:py-[70px] w-full sm:w-96 h-[380px] lg:h-[450px] xl:h-[500px] rounded-[50px] ${border}`}
    >
      <div>
        <h3 className="text-white dark:text-white text-2xl md:text-xl lg:text-2xl font-bold uppercase leading-loose">
          {title}
        </h3>
        <p className="text-white dark:text-white text-xl md:text-lg lg:text-xl font-normal">
          {description}
        </p>
      </div>
      <div>
        <p className="text-white dark:text-white text-5xl font-bold uppercase">{price}</p>
        <button className="flex items-center justify-center gap-5 mt-10 w-full py-3 lg:py-6 bg-[#dedee0] rounded-[100px] text-[#1c1a1a] text-2xl md:text-lg lg:text-2xl font-medium">
          <a href={Links}>{Button}</a>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.89715 1.12408C4.89715 0.503267 5.41394 0 6.05142 0H15.8457C16.4832 0 17 0.503267 17 1.12408V10.6622C17 11.283 16.4832 11.7863 15.8457 11.7863C15.2082 11.7863 14.6915 11.283 14.6915 10.6622V3.83784L1.97046 16.2261C1.51969 16.6651 0.788848 16.6651 0.338078 16.2261C-0.112693 15.7871 -0.112693 15.0754 0.338078 14.6364L13.0591 2.24816H6.05142C5.41394 2.24816 4.89715 1.74489 4.89715 1.12408Z"
              className="fill-black"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <section className="dark:bg-black py-20" style={{backgroundImage:`url('${Image}')`,backgroundColor:BackGroundColor}}>
      <h2 className="text-5xl font-bold capitalize dark:text-white mb-12 text-center md:text-left px-4">
        Ticket Options
      </h2>
      <div className="mx-auto flex flex-col md:flex-row items-center gap-5 max-w-3xl lg:max-w-5xl xl:max-w-[1240px] px-4">
        {ticketData.map((ticket, index) => (
          <TicketCard key={index} {...ticket} />
        ))}
      </div>
    </section>
  );
};

export {Card11,Card11Array};