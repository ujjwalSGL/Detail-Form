import React from 'react';

const Toggle = ({ checked, onChange,color }) => {
   let colorScheme={
        CS1:"w-12 h-6 flex items-center bg-red-400 rounded-xl",
        CS2:"w-12 h-6 flex items-center bg-green-400 rounded-xl",
        CS3:"w-12 h-6 flex items-center bg-black rounded-xl",
        CS4:"w-12 h-6 flex items-center bg-yellow-400 rounded-xl"
    }
    return (
        <div className='mb-2'>
        <div className={`${colorScheme[color]} ${checked}`}  onClick={onChange}  >
            <div className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${checked ? 'translate-x-7' : 'translate-x-1'}`} ></div>
        </div>
        </div>
    )
};
export default Toggle;