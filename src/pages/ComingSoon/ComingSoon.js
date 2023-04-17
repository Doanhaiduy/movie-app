import { useEffect } from 'react';
function ComingSoon() {
    useEffect(() => {
        document.title = 'Coming Soon...';
    }, []);
    return (
        <div className=" w-full h-[1000px] bg-gradient-to-b from-[#0f0f12] to-slate-200 text-[#fff] ">
            <h2 className="text-[6rem] text-gray-300 font-bold  flex items-center justify-center text-center">
                Coming Soon
            </h2>
            <p className="font-bold  flex items-center justify-center">
                Website is under construction, this feature will be available soon...
            </p>
        </div>
    );
}

export default ComingSoon;
