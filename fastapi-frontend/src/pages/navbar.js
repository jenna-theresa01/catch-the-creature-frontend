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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
            <li className={`nav-item dropdown ${creaturesDropdownOpen ? 'show' : ''}`}>
                <a className="nav-link dropdown-toggle" onClick={toggleCreaturesDropdown}>Creatures</a>
                <ul className={`dropdown-menu ${creaturesDropdownOpen ? 'show' : ''}`}>
                    <li>
                        <a className="dropdown-item" href="/creatures/bugs">Bugs</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/creatures/deep-sea-creatures">Deep Sea Creatures</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/creatures/fish">Fish</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/creatures/tracker">Tracker</a>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/events">Events</a>
            </li>
            <li className={`nav-item dropdown ${communityDropdownOpen ? 'show' : ''}`}>
                <a className="nav-link dropdown-toggle" role="button" onClick={toggleCommunityDropdown} >Community</a>
                <ul className={`dropdown-menu ${communityDropdownOpen ? 'show' : ''}`}>
                    <li>
                        <a className="dropdown-item" href="/community/forum">Forum</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/community/faqs">FAQs</a>
                    </li>
                </ul>
            </li>
            </ul>
        </nav>
        );
};
    
export default Navbar;
