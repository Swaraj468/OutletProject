import React from 'react';

const Card9Array = [
  { id: 0, name: 'Title', settingId: 121, value: "" },
  { id: 1, name: "Alignment", settingId: 122, value: "center" },
  { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
  {id:3, name:'Color Picker',settingId:124,value:''},
   {id:4, name:'font Size',settingId:121,value:'2rem'},
   {id:5, name:'Image',settingId:125,value:''},
];
const Card9 = () => {
  return (
    <div className="max-w-2xl mx-auto mt-24">
      <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
        {/* Image */}
        <div className="relative w-32 h-32 flex-shrink-0">
          <img
            className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
            loading="lazy"
            src="https://via.placeholder.com/150"
            alt="Post"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-2 py-2">
          <p className="text-xl font-bold">Post title</p>

          <p className="text-gray-500">
            Description of your post/article,
            <br />
            Description of your post/article,
          </p>

          <span className="flex items-center text-gray-500">
            <svg
              className="w-4 h-4 mr-1 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              />
            </svg>
            <a href="https://amitpachange.com" target="_blank" rel="noopener noreferrer">
              amitpachange.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export {Card9,Card9Array};