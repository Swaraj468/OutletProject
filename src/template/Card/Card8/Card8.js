import React from 'react';
const Card8Array = [
  { id: 0, name: 'Title', settingId: 121, value: "" },
  { id: 1, name: "Alignment", settingId: 122, value: "center" },
  { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
  {id:3, name:'Color Picker',settingId:124,value:''},
   {id:4, name:'font Size',settingId:121,value:'2rem'},
   {id:5, name:'Image',settingId:125,value:''},
];
const Card8 = () => {
  const features = [
    {
      title: 'Headless UI',
      description:
        'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.',
      highlight: 'Completely unstyled, fully accessible UI components',
      tag: 'Headless UI',
      tagColor: 'text-indigo-500',
      imgSrc: 'https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg',
    },
    {
      title: 'Heroicons',
      description:
        'A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and Vue libraries.',
      highlight: 'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
      tag: 'Heroicons',
      tagColor: 'text-purple-500',
      imgSrc: 'https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg',
    },
    {
      title: 'Hero Patterns',
      description:
        'A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web projects.',
      highlight: 'Seamless SVG background patterns by the makers of Tailwind CSS.',
      tag: 'Hero Patterns',
      tagColor: 'text-cyan-500',
      imgSrc: 'https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className="relative flex flex-col sm:flex-row xl:flex-col items-start"
          >
            <div className="order-1 sm:ml-6 xl:ml-0">
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span
                  className={`mb-1 block text-sm leading-6 ${feature.tagColor}`}
                >
                  {feature.tag}
                </span>
                {feature.highlight}
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>{feature.description}</p>
              </div>
              <a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="#"
              >
                Learn more
                <span className="sr-only">, {feature.highlight}</span>
                <svg
                  className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6" />
                </svg>
              </a>
            </div>
            <img
              src={feature.imgSrc}
              alt=""
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export {Card8,Card8Array};
