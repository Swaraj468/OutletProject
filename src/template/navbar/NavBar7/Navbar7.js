import React from 'react';

const NavBar7Array = [
    { id: 0, name: 'Title', settingId: 121, value: "Every piece of Jewelry tells a story" },
    { id: 1, name: "Alignment", settingId: 122, value: "center" },
    { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
];
const NavBar7=()=> {
  return (
    <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
      <a className="font-bold text-xl tracking-tight" href="#">
        My Site
      </a>
      <div className="flex items-center">
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="#"
        >
          Home
        </a>
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="#"
        >
          About
        </a>
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="#"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export {NavBar7,NavBar7Array};