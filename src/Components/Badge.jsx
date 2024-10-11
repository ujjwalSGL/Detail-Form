import React from 'react';

const Badge = ({ count, color, children }) => {
    const colorClasses = {
        red: 'bg-red-500 text-white hover:text-black',
        green: 'bg-green-500 text-white hover:text-black',
        blue: 'bg-blue-500 text-white hover:text-black',
        yellow: 'bg-yellow-500 text-white hover:text-black',
    };
    return (
        <span className={`relative inline-flex items-center px-2 py-1 text-sm font-semibold text-white mx-32 border-2 rounded-xl border-black ${colorClasses[color]}`}>
            {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 rounded-full px-1 text-xs">
                    {count}
                </span>
            )}
            {children}
        </span>
    );
};
export default Badge;