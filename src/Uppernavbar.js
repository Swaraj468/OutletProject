import React, { useState } from 'react';
import './Uppersidebar.css';

const Uppernavbar = () => {
    const [defaultMenuOpen, setDefaultMenuOpen] = useState(false);
    const [homePageMenuOpen, setHomePageMenuOpen] = useState(false);

    const [selectedDefaultOption, setSelectedDefaultOption] = useState('Default');
    const [selectedHomePageOption, setSelectedHomePageOption] = useState('Home Page');
    const [selectedDefaultImage, setSelectedDefaultImage] = useState('');
    const [selectedHomePageImage, setSelectedHomePageImage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Default options with images
    const defaultOptions = [
        { name: 'Default', image: 'upper-navbar-img/globe.png' },
        { name: 'Gulshan', image: 'path/to/gulshan.jpg' },
        { name: 'Rajesh', image: 'path/to/rajesh.jpg' }
    ];

    // Home page options with images
    const homePageOptions = [
        { name: 'Home Option 1', image: 'upper-navbar-img/home.png' },
        { name: 'Home Option 2', image: 'path/to/home2.jpg' },
        { name: 'Home Option 3', image: 'path/to/home3.jpg' }
    ];

    const toggleDefaultMenu = () => setDefaultMenuOpen(!defaultMenuOpen);
    const toggleHomePageMenu = () => setHomePageMenuOpen(!homePageMenuOpen);

    const handleSearch = (e) => setSearchQuery(e.target.value);

    const handleDefaultSelect = (option) => {
        setSelectedDefaultOption(option.name);
        setSelectedDefaultImage(option.image);
        setDefaultMenuOpen(false); // Close the dropdown after selection
    };

    const handleHomePageSelect = (option) => {
        setSelectedHomePageOption(option.name);
        setSelectedHomePageImage(option.image);
        setHomePageMenuOpen(false); // Close the dropdown after selection
    };

    const filteredHomePageOptions = homePageOptions.filter((option) =>
        option.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="navbar">
            {/* Left Section */}
            <div className="navbar-left">
                <button className="back-btn">
                    <img className="exit-img" src="upper-navbar-img/exit.png" alt="Exit" />
                    <span className="tooltip">Exit</span>
                </button>
                <span className="brand">
                    Feather
                    <span className="status">
                        <span className="status-indicator"></span> Live
                    </span>
                </span>
                <button className="back-btn">
                    <img className="exit-img" src="upper-navbar-img/dots.png" alt="Dots" />
                    <span className="tooltip">Dawn</span>
                </button>
            </div>

            {/* Center Section */}
          
          
            {/* Right Section */}
            <div className="navbar-right">
                <button className="icon-btn">
                    <i className="icon-desktop"></i>
                    <span className="tooltip">Desktop</span>
                </button>
                <button className="icon-btn">
                    <i className="icon-tablet"></i>
                    <span className="tooltip">Tablet</span>
                </button>
                <button className="icon-btn">
                    <i className="icon-refresh"></i>
                    <span className="tooltip">Refresh</span>
                </button>

            </div>
        </div>
    );
};


export default Uppernavbar;
