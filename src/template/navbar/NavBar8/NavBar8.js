import React from 'react';

const NavBar8Array = [
    { id: 0, name: 'Title', settingId: 121, value: "Every piece of Jewelry tells a story" },
    { id: 1, name: "Alignment", settingId: 122, value: "center" },
    { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
];
const NavBar8=()=> {
  return (
    <div className="grid xl:grid-cols-1 grid-cols-1">
      <div className="p-5">
        <div className="py-3 px-3 rounded-xl border w-full bg-green-900">
          <div className="flex justify-between items-center">
            {/* Left Section: Logo and Search */}
            <div className="flex items-center gap-2">
              {/* Hamburger/Menu Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
              <p className="font-semibold text-white">LOGO</p>

              {/* Search Input */}
              <div className="relative hidden lg:block md:block">
                <input
                  className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10"
                  placeholder="Search for Grocery, Stores, Vegetable, or Meat"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                  className="w-5 h-5 text-green-900 absolute right-3 top-1/2 transform -translate-y-1/2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
            </div>

            {/* Right Section: Info, Cart, Avatar */}
            <div className="flex items-center gap-2">
              {/* Lightning/Fast Delivery Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="w-5 h-5 text-yellow-300 hidden lg:block md:block">
                <path fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                  clipRule="evenodd" />
              </svg>
              <p className="text-sm text-white hidden lg:block md:block">
                Order now and get it within <span className="text-yellow-300">15 mint!</span>
              </p>

              {/* Shopping Cart Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className="w-8 h-8 text-white rounded-full ring-2 ring-white p-1 relative">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218
                  c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6
                  20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1
                  1.5 0Z" />
              </svg>

              {/* Avatar */}
              <img
                className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export {NavBar8,NavBar8Array};