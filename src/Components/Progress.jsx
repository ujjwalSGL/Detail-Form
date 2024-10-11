import React from 'react';

const Progress = ({ value, max, color, children }) => {
    const percentage = (value / max) * 100;
    
    const colorScheme = {
        red: 'bg-pink-500',
        green: 'bg-orange-500',
        blue: 'bg-lime-500',
        yellow: 'bg-purple-500',
    };



    return (
        <div className="w-full bg-gray-200 rounded-full h-4">
            <div
                className={`h-4 rounded-full ${colorScheme[color]}`} style={{ width: `${percentage}%` }}>
            </div>
        </div>
    );
};

export default Progress;
