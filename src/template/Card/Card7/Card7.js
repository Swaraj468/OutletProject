
import React from 'react';

const Card7Array = [
  { id: 0, name: 'Title', settingId: 121, value: "" },
  { id: 1, name: "Alignment", settingId: 122, value: "center" },
  { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
  {id:3, name:'Color Picker',settingId:124,value:''},
   {id:4, name:'font Size',settingId:121,value:'2rem'},
   {id:5, name:'Image',settingId:125,value:''},
];
const Card7 = () => {
  return (
    <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="sr-only">Featured case study</h2>
        <section className="font-sans text-black">
          <div className="lg:flex lg:items-center rounded-3xl overflow-hidden shadow-lg">
            {/* Image Section */}
            <div className="flex-shrink-0 w-full lg:w-1/2 h-80 lg:h-auto">
              <img
                src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW"
                alt="CXcon: Experience Transformation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 bg-gray-100 w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                CXcon: Experience Transformation
              </h2>
              <p className="mt-4 text-gray-700">
                Our second CXcon in October was dedicated to experience transformation. The free one-day virtual
                event brought together 230+ heads of digital, thought leaders, and UX practitioners to discuss all
                aspects of experience design.
              </p>
              <p className="mt-4 text-gray-700">
                In a jam-packed day filled with keynote sessions, panels, and virtual networking we explored topics
                including design leadership, UX ethics, designing for emotion and innovation at scale.
              </p>
              <a
                href="https://inviqa.com/cxcon-experience-transformation"
                className="inline-block mt-6 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-3 rounded-md transition duration-200"
              >
                Explore this event
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


export {Card7,Card7Array};