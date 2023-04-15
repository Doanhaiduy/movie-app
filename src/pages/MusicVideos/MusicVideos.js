import { useEffect } from 'react';
function MusicVideos() {
    useEffect(() => {
        document.title = 'Music Videos';
    }, []);
    return (
        <div className=" w-full h-[1000px] ">
            <h2 className="text-[6rem] text-[violet] font-bold underline flex items-center justify-center text-center">
                Music Videos page
            </h2>
            <p className="font-bold  flex items-center justify-center">
                Website is under construction, this feature will be available soon...
            </p>
        </div>
    );
}

export default MusicVideos;
