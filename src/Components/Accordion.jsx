import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border-b ">
      <button onClick={toggleAccordion} className="flex justify-between items-center w-full p-4 h-20 text-left focus:outline-none bg-slate-100">
        <span className="font-semibold ">{title}</span>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
