import React, { useState } from 'react';
function Theme({ toggle, theme }) {
    return (
        <label className=" inline-flex items-center cursor-pointer relative ">
            <input type="checkbox" defaultValue className="sr-only peer" onChange={toggle} />
            <div
                className={`w-14 h-7  peer-focus:outline-none peer-focus:ring-4 
                  rounded-full peer  peer-checked:after:translate-x-full 
                  after:content-[''] after:absolute after:top-0.2 after:left-[4px] 
                 
                after:border after:rounded-full after:h-6 after:w-6 after:transition-all
            
                ${
                    theme
                        ? 'dark:peer-focus:ring-gray-500 dark:bg-gray-300 border-gray-600 after:bg-[#000] '
                        : 'bg-gray-900 peer-focus:ring-gray-500  peer-checked:after:border-white  after:border-gray-600 after:bg-white  peer-checked:bg-[#000]'
                }`}
            />
            <span
                className={`ml-[8px] lg:text-[1.8rem] sm:text-[1.4rem] sm:inline hidden font-medium ${
                    theme ? 'text-gray-300' : 'text-gray-900'
                }`}
            >
                {theme ? 'Light' : 'Dark'}
            </span>
        </label>
    );
}

export default Theme;
