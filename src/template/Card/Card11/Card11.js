import React from 'react';

const Card11Array = [
  { id: 0, name: 'Title', settingId: 121, value: "" },
  { id: 1, name: "Alignment", settingId: 122, value: "center" },
  { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
  {id:3, name:'Color Picker',settingId:124,value:''},
   {id:4, name:'font Size',settingId:121,value:'2rem'},
   {id:5, name:'Image',settingId:125,value:''},
];
const ticketData = [
  {
    title: 'EARLY BIRD PASS',
    description: 'Limited time offer!',
    price: '€299',
    bgColor: 'bg-[#0147ff]',
    border: '',
    dark: false,
  },
  {
    title: 'STANDARD PASS',
    description: 'Access to all sessions & workshops',
    price: '€399',
    bgColor: 'dark:bg-[#000]',
    border: 'border dark:border-white border-black',
    dark: true,
  },
  {
    title: 'VIP EXPERIENCE',
    description: 'Includes exclusive speaker meetups & front-row seating',
    price: '€699',
    bgColor: 'dark:bg-[#000]',
    border: 'border dark:border-white border-black',
    dark: true,
  },
];

const TicketCard = ({ title, description, price, bgColor, border }) => (
  <div
    className={`flex flex-col justify-between px-6 lg:px-[35px] xl:px-[50px] py-7 lg:py-[50px] xl:py-[70px] w-full sm:w-96 h-[380px] lg:h-[450px] xl:h-[500px] rounded-[50px] ${bgColor} ${border}`}
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
        Get your ticket
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

const Card11 = () => {
  return (
    <section className="dark:bg-black py-20">
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