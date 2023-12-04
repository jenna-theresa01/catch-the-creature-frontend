import React, { useState } from 'react';
import Logo from './logo';
import Link from 'next/link';
import Fish from '../pages/creatures/fish';
// import Title from './title';


const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
};

return (
    <li className="nav-item group relative">
        <a
            className="nav-link cursor-pointer"
            onClick={toggleDropdown}
        >
            {title}
        </a>
        <ul className={`absolute left-0 ${isOpen ? 'block' : 'hidden'} bg-white shadow-md mt-2 space-y-2`}>
            {items.map((item) => (
            <li key={item.id}>
                <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href={item.url}>
                    {item.label}
                </Link>
            </li>
            ))}
        </ul>
        </li>
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
        <div className='fixed left-0 top-0 w-full z-10'>
            {/* <Title /> */}
            <nav className="p-4 flex justify-between items-center">
                    <ul className="flex space-x-4 ml-4 items-center">
                        <Logo />
                        <Dropdown title="Creatures" items={creatureItems} />
                    <li>
                        <Link href="/events" className="text-gray-800 hover:text-gray-600" >
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link href="/tracker" className="text-gray-800 hover:text-gray-600">
                            Tracker
                        </Link>
                    </li>
                    <Dropdown title="Community" items={communityItems} />
                    </ul>
            </nav>
        </div>

    );
};
    


export default NavBar;