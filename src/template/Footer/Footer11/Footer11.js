import React from 'react';
const Footer11Array = [
  {id:1, name:'heading color',settingId:122,value:'green'},
  {id:2, name:'font Size',settingId:121,value:'2rem'},
];
const Footer11 = () => (
  <footer className="w-full py-14">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* CTA & Subscribe */}
      <div className="border-b border-gray-200 pb-14 flex justify-between items-center flex-col gap-8 lg:gap-0 lg:flex-row">
        <div className="block">
          <h3 className="font-manrope text-3xl text-gray-900 font-bold mb-2 text-center lg:text-left">
            Sign up to our webpage
          </h3>
          <p className="text-gray-500 text-center lg:text-left">
            Stay up to date with the latest update and announcement.
          </p>
        </div>
        <div className="flex items-center flex-col gap-4 lg:flex-row">
          <input
            type="text"
            name="email"
            className="py-3 px-6 h-14 border border-gray-300 shadow-sm rounded-full focus:outline-none"
            placeholder="Enter your mail.."
          />
          <button className="h-14 py-3.5 px-7 bg-indigo-600 shadow-sm rounded-full text-white font-bold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Logo & Trusted blurb */}
      <div className="grid grid-cols-2 min-[690px]:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-8 pt-14 pb-10 max-w-xs mx-auto min-[690px]:max-w-2xl lg:max-w-full">
        <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
          <a
            href="https://pagedone.io/"
            className="flex justify-center lg:justify-start"
          >
            {/* SVG logo here... */}
            <svg
              className="w-40 h-8"
              viewBox="0 0 164 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ...SVG paths omitted for brevity */}
            </svg>
          </a>
          <p className="py-8 text-gray-500 lg:max-w-xs text-center lg:text-left">
            Trusted in more than 100 countries &amp; 5 million customers. Have any
            query ?
          </p>
          <a
            href="#"
            className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
          >
            Contact us
          </a>
        </div>

        {/* Navigation columns */}
        {[
          {
            title: 'Pagedone',
            items: ['Home', 'About', 'Pricing', 'Features', 'Pro Version'],
          },
          {
            title: 'Products',
            items: [
              'Figma UI System',
              'Icons Assets',
              'Responsive Blocks',
              'Components Library',
              'Plugin Guide',
            ],
          },
          {
            title: 'Resources',
            items: [
              'FAQs',
              'Quick Start',
              'Documentation',
              'User Guide',
              'Plugin Guide',
            ],
          },
          {
            title: 'Support',
            items: [
              'Customer Support',
              'Cookies',
              'License',
              'Terms & Conditions',
              'Privacy Policy',
            ],
          },
        ].map(({ title, items }) => (
          <div key={title} className="lg:mx-auto text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">{title}</h4>
            <ul className="text-sm transition-all duration-500">
              {items.map((item) => (
                <li key={item} className="mb-6">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="py-7 border-t border-gray-200">
        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
          <span className="text-sm text-gray-500">
            © <a href="https://pagedone.io/">pagedone</a> 2024, All rights
            reserved.
          </span>
          <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
            {[
              {
                href: '#',
                bg: 'bg-[#33CCFF]',
                svg: (
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Path... */}
                  </svg>
                ),
              },
              {
                href: '#',
                bg:
                  'bg-[linear-gradient(45deg,#FEE411_6.9%,#FEDB16_10.98%,#FEC125_17.77%,#FE983D_26.42%,#FE5F5E_36.5%,#FE2181_46.24%,#9000DC_85.57%)]',
                svg: (
                  <svg
                    className="w-[1.25rem] h-[1.125rem] text-white"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Path... */}
                  </svg>
                ),
              },
              {
                href: '#',
                bg: 'bg-[#337FFF]',
                svg: (
                  <svg
                    className="w-[1rem] h-[1rem] text-white"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Path... */}
                  </svg>
                ),
              },
              {
                href: '#',
                bg: 'bg-[#FF0000]',
                svg: (
                  <svg
                    className="w-[1.25rem] h-[0.875rem] text-white"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Path... */}
                  </svg>
                ),
              },
            ].map(({ href, bg, svg }, idx) => (
              <a
                key={idx}
                href={href}
                className={`relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center ${bg} hover:bg-gray-900`}
              >
                {svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export {Footer11,Footer11Array};
