import React, { useState } from 'react';

const NavBar10Array = [
    { id: 0, name: 'Title', settingId: 121, value: "Every piece of Jewelry tells a story" },
    { id: 1, name: "Alignment", settingId: 122, value: "center" },
    { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
];
const NavBar10=()=> {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-5 pt-5 flex justify-between md:justify-around items-center relative shadow pb-4 bg-gray-800 text-white">
      {/* Logo */}
      <img
        className="w-10"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Reddit_Logo_Icon.svg/220px-Reddit_Logo_Icon.svg.png"
        alt="Logo"
      />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden focus:outline-none text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <a className="hover:text-bluegreen hover:underline" href="/">Home</a>
        <a className="hover:text-bluegreen hover:underline" href="/services">Services</a>
        <a className="hover:text-bluegreen hover:underline" href="/project">Project</a>
        <a className="hover:text-bluegreen hover:underline" href="/about-us">About us</a>
      </div>

      {/* Desktop CTA Buttons */}
      <div className="hidden md:flex space-x-4">
        <a className="rounded-xl p-3 bg-bluegreen hover:bg-white hover:text-bluegreen" href="/started">Get Started</a>
        <a className="rounded-xl p-3 border-2 border-white hover:bg-white hover:text-black" href="/talk">Let's talk</a>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-gray-800 lg:hidden flex flex-col items-center py-5 space-y-4 transition-all duration-300">
          <a className="hover:text-bluegreen hover:underline" href="/">Home</a>
          <a className="hover:text-bluegreen hover:underline" href="/services">Services</a>
          <a className="hover:text-bluegreen hover:underline" href="/project">Project</a>
          <a className="hover:text-bluegreen hover:underline" href="/about-us">About us</a>
          <a className="rounded-xl p-3 bg-bluegreen hover:bg-white hover:text-bluegreen" href="/started">Get Started</a>
          <a className="rounded-xl p-3 border-2 border-white hover:bg-white hover:text-black" href="/talk">Let's talk</a>
        </div>
      )}
    </nav>
  );
}

export {NavBar10,NavBar10Array};