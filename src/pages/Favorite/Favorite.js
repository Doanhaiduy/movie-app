import { useContext } from 'react';
import { useEffect } from 'react';

import { MovieContext } from '~/store';
import { MovieItem } from '~/components/ListMovies';
import { deleteFavorite } from '~/store/actions';

function Favorite() {
    const [state, dispatch] = useContext(MovieContext);

    const handleDeleteFavoriteMovie = (index) => {
        dispatch(deleteFavorite(index));
    };

    useEffect(() => {
        document.title = 'Favorite';
    }, []);

    return (
        <div className=" w-full p-[20px] bg-gradient-to-b from-[#0f0f12] to-slate-200 text-[#fff] min-h-[100vh]">
            <h2 className="text-[6rem] text-gray-300 font-bold  flex items-center justify-center text-center">
                Favorite page
            </h2>
            <p className="py-10 inline-block ">Movies you've liked: </p>
            <span className="text-[2rem] bg-slate-600 text-[#fff] px-1 ml-3 w-[50px] inline-block text-center">
                {state.favoriteMovies.length}
            </span>
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
