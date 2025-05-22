import React from 'react';

const Card3Array = [
  { id: 0, name: 'Title', settingId: 121, value: "" },
  { id: 1, name: "Alignment", settingId: 122, value: "center" },
  { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
  {id:3, name:'Color Picker',settingId:124,value:''},
   {id:4, name:'font Size',settingId:121,value:'2rem'},
   {id:5, name:'Image',settingId:125,value:''},
];
const Card3 = () => {
  const products = [
    {
      bgColor: 'bg-orange-500',
      image: 'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
      category: 'Indoor',
      name: 'Peace Lily',
      price: '$36.00',
      priceTextColor: 'text-orange-500'
    },
    {
      bgColor: 'bg-teal-500',
      image: 'https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png',
      category: 'Outdoor',
      name: 'Monstera',
      price: '$45.00',
      priceTextColor: 'text-teal-500'
    },
    {
      bgColor: 'bg-purple-500',
      image: 'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
      category: 'Outdoor',
      name: 'Oak Tree',
      price: '$68.50',
      priceTextColor: 'text-purple-500'
    },
    {
      bgColor: 'bg-purple-500',
      image: 'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
      category: 'Outdoor',
      name: 'Oak Tree',
      price: '$68.50',
      priceTextColor: 'text-purple-500'
    },
    {
      bgColor: 'bg-purple-500',
      image: 'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
      category: 'Outdoor',
      name: 'Oak Tree',
      price: '$68.50',
      priceTextColor: 'text-purple-500'
    }
  ];

  return (
    <div className="p-1 flex flex-wrap items-center justify-center">
      {products.map((product, index) => (
        <div key={index} className={`flex-shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg max-w-xs shadow-lg`}>
          <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: 'radial-gradient(black, transparent 60%)',
                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                opacity: 0.2
              }}
            ></div>
            <img className="relative w-40" src={product.image} alt={product.name} />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{product.name}</span>
              <span className={`block bg-white rounded-full ${product.priceTextColor} text-xs font-bold px-3 py-2 leading-none flex items-center`}>
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export {Card3,Card3Array};