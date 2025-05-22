import React from 'react';
const Footer2Array = [
  {id:1, name:'heading color',settingId:122,value:'green'},
  {id:2, name:'font Size',settingId:121,value:'2rem'},
];

const Footer2 = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      {/* Top Section */}
      <div className="bg-gray-800 py-4 text-gray-400">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            {/* Logo & About */}
            <div className="px-4 my-4 w-full xl:w-1/5">
              <a href="/" className="block w-56 mb-10">
                {/* SVG Logo */}
                <svg viewBox="0 0 3368 512" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(0 -75)">
                      <g transform="translate(0 75)">
                        <rect width="512" height="512" rx="128" fill="#3D5AFE" />
                        <rect x="149" y="176" width="220" height="220" fill="#fff" />
                        <circle cx="259" cy="156" r="40" fill="#fff" />
                        <circle cx="369" cy="286" r="40" fill="#2962FF" />
                      </g>
                      <text
                        fill="white"
                        fontFamily="Nunito-Bold, Nunito"
                        fontSize="512"
                        fontWeight="bold"
                      >
                        <tspan x="654" y="518">Tailwindow</tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </a>
              <p className="text-justify">
                Tailwindow is a collection of UI Components created using Tailwind CSS Framework. The UI
                Components gives you all of the building blocks you need to build any designs without any
                annoying opinionated styles you have to fight to override.
              </p>
            </div>

            {/* Company Links */}
            <div className="px-4 my-4 w-full sm:w-auto">
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                Company
              </h2>
              <ul className="leading-8">
                {['About Us', 'Terms & Conditions', 'Privacy Policy', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog Links */}
            <div className="px-4 my-4 w-full sm:w-auto">
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                Blog
              </h2>
              <ul className="leading-8">
                {[
                  'Getting Started With HTML and CSS',
                  'What Is Flex And When to Use It?',
                  'How TailwindCSS Can Help Your Productivity?',
                  '5 Tips to Make Responsive Website',
                  'See More',
                ].map((post) => (
                  <li key={post}>
                    <a href="#" className="hover:text-blue-400">
                      {post}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                Connect With Us
              </h2>
              <div className="flex items-center space-x-1">
                {[
                  { href: '#', svgPath: 'M279.14 288l14.22-92.66...' /* Facebook path */ },
                  { href: '#', svgPath: 'M459.37 151.716c.325...' /* Twitter path */ },
                  { href: '#', svgPath: 'M224.1 141c-63.6 0...' /* Instagram path */ },
                  { href: '#', svgPath: 'M165.9 397.4c0 2...' /* YouTube path */ },
                ].map((icon, i) => (
                  <a
                    key={i}
                    href={icon.href}
                    className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d={icon.svgPath} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-indigo-700 py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              &copy; 2020{currentYear > 2020 ? `–${currentYear}` : ''} Tailwindow. All Rights Reserved.
            </div>
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Made with <span role="img" aria-label="love">❤️</span> by Tailwindow.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export {Footer2,Footer2Array};
