import React,{useState} from 'react';

const NavBar3Array = [
    { id: 0, name: 'Title', settingId: 121, value: "Every piece of Jewelry tells a story" },
    { id: 1, name: "Alignment", settingId: 122, value: "center" },
    { id: 2, name: "Font Gap Title", settingId: 123, value: "large" },
];
const NavBar3 = () => {
    const buttons = [
        { text: 'Save', class: 'border px-2 py-1 rounded-md bg-purple-600 text-white hover:bg-purple-700' }
    ];
   const icon=[{name:'TailwildFlex',herf:'https://tailwindflex.com/public/images/logo.svg'}];


   const [getlinkStyle] = useState('center');
   const getlinkStyles = (getlinkStyle) => {
     const mapping = {
       'topleft': { justifyContent: 'flex-start', alignItems: 'flex-start' },
       'topcenter': { justifyContent: 'center', alignItems: 'flex-start' },
       'topright': { justifyContent: 'flex-end', alignItems: 'flex-start' },
       'centerleft': { justifyContent: 'flex-start', alignItems: 'center' },
       'center': { justifyContent: 'center', alignItems: 'center' },
       'centerright': { justifyContent: 'flex-end', alignItems: 'center' },
       'bottomleft': { justifyContent: 'flex-start', alignItems: 'flex-end' },
       'bottomcenter': { justifyContent: 'center', alignItems: 'flex-end' },
       'bottomright': { justifyContent: 'flex-end', alignItems: 'flex-end' },
     };
     return mapping[getlinkStyle] || mapping['center'];
   };
 
   const [fontSize] = useState('small');
   const getFontSize = (fontSize) => {
     const mapping = {
       'small': { fontSize: '1rem' },
       'medium': { fontSize: '1.5rem' },
       'large': { fontSize: '2rem' },
       'Extra-large': { fontSize: '3rem' },
     };
     return mapping[fontSize] || mapping['medium'];
   }
 
   const [getdisplayhight] = useState('small');
   const GetDisplayhight = (getdisplayhight) => {
     const mapping = {
       'small': { height: '4rem' },
       'medium': { height: '6rem' },
       'large': { height: '8rem' },
       'Extra-large': { height: '10rem' },
     };
     return mapping[getdisplayhight] || mapping['medium'];
   }
 
    return (
        <div className="flex p-2 justify-between items-center border-b border-gray-300 flex-wrap" style={{...getlinkStyles(''),...GetDisplayhight('large')}}>
            {/* Logo and Title */}
            {icon.map((item)=>(
            <div className="flex items-center">
                <img src={item.herf} className="w-10 h-20" alt="Logo"  />
                <h2 className="font-bold text-2xl text-purple-600" style={{...getFontSize('')}}>{item.name}</h2>
            </div>
            ))}
            {/* Search Input */}
            <div className="relative flex items-center hidden md:inline-flex" style={{...getFontSize('small')}}>
                <input type="text" placeholder="Search" className="border border-gray-200 rounded-md py-1 px-2" style={{...getFontSize('small')}} />
                <svg className="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            {/* Buttons */}
            <div className="flex items-right" style={{...getFontSize('small')}}>
                {buttons.map((button, index) => (
                    <button key={index} className={button.class}>
                        {button.icon ? button.icon : button.text}
                    </button>
                ))}
            </div>
        </div>
    );
}

export {NavBar3,NavBar3Array};
