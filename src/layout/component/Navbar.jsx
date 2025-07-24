import React, { useState } from "react";
import {
  HiBars3,
  HiXMark,
  HiChevronDown,
  HiMagnifyingGlass,
} from "react-icons/hi2";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side */}
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {sidebarOpen ? (
                <HiXMark className="block h-6 w-6" />
              ) : (
                <HiBars3 className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Right side*/}
          <div className="flex items-center space-x-4">
            {/* Profile dropdown */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://avatars.githubusercontent.com/u/58899755?v=4"
                  alt="Profile"
                />
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium text-gray-700">
                    Bilal Ashraf
                  </div>
                  <div className="text-xs text-gray-500">
                    bilalashraf6233@gmail.com
                  </div>
                </div>
                <HiChevronDown className="hidden md:block h-4 w-4 text-gray-400" />
              </button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Billing
                    </a>
                    <div className="border-t border-gray-100"></div>
                    <a
                      href="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
