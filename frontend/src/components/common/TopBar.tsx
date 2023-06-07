import React, { useState } from "react";
import { FiPhone, FiChevronDown } from "react-icons/fi";

function TopBar() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="h-[30px] bg-green-900 flex justify-between text-white">
      <span className="px-4 flex items-center">
        <FiPhone className="mr-2" />
        <span className="text-white">9860409629</span>
      </span>
      <span className="px-4">Get 50% Off On Selected Products</span>
      <span className="px-4 relative">
        <button
          className="flex items-center focus:outline-none"
          onClick={toggleDropdown}
        >
          <FiChevronDown className="ml-2 text-white" />
          <span className="px-2">{selectedLanguage}</span>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white rounded shadow-md">
            <ul className="py-2 px-4">
              {selectedLanguage === "English" && (
                <li
                  className="cursor-pointer text-black"
                  onClick={() => handleLanguageChange("Nepali")}
                >
                  Nepali
                </li>
              )}
              {selectedLanguage === "Nepali" && (
                <li
                  className="cursor-pointer text-black"
                  onClick={() => handleLanguageChange("English")}
                >
                  English
                </li>
              )}
            </ul>
          </div>
        )}
      </span>
    </div>
  );
}

export default TopBar;
