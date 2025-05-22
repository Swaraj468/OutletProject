import React from 'react';
const Footer4Array = [
  {id:1, name:'heading color',settingId:122,value:'green'},
  {id:2, name:'font Size',settingId:121,value:'2rem'},
];

const Footer4 = () => {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Company</h3>
          <p className="text-gray-500 mt-3">
            Delivering quality products with a seamless shopping experience.
          </p>
          <p className="text-gray-500 mt-2">© 2024 All rights reserved.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {['Home', 'Shop', 'About Us', 'Contact'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Customer Service</h3>
          <ul className="mt-3 space-y-2">
            {['FAQs', 'Shipping & Returns', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Stay Updated</h3>
          <p className="text-gray-500 mt-3">
            Subscribe to our newsletter for exclusive deals and updates.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-r-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8 py-4 text-center text-gray-500 text-sm">
        Made with ❤️ by Rajesh Maheshwari
      </div>
    </footer>
  );
};

export {Footer4,Footer4Array};

