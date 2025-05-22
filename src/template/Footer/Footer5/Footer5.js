import React from 'react';
const Footer5Array = [
  {id:1, name:'heading color',settingId:122,value:'green'},
  {id:2, name:'font Size',settingId:121,value:'2rem'},
];
const Footer5 = () => {
  return (
    <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-blue-600 text-white">
      <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
          Ready to get your productivity back?<br />
          Start your free trial today.
        </h2>
        <a
          href="#"
          className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-blue-800 rounded-full shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
        >
          Get started
        </a>
        <div className="mt-14 xl:mt-20">
          <nav className="flex flex-wrap justify-center text-lg font-medium">
            {['Contact', 'Pricing', 'Privacy', 'Terms', 'Twitter'].map((item) => (
              <div key={item} className="px-5 py-2">
                <a href="#">{item}</a>
              </div>
            ))}
          </nav>
          <p className="mt-7 text-base">© 2023 XYZ, LLC</p>
        </div>
      </div>
    </footer>
  );
};

export {Footer5,Footer5Array};
