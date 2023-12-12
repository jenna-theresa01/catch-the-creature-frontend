import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import Logo from "./logo";
import Link from "next/link";
// import Title from './title';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="nav-item group relative bg-animal_crossing_green"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <a className="nav-link cursor-pointer flex items-center">
        <span>{title}</span>
        <svg
          className={`transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="20"
          height="20"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
      <ul
        className={`absolute left-0 ${
          isOpen ? "block" : "hidden"
        } bg-animal_crossing_tan shadow-lg  space-y-2`}
      >
        {items.map((item) => (
          <li key={item.id}>
            <Link
              className="block px-4 py-2 hover:bg-animal_crossing_brown"
              href={item.url}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NavBar = () => {
  const { state, dispatch } = useGlobalState();
  const [isMobile, setIsMobile] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    authService.logout();
    dispatch({ type: "LOGOUT_USER" });
    router.push("/");
  };

  const creatureItems = [
    { id: 1, label: "Bugs", url: "/creatures/bugs" },
    {
      id: 2,
      label: "Deep Sea Creatures",
      url: "/creatures/deep-sea-creatures",
    },
    { id: 3, label: "Fish", url: "/creatures/fish" },
  ];

  const communityItems = [
    { id: 4, label: "Forum", url: "/community/forum" },
    { id: 5, label: "FAQs", url: "/community/faqs" },
  ];

  // check if the screen width is less then 768px (might need to adjust)
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleResize = () => {
      checkIsMobile();
      if (!isMobile) {
        setIsOpen(false); // Close the menu when transitioning from mobile to desktop
      }
    };

    checkIsMobile();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // add event listener to check for screen width changes
  // and update isMobile state accordingly
  // useEffect(() => {
  //   checkIsMobile();
  //   window.addEventListener("resize", checkIsMobile);
  //   return () => {
  //     window.removeEventListener("resize", checkIsMobile);
  //   };
  // }, []);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  //   // Add event listener to the document body
  //   useEffect(() => {
  //     const handleOutsideClick = (event) => {
  //       // Check if the clicked element is not part of the NavBar
  //       const mobileMenu = document.getElementById("mobile-menu");
  //       if (isMobile && isOpen && mobileMenu && !mobileMenu.contains(event.target)) {
  //         closeMobileMenu();
  //       }
  //     };

  //     // Add the event listener
  //     document.body.addEventListener("click", handleOutsideClick);

  //     // Remove the event listener when the component is unmounted
  //     return () => {
  //       document.body.removeEventListener("click", handleOutsideClick);
  //     };
  //   }, [isOpen, isMobile]);

  return (
    <div className="fixed left-0 top-0 w-full z-10 bg-animal_crossing_sea border-4 border-animal_crossing_sky">
      {/* <Title /> */}
      <nav className="p-4 flex justify-between items-center">
        {isMobile ? (
          // render hamburger icon for mobile
          <div>
            <svg
              className={`transition-transform transform ${
                isMobile ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="20"
              height="20"
              onClick={toggleMobileMenu}
            >
              <line x1="3" y1="3" x2="21" y2="3"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <line x1="3" y1="17" x2="21" y2="17"></line>
            </svg>
          </div>
        ) : (
          <ul className="flex space-x-4 ml-4 items-center">
            <Logo />
            <Dropdown
              title="Creatures"
              items={creatureItems}
              className="bg-animal_crossing_green"
              svg="img/chevron-down.svg"
            />
            <li>
              <Link href="/events" className="hover:text-animal_crossing_tan">
                Events
              </Link>
            </li>
            <li>
              <Link href="/tracker" className="hover:text-animal_crossing_tan">
                Tracker
              </Link>
            </li>
            <Dropdown
              title="Community"
              items={communityItems}
              className="bg-animal_crossing_green"
            />
          </ul>
        )}
        {state.user ? (
          <li className="nav-item">
            <Link href="/" className={styles.logout} onClick={handleLogout}>
              Logout
            </Link>
          </li>
        ) : (
          <button className="nav-item bg-animal_crossing_brown hover:bg-animal_crossing_tan font-bold py-2 px-4 rounded-lg shadow-lg">
            <Link href="/login">Login / Sign Up</Link>
          </button>
        )}
        {/* Mobile menu content */}
        {isOpen && isMobile && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75">
            <div className="flex justify-end p-4">
              <button onClick={closeMobileMenu} className="text-white">
                ✕
              </button>
            </div>
            <div className="flex flex-col items-center text-white">
              <Link href="/">Home</Link>
              <Link href="/creatures/bugs">Bugs</Link>
              <Link href="/creatures/deep-sea-creatures">
                Deep Sea Creatures
              </Link>
              <Link href="/creatures/fish">Fish</Link>
              <Link href="/events">Events</Link>
              <Link href="/tracker">Tracker</Link>
              <Link href="/community/forum">Forum</Link>
              <Link href="/community/faqs">FAQs</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
