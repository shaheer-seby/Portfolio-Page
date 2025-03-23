import React, { useState } from 'react';
import { FaBars, FaTimes, FaUserAlt, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Navbar({ onScrollTo }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const scrollMap = {
    home: onScrollTo.homeRef,
    about: onScrollTo.aboutRef,
    projects: onScrollTo.projectsRef,
    contact: onScrollTo.contactRef,
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top px-3">
      <div className="container-fluid">
        <a
          className="navbar-brand fw-bold text-warning d-flex align-items-center"
          onClick={() => onScrollTo.scrollTo(onScrollTo.homeRef)}
          style={{ cursor: 'pointer' }}
        >
          <FaUserAlt className="me-2" />
          Portfolio Builder
        </a>

        <button
          className="navbar-toggler border-0 ms-2"
          type="button"
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto text-center gap-3">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <li className="nav-item" key={section}>
                <button
                  className="btn nav-link text-light fw-semibold px-3 py-2 rounded bg-transparent border-0"
                  onClick={() => {
                    onScrollTo.scrollTo(scrollMap[section]);
                    setIsOpen(false);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}

            <hr className="text-secondary my-2" />

            <li className="nav-item d-lg-none">
              <div className="d-flex flex-column gap-2 align-items-center">
                <DarkModeToggle />
                <button
                  className="btn btn-sm btn-outline-light"
                  onClick={() => navigate('/')}
                >
                  <FaArrowLeft className="me-1" />
                  Edit Info
                </button>
              </div>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-flex align-items-center gap-2">
          <DarkModeToggle />
          <button
            className="btn btn-sm btn-outline-light"
            onClick={() => navigate('/')}
            title="Back to Editor"
          >
            <FaArrowLeft className="me-1" />
            Edit Info
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
