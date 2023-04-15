import { useEffect } from 'react';
function ComingSoon() {
    useEffect(() => {
        document.title = 'Coming Soon...';
    }, []);
    return (
        <div className=" w-full h-[1000px] ">
            <h2 className="text-[6rem] text-[orange] font-bold underline flex items-center justify-center text-center">
                Coming Soon
            </h2>
            <p className="font-bold  flex items-center justify-center">
                Website is under construction, this feature will be available soon...
            </p>
        </div>
    );
}

export default ComingSoon;
