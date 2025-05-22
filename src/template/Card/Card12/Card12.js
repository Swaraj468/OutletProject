import React from "react";
const Card12Array = [
  { id: 0, name: 'Title', settingId: 121, value: "" },
  { id: 1, name: "Alignment", settingId: 122, value: "center" },
  { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
  {id:3, name:'Color Picker',settingId:124,value:''},
   {id:4, name:'font Size',settingId:121,value:'2rem'},
   {id:5, name:'Image',settingId:125,value:''},
];
const services = [
  {
    title: "Professional UI/UX Design Service",
    description:
      "Our expert designers craft stunning user interfaces and seamless experiences tailored to your needs.",
    image:
      "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxwcm9kdWN0fGVufDB8MHx8fDE3MTIwNjI5MDF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    gradientFrom: "blue-400",
    gradientTo: "blue-200",
  },
  {
    title: "Innovative UI Design Solutions",
    description:
      "Transform your ideas into reality with our cutting-edge UI design solutions that captivate your audience.",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwcm9kdWN0fGVufDB8MHx8fDE3MTIwNjI5MDF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    gradientFrom: "green-400",
    gradientTo: "green-200",
  },
];

const Card12 = () => {
  return (
    <div className="flex flex-col w-fit mx-auto">
      <div className="product-card grid grid-cols-1 md:grid-cols-2 gap-10 py-12 lg:pb-8 lg:pt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b from-${service.gradientFrom} to-${service.gradientTo} dark:from-gray-800 dark:to-gray-700 border rounded-xl w-fit mx-auto flex flex-col justify-center gap-y-4`}
          >
            <div className="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
              <img
                className="rounded-[calc(20px-12px)] rounded-b-none"
                src={service.image}
                alt={service.title}
                style={{ width: "100%", height: "250px" }}
              />
              <div className="flex flex-col gap-y-2">
                <h4 className="text-2xl font-bold text-black dark:text-white lg:text-left">
                  {service.title}
                </h4>
                <p className="text-black dark:text-white text-sm lg:text-left">
                  {service.description}
                </p>
                <button className="flex items-start bg-black text-white w-fit px-5 py-1 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export {Card12,Card12Array};
