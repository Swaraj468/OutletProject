import React, { useState } from 'react';
const NavBar2Array = [
    { id: 0, name: 'Title', settingId: 121, value: ["Every piece of Jewelry tells a story"] },
];
const NavBar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '#Projects' },
    { name: 'About', href: '/' },
    { name: 'Contact Me', href: '/' },
  ];

  const [getlinkStyle] = useState('center');
  const getlinkStyles = (getlinkStyle) => {
    const mapping = {
      'topleft': { justifyContent: 'flex-start', alignItems: 'flex-start' },
      'topcenter': { justifyContent: 'center', alignItems: 'flex-start' },
      'topright': { justifyContent: 'flex-end', alignItems: 'flex-start' },
      'centerleft': { justifyContent: 'flex-start', alignItems: 'center' },
      'center': { justifyContent: 'center', alignItems: 'center' },
      'centerright': { justifyContent: 'flex-end', alignItems: 'center' },
      'bottomleft': { justifyContent: 'flex-start', alignItems: 'flex-end' },
      'bottomcenter': { justifyContent: 'center', alignItems: 'flex-end' },
      'bottomright': { justifyContent: 'flex-end', alignItems: 'flex-end' },
    };
    return mapping[getlinkStyle] || mapping['center'];
  };

  const [fontSize] = useState('small');
  const getFontSize = (fontSize) => {
    const mapping = {
      'small': { fontSize: '1rem' },
      'medium': { fontSize: '1.5rem' },
      'large': { fontSize: '2rem' },
      'Extra-large': { fontSize: '3rem' },
    };
    return mapping[fontSize] || mapping['medium'];
  }
  const [getdisplayhight] = useState('small');
  const GetDisplayhight = (getdisplayhight) => {
    const mapping = {
      'small': { height: '4rem' },
      'medium': { height: '6rem' },
      'large': { height: '8rem' },
      'Extra-large': { height: '10rem' },
    };
    return mapping[getdisplayhight] || mapping['medium'];
  }
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center" style={{...getlinkStyles(''),...GetDisplayhight('small')}}>
        <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer" style={{...getFontSize('')}}>
          Portfolio
        </div>

        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div style={{...getFontSize('small')}}
          className={`lg:flex flex-col lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`} 
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white px-4 py-2 hover:text-orange-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export {NavBar2,NavBar2Array};
