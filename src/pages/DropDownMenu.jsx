import React, { useState } from 'react';
import Button from '../Components/Button';

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAccountClick = () => {
    console.log('Account clicked');
  };

  const handleSupportClick = () => {
    console.log('Support clicked');
  };

  const handleLicenseClick = () => {
    console.log('License clicked');
  };

  const handleSignInClick = () => {
    console.log('Sign In clicked');
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
 🢓 
          
        </button>
      </div>
      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute right-0 rounded-md bg-white shadow-lg transition-all ring-opacity-5 focus:outline-none">
          <li className="px-4 py-2">
            <Button label="Account" onClick={handleAccountClick} />
          </li>
          <li className="px-4 py-2">
            <Button label="Support" onClick={handleSupportClick} />
          </li>
          <li className="px-4 py-2">
            <Button label="License" onClick={handleLicenseClick} />
          </li>
          <li className="px-4 py-2">
            <Button label="Sign In" onClick={handleSignInClick} />
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropDownMenu;
