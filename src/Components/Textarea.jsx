import React from 'react';

const Textarea = ({ value, onChange, placeholder, rows = 4 }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className="border border-gray-300 rounded-md p-2 w-full bg-slate-200 resize-none focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 placeholder-slate-950"
        />
    );
};

export default Textarea;
