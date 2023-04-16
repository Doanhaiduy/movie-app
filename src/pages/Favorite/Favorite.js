import { useContext } from 'react';
import { useEffect } from 'react';

import { FavoriteContext } from '~/store';
import { MovieItem } from '~/components/ListMovies';
import { deleteFavorite } from '~/store/actions';

function Favorite() {
    const [state, dispatch] = useContext(FavoriteContext);

    const handleDeleteFavoriteMovie = (index) => {
        dispatch(deleteFavorite(index));
    };

    useEffect(() => {
        document.title = 'Favorite';
    }, []);

    return (
        <div className=" w-full p-[20px] bg-gradient-to-b from-[#0f0f12] to-slate-200 text-[#fff]">
            <h2 className="text-[6rem] text-[orange] font-bold underline flex items-center justify-center text-center">
                Favorite page
            </h2>
            <p className="py-10 inline-block ">Movies you've liked: </p>
            <span className="text-[2rem] bg-slate-600 text-[#fff] p-4 ml-3 w-[50px] inline-block text-center">
                {state.favoriteMovies.length}
            </span>
            <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-x-[20px] grid-cols-2 gap-x-1 gap-[16px] mt-5"'>
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
