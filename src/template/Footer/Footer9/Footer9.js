import React from "react";
const Footer9Array = [
  {id:1, name:'heading color',settingId:122,value:'green'},
  {id:2, name:'font Size',settingId:121,value:'2rem'},
];
const Footer9 = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        {/* Menu Section */}
        <div className="p-5 sm:w-2/12 border-r">
          <div className="text-sm uppercase text-indigo-600 font-bold">Menu</div>
          <ul>
            {["Home", "Services", "Products", "Pricing"].map((item, index) => (
              <li key={index} className="my-2">
                <a className="hover:text-indigo-600" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Section */}
        <div className="p-5 sm:w-7/12 border-r text-center">
          <h3 className="font-bold text-xl text-indigo-600 mb-4">Componentity</h3>
          <p className="text-gray-500 text-sm mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Contact Section */}
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-indigo-600 font-bold">Contact Us</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-indigo-600" href="#">
                XXX XXXX, Floor 4 San Francisco, CA
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-indigo-600" href="#">
                contact@company.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          {[
            "M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 ...", // Twitter path
            "M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 ...", // Facebook path
            "M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187 ...",       // YouTube path
            "M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 ...",           // Placeholder (e.g., Instagram)
          ].map((d, i) => (
            <a href="#" key={i} className="w-6 mx-1">
              <svg
                className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={d} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export {Footer9,Footer9Array};
