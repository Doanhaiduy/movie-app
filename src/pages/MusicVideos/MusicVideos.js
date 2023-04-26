import { useEffect, useContext } from 'react';
import { MovieContext } from '~/store';

function MusicVideos() {
    const [state, dispatch] = useContext(MovieContext);
    const isDarkMode = state.isDarkMode;
    useEffect(() => {
        document.title = 'Music Videos';
    }, []);
    return (
        <div
            className={`transition-colors duration-500 w-full h-[1000px] bg-gradient-to-b ${
                isDarkMode ? 'from-gray-950 to-gray-200 text-[#fff]' : 'to-gray-950 from-gray-200 text-[#000]'
            }`}
        >
            <h2 className="text-[6rem] font-bold  flex items-center justify-center text-center">Music Videos page</h2>
            <p className="text-center font-bold  flex items-center justify-center">
                Website is under construction, this feature will be available soon...
            </p>
        </div>
    );
}

export default MusicVideos;
