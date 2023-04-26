import { useEffect, useContext, useState } from 'react';

import ListMovies from '~/components/ListMovies/';
import { MovieContext } from '~/store';

function Movies() {
    const [state, dispatch] = useContext(MovieContext);
    const [typeMovie, setTypeMovie] = useState({
        type: 'all',
        pageNumProp: 1,
    });
    const isDarkMode = state.isDarkMode;

    const handleSetType = (type, pageNumProp) => {
        setTypeMovie({
            type,
            pageNumProp,
        });
    };

    useEffect(() => {
        document.title = 'Movies';
    }, []);
    return (
        <div
            className={`transition-colors duration-500 py-[30px] min-h-[100vh] bg-gradient-to-b ${
                isDarkMode ? 'from-gray-950 to-gray-200 text-[#fff]' : 'to-gray-950 from-gray-200 text-[#000]'
            }`}
        >
            <div className="px-[20px] ">
                <nav className="list-none flex gap-[12px] p-10 w-[50%] flex-wrap">
                    <li
                        onClick={() => {
                            handleSetType('all', 4);
                        }}
                        className="p-3 select-none cursor-pointer font-medium bg-cyan-800 hover:bg-slate-800 rounded-[8px]"
                    >
                        All
                    </li>
                    <li
                        onClick={() => {
                            handleSetType('topRated');
                        }}
                        className="p-3 select-none cursor-pointer font-medium bg-cyan-800 hover:bg-slate-800 rounded-[8px]"
                    >
                        Top rated
                    </li>
                    <li
                        onClick={() => {
                            handleSetType('nowPlaying');
                        }}
                        className="p-3 select-none cursor-pointer font-medium bg-cyan-800 hover:bg-slate-800 rounded-[8px]"
                    >
                        Now playing
                    </li>
                    <li
                        onClick={() => {
                            handleSetType('trending');
                        }}
                        className="p-3 select-none cursor-pointer font-medium bg-cyan-800 hover:bg-slate-800 rounded-[8px]"
                    >
                        Trending
                    </li>
                    <li
                        onClick={() => {
                            handleSetType('upcoming');
                        }}
                        className="p-3 select-none cursor-pointer font-medium bg-cyan-800 hover:bg-slate-800 rounded-[8px]"
                    >
                        Upcoming
                    </li>
                </nav>
                <ListMovies Page={'movies'} type={typeMovie.type} pageNumProp={typeMovie.pageNumProp} />
            </div>
        </div>
    );
}

export default Movies;
