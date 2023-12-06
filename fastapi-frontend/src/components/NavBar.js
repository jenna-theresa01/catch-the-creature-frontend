import React, { useState } from 'react';
import Logo from './logo';
import Link from 'next/link';
// import Title from './title';


const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
};

return (
    <div className="nav-item group relative bg-animal_crossing_brown"
    onMouseEnter={toggleDropdown}
    onMouseLeave={toggleDropdown}
    >
        
        <a
            className="nav-link cursor-pointer"
        >
            {title} &#9660;
        </a>
        <ul className={`absolute left-0 ${isOpen ? 'block' : 'hidden'} bg-white shadow-md  space-y-2`}
        >
            {items.map((item) => (
            <li key={item.id}>
                <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href={item.url}>
                    {item.label}
                    
                </Link>
            </li>
            ))}
        </ul>
        
        </div>
    );
};

const NavBar = () => {
    const creatureItems = [
        { id: 1, label: 'Bugs', url: '/creatures/bugs' },
        { id: 2, label: 'Deep Sea Creatures', url: '/creatures/deep-sea-creatures' },
        { id: 3, label: 'Fish', url: '/creatures/fish' },
    ];

    const communityItems = [
        { id: 4, label: 'Forum', url: '/community/forum' },
        { id: 5, label: 'FAQs', url: '/community/faqs' },
    ];

    return (
        <div className='fixed left-0 top-0 w-full z-10 bg-animal_crossing_brown'>
            {/* <Title /> */}
            <nav className="p-4 flex justify-between items-center">
                    <ul className="flex space-x-4 ml-4 items-center">
                        <Logo />
                        <Dropdown title="Creatures" items={creatureItems} className="bg-animal_crossing_brown" svg='img/chevron-down.svg' />
                    <li>
                        <Link href="/events" className="hover:text-gray-600" >
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link href="/tracker" className="hover:text-gray-600">
                            Tracker
                        </Link>
                    </li>
                    <Dropdown title="Community" items={communityItems} className="bg-animal_crossing_brown" />
                    </ul>
                    
            </nav>
        </div>

    );
};
    


export default NavBar;