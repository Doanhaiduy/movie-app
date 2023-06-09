import { useEffect, useContext, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { MovieContext } from '~/store';
import { MovieItem } from '~/components/ListMovies';
import { deleteFavorite } from '~/store/actions';
import { SkeletonCard } from '~/components/LoadingSkeleton';

function Favorite() {
    const [state, dispatch] = useContext(MovieContext);
    const [isLoading, setIsLoading] = useState(true);
    
    const isDarkMode = state.isDarkMode;
    
    const handleDeleteFavoriteMovie = (index) => {
        dispatch(deleteFavorite(index));
    };

    useEffect(() => {
        document.title = 'Favorite';
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <div
            className={`transition-colors duration-500 w-full p-[20px] bg-gradient-to-b  min-h-[100vh]
        ${isDarkMode ? 'from-gray-950 to-gray-200 text-[#fff]' : 'to-gray-950 from-gray-200 text-[#000]'}`}
        >
            <h2 className="text-[6rem] font-bold  flex items-center justify-center text-center">Favorite page</h2>
            <div className="flex items-center gap-x-[10px]">
                <p className="py-10 inline-block text-[2rem] font-semibold">Movies you've liked: </p>
                {isLoading ? (
                    <Skeleton width={50} height={30} />
                ) : (
                    <span
                        className={`transition-colors duration-500 text-[2rem] px-1 ml-3 w-[50px] inline-block text-center
                ${isDarkMode ? 'text-slate-800 bg-slate-200' : 'text-slate-200 bg-slate-800'}
`}
                    >
                        {state.favoriteMovies.length}
                    </span>
                )}
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 md:gap-x-[10px] sm:grid-cols-3 grid-cols-2  gap-[10px] mt-5 mx-10">
                {isLoading ? (
                    <SkeletonCard cards={state.favoriteMovies.length} />
                ) : (
                    state.favoriteMovies.map((movie, index) => (
                        <MovieItem
                            data={movie}
                            key={index}
                            index={index}
                            isFavorite
                            handleDeleteFavoriteMovie={handleDeleteFavoriteMovie}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Favorite;
