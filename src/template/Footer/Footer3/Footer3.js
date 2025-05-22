import React from 'react';
const Footer3Array = [
  {id:1, name:'heading color',settingId:122,value:'green'},
  {id:2, name:'font Size',settingId:121,value:'2rem'},
];

const Footer3 = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      {/* Navigation Links */}
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        {['Home', 'About', 'Services', 'Media', 'Gallery', 'Contact'].map((link) => (
          <a
            key={link}
            href="#"
            className="hover:text-gray-900"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center space-x-5">
        {[
          { href: 'https://facebook.com', src: 'https://img.icons8.com/fluent/30/000000/facebook-new.png', alt: 'Facebook' },
          { href: 'https://linkedin.com', src: 'https://img.icons8.com/fluent/30/000000/linkedin-2.png', alt: 'LinkedIn' },
          { href: 'https://instagram.com', src: 'https://img.icons8.com/fluent/30/000000/instagram-new.png', alt: 'Instagram' },
          { href: 'https://messenger.com', src: 'https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png', alt: 'Messenger' },
          { href: 'https://twitter.com', src: 'https://img.icons8.com/fluent/30/000000/twitter.png', alt: 'Twitter' },
        ].map((icon) => (
          <a
            key={icon.href}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icon.src} alt={icon.alt} />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-700 font-medium">
        &copy; 2022 Company Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export {Footer3,Footer3Array};
