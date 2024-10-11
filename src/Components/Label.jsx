import React from 'react';

const Label = ({ text, htmlFor }) => {
    return <label htmlFor={htmlFor} className=" pl-[600px] block text-2xl mb-6 font-medium text-black">{text}</label>;
};

export default Label;
