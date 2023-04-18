import { useEffect, useContext } from 'react';

import { MovieContext } from '~/store';
import { MovieItem } from '~/components/ListMovies';
import { deleteFavorite } from '~/store/actions';

function Favorite() {
    const [state, dispatch] = useContext(MovieContext);
    const isDarkMode = state.isDarkMode;

    const handleDeleteFavoriteMovie = (index) => {
        dispatch(deleteFavorite(index));
    };

    useEffect(() => {
        document.title = 'Favorite';
    }, []);

    return (
        <div
            className={`w-full p-[20px] bg-gradient-to-b  min-h-[100vh]
        ${isDarkMode ? 'from-gray-950 to-gray-200 text-[#fff]' : 'to-gray-950 from-gray-200 text-[#000]'}`}
        >
            <h2 className="text-[6rem] font-bold  flex items-center justify-center text-center">Favorite page</h2>
            <div>
                <p className="py-10 inline-block text-[2rem] font-semibold">Movies you've liked: </p>
                <span
                    className={`text-[2rem] px-1 ml-3 w-[50px] inline-block text-center
                ${isDarkMode ? 'text-slate-800 bg-slate-200' : 'text-slate-200 bg-slate-800'}
`}
                >
                    {state.favoriteMovies.length}
                </span>
            </div>
            <div className='grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 md:gap-x-[10px] sm:grid-cols-3 grid-cols-2  gap-[10px] mt-5"'>
                {state.favoriteMovies.map((movie, index) => (
                    <MovieItem
                        data={movie}
                        key={index}
                        index={index}
                        isFavorite
                        handleDeleteFavoriteMovie={handleDeleteFavoriteMovie}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorite;
