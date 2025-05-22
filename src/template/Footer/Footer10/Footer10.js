import React from 'react';
const Footer10Array = [
  {id:1, name:'heading color',settingId:122,value:'green'},
  {id:2, name:'font Size',settingId:121,value:'2rem'},
];
const Footer10 = () => {
  return (
    <footer className="text-white px-8 py-6 bg-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Column 1 */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Example</h3>
          <p className="mb-2">Example</p>
          <p className="mb-2">123 Example Street, Example City, Example Country</p>
          <p className="mb-2">
            <a href="tel:+1514890000" className="hover:text-yellow-400">
              1-514-890-0000
            </a>
          </p>
          <p>
            <a
              href="mailto:calinscompagnies@calins.com"
              className="hover:text-yellow-400"
            >
              calinscompagnies@calins.com
            </a>
          </p>
        </div>

        {/* Column 2 */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Example</h3>
          <ul>
            {[
              'About Us',
              'Delivery Policy',
              'Contact Us',
              'Our Stores',
              'Help',
              'Work at Hugs',
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-yellow-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Example</h3>
          <ul>
            {[
              'My Personal Information',
              'My Addresses',
              'My Orders',
              'My Favorites',
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-yellow-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="mb-4">
            <li>
              <a href="tel:+1514890000" className="hover:text-yellow-400">
                1-514-890-0000
              </a>
            </li>
            <li>
              <a
                href="mailto:calinscompagnies@calins.com"
                className="hover:text-yellow-400"
              >
                Send mail
              </a>
            </li>
          </ul>
          <div className="mt-4 icons">
            <a href="#" className="mr-2">
              <i className="fab fa-facebook fa-2x" />
            </a>
            <a href="#" className="mr-2">
              <i className="fab fa-instagram fa-2x" />
            </a>
            <a href="mailto:calinscompagnies@calins.com">
              <i className="far fa-envelope fa-2x" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-8">&copy; 2024 – All rights reserved.</p>
    </footer>
  );
};

export {Footer10,Footer10Array};
