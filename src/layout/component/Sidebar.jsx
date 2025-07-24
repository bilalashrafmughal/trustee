import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineRectangleGroup,
  HiOutlineChartBarSquare,
  HiOutlineQuestionMarkCircle,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Accounts",
      path: "/accounts",
      icon: <HiOutlineRectangleGroup className="w-5 h-5" />,
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center h-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="flex items-center space-x-3">
            <span className=" bg-opacity-20 rounded-xl p-2">
              <HiOutlineRectangleGroup className="w-8 h-8 text-white drop-shadow" />
            </span>
            <h2 className="text-md font-bold text-white tracking-wide">
              Trustee App
            </h2>
          </div>
        </div>

        <nav className="mt-8">
          <div className="px-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive(item.path)
                    ? "bg-blue-100 text-blue-700 border-r-2 border-blue-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 px-4">
            <div className="border-t border-gray-200" />
          </div>

          {/* Additional Options */}
          <div className="px-4 space-y-2">
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
              <HiOutlineQuestionMarkCircle className="w-5 h-5 mr-3" />
              Help & Support
            </button>

            <Link
              to="/login"
              className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
            >
              <HiOutlineArrowRightOnRectangle className="w-5 h-5 mr-3" />
              Logout
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
