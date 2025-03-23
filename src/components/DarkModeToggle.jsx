import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      className="btn btn-sm btn-outline-light ms-2"
      onClick={() => setDarkMode(!darkMode)}
      title="Toggle Theme"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default DarkModeToggle;
