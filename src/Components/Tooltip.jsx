import React from 'react';

const Tooltip = ({ text, children, position }) => {

  const TooltipPosition={ 
    top: "absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full mb-1",
    bottom: "absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 top-full mt-1",
    left: "absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 right-full mr-1",
    right: "absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 left-full ml-1",

    }

    return (
        <div className="relative group ml-48">
            {children}

            <div className={`${TooltipPosition[position]}`}>
                {text}
            </div>
        </div>
    );
};

export default Tooltip;