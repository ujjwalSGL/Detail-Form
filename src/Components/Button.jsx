import React from 'react';

const Button = ({ label, color, onClick, type = 'button' }) => {
    const colorScheme = {
        red: 'bg-red-500 hover:bg-red-600 text-black',
        green: 'bg-green-500 hover:bg-green-600 text-white ',
        blue: 'bg-blue-500 hover:bg-blue-600 text-black',
        yellow: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    };

    return (
        <button
            type={type} 
            className={`px-4 w-32 py-2 rounded border ${colorScheme[color]} focus:outline-none`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
