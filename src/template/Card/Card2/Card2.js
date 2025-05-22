import React from 'react';

const Card2Array = [
  { id: 0, name: 'Title', settingId: 121, value: "" },
  { id: 1, name: "Alignment", settingId: 122, value: "center" },
  { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
  {id:3, name:'Color Picker',settingId:124,value:''},
   {id:4, name:'font Size',settingId:121,value:'2rem'},
   {id:5, name:'Image',settingId:125,value:''},
];
const blogPosts = [
  {
    id: 1,
    title: 'Simplest Salad Recipe ever',
    image: 'https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '6 mins ago',
    comments: '39 Comments',
  },
  {
    id: 2,
    title: 'Best FastFood Ideas (Yummy)',
    image: 'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '10 days ago',
    comments: '0 Comments',
  },
  {
    id: 3,
    title: 'Why to eat salad?',
    image: 'https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '16 hours ago',
    comments: '9 Comments',
  },
];

const BlogCard = ({ title, image, description, time, comments }) => (
  <div className="rounded overflow-hidden shadow-lg flex flex-col">
    <div className="relative">
      <img className="w-full" src={image} alt={title} />
      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
      <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
        Cooking
      </div>
    </div>
    <div className="px-6 py-4 mb-auto">
      <h3 className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
        {title}
      </h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
    <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100 text-xs text-gray-900">
      <span className="flex items-center">
        <svg height="13" width="13" viewBox="0 0 512 512" className="mr-1">
          <path
            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
               c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,
               21.333-21.333h64v-128c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
          />
        </svg>
        {time}
      </span>
      <span className="flex items-center">
        <svg className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
        {comments}
      </span>
    </div>
  </div>
);

const Card2=({sectionId})=>{
  const titletext = useGetSettingByID(sectionId,0);
  const subtitletext = useGetSettingByID(sectionId,1);
   const BackGroundColor = useGetSettingByID(sectionId,2);
   const Image1=useGetSettingByID(sectionId,3);
   const Image2=useGetSettingByID(sectionId,4);
   const Button=useGetSettingByID(sectionId,5);
   const Buttonlink=useGetSettingByID(sectionId,6);
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
          <svg className="h-6 mr-3" viewBox="0 0 455.005 455.005" fill="currentColor">
            <path d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309..." />
          </svg>
          <a href="#" className="font-semibold inline-block">Cooking Blog</a>
        </div>
        <a href="#" className="text-indigo-600 hover:underline">See All</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogPosts.map(post => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export {Card2,Card2Array};