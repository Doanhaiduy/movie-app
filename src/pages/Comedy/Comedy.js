import { useEffect } from 'react';

function Comedy() {
    useEffect(() => {
        document.title = 'Comedy';
    }, []);
    return (
        <div className=" w-full h-[1000px] ">
            <h2 className="text-[6rem] text-[red] font-bold underline flex items-center justify-center text-center">
                Comedy page
            </h2>
        </div>
    );
}

export default Comedy;
