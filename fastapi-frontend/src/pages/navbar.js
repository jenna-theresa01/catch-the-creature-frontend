import React, { useState } from 'react';

const Navbar = () => {
    // setting to false to make the dropdowns closed on the window loading
    const [creaturesDropdownOpen, setCreaturesDropdownOpen] = useState(false);
    const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);

    // this toggles state between true and false; achieved using the current state and negating it with '!'
    const toggleCreaturesDropdown = () => {
    setCreaturesDropdownOpen(!creaturesDropdownOpen);
    };

    const toggleCommunityDropdown = () => {
    setCommunityDropdownOpen(!communityDropdownOpen);
    };

    return (
        <nav className="bg-gray-100 p-4">
            <ul className="flex space-x-4">
                <li className={`relative group ${creaturesDropdownOpen ? 'dropdown-active' : ''}`}>
                    <a className="cursor-pointer text-gray-800 hover:text-gray-600" onClick={toggleCreaturesDropdown}>
                        Creatures
                    </a>
                    <ul className={`absolute left-0 hidden bg-white shadow-md mt-2 space-y-2 ${creaturesDropdownOpen ? 'block' : ''}`}>
                        <li>
                            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/creatures/bugs">Bugs</a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/creatures/deep-sea-creatures">Deep Sea Creatures</a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/creatures/fish">Fish</a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/creatures/tracker">Tracker</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="text-gray-800 hover:text-gray-600" href="/events">Events</a>
                </li>
                <li className={`relative group ${communityDropdownOpen ? 'dropdown-active' : ''}`}>
                    <a className="cursor-pointer text-gray-800 hover:text-gray-600" role="button" onClick={toggleCommunityDropdown}>
                        Community
                    </a>
                    <ul className={`absolute left-0 hidden bg-white shadow-md mt-2 space-y-2 ${communityDropdownOpen ? 'block' : ''}`}>
                        <li>
                            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/community/forum">Forum</a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/community/faqs">FAQs</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};
    
export default Navbar;
