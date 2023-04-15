import { useEffect } from 'react';
import React from 'react';

function Shows() {
    useEffect(() => {
        document.title = 'Shows';
    }, []);
    
    return (
        <div className=" w-full h-[1000px] ">
            <h2 className="text-[6rem] text-[orange] font-bold underline flex items-center justify-center">
                Shows page
            </h2>
            <p className="font-bold  flex items-center justify-center">
                Website is under construction, this feature will be available soon...
            </p>
        </div>
    );
}

export default Shows;
