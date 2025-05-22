import React from "react";
const Card13Array = [
  { id: 0, name: 'Title', settingId: 121, value: "" },
  { id: 1, name: "Alignment", settingId: 122, value: "center" },
  { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
  {id:3, name:'Color Picker',settingId:124,value:''},
   {id:4, name:'font Size',settingId:121,value:'2rem'},
   {id:5, name:'Image',settingId:125,value:''},
];
const resources = [
  {
    title: "Headless UI",
    description:
      "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.",
    image:
      "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
    color: "indigo",
    link: "#",
  },
  {
    title: "Heroicons",
    description:
      "A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and Vue libraries.",
    image:
      "https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg",
    color: "purple",
    link: "#",
  },
  {
    title: "Hero Patterns",
    description:
      "A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web projects.",
    image:
      "https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg",
    color: "cyan",
    link: "#",
  },
];

const Card13 = () => {
  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
          Featured Resources
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3
                  className={`text-xl font-semibold text-${resource.color}-500 dark:text-${resource.color}-300 mb-2`}
                >
                  {resource.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  className={`inline-block bg-${resource.color}-500 hover:bg-${resource.color}-600 text-white px-4 py-2 rounded-full`}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export {Card13,Card13Array};
