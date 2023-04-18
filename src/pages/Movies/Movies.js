import { useEffect, useContext } from 'react';

import ListMovies from '~/components/ListMovies/';
import { MovieContext } from '~/store';

function Movies() {
    const [state, dispatch] = useContext(MovieContext);
    const isDarkMode = state.isDarkMode;

    useEffect(() => {
        document.title = 'Movies';
    }, []);
    return (
        <div
            className={`py-[30px] min-h-[100vh] bg-gradient-to-b ${
                isDarkMode ? 'from-gray-950 to-gray-200 text-[#fff]' : 'to-gray-950 from-gray-200 text-[#000]'
            }`}
        >
            <h1 className="text-5xl text-center font-bold  mt-6 ">Movies</h1>
            <div className="px-[20px]">
                <ListMovies Page={'movies'} />
            </div>
        </div>
    );
}

export default Movies;
