import React, { useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Food from "./Images/food.png";
import { useAuth0 } from "@auth0/auth0-react";
import NoProfile from "./Images/noProfile.png";

export default function Navbar({ mode, toggleMode }) {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="flex justify-between p-4 border-b border-[#f3f4f64d] left-0 w-full cursor-pointer"
      style={{
        backgroundColor: mode === "light" ? "#735DA5" : "#09001c",
        color: mode === "light" ? "black" : "white",
      }}
    >
      <Tooltip title="Recipe Finder">
        <Link to="/">
          <img src={Food} alt="Food" className="h-8 w-auto" />
        </Link>
      </Tooltip>
      <div className="flex items-center">
        {isAuthenticated && user && (
          <div className="relative mr-5">
            <button
              id="dropdownUserAvatarButton"
              data-dropdown-toggle="dropdownAvatar"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              type="button"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={user.picture}
                alt="user photo"
              />
            </button>

            {isOpen && (
              <div
                id="dropdownAvatar"
                className={`fixed z-10 bg-${
                  mode === "light" ? "white" : "black"
                }  text-${mode==="light"?"gray-900":"white"} divide-y divide-gray-100 rounded-lg shadow w-52 -ml-32 mt-6 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <div className="px-4 py-3 text-sm">
                  <div>{user.name}</div>
                  <div className="font-medium truncate">{user.email}</div>
                </div>
                <div className="py-2">
                  <li
                    className="block px-4 py-2 text-sm"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log out &rarr;
                  </li>
                </div>
              </div>
            )}
          </div>
        )}
        {!isAuthenticated && (
          <div className="relative mr-5">
            <button
              id="dropdownUserAvatarButton"
              data-dropdown-toggle="dropdownAvatar"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              type="button"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-10 h-10 rounded-full"
                src={NoProfile}
                alt="user photo"
              />
            </button>

            {isOpen && (
              <div
                id="dropdownAvatar"
                className="fixed z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-52 -ml-32 mt-6 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div className="py-2">
                  <li
                    className="block px-4 py-2 text-sm text-gray-900"
                    onClick={() => loginWithRedirect()}
                  >
                    Log in &rarr;
                  </li>
                </div>
              </div>
            )}
          </div>
        )}
        <Tooltip title={`${mode === "light" ? "Dark" : "Light"} Mode`}>
          <Brightness4Icon className="navItem" onClick={toggleMode} />
        </Tooltip>
      </div>
    </header>
  );
}
