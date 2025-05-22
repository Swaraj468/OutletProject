import React from 'react';

const Card5Array = [
  { id: 0, name: 'Title', settingId: 121, value: "" },
  { id: 1, name: "Alignment", settingId: 122, value: "center" },
  { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
  {id:3, name:'Color Picker',settingId:124,value:''},
   {id:4, name:'font Size',settingId:121,value:'2rem'},
   {id:5, name:'Image',settingId:125,value:''},
];
const Card5 = () => {
  return (
    <div className="px-2 py-20 w-full flex justify-center">
      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg overflow-hidden">
        {/* Image Side */}
        <div className="lg:w-1/2">
          <div
            className="h-80 lg:h-full bg-cover bg-center border lg:rounded-lg lg:scale-110"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')",
            }}
          />
        </div>

        {/* Content Side */}
        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 border lg:rounded-lg">
          <h2 className="text-3xl text-gray-800 font-bold leading-snug">
            Promoting Sustainable Lifestyle <span className="text-indigo-600">Choices</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base">
            The <strong>"Eco-Tracker"</strong> project aims to create a web-based platform that encourages individuals
            to adopt sustainable lifestyle choices and actively contribute to environmental conservation. The platform
            provides users with personalized tracking, education, and engagement features to empower them to make
            eco-friendly decisions in various aspects of their lives.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-gray-900 text-white px-6 py-3 font-semibold rounded-md transition hover:bg-gray-700"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export {Card5,Card5Array};