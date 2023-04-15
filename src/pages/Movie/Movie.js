import { useContext, useEffect } from 'react';

import { MovieItem } from '~/components/ListMovies';
import MovieInfo from '~/layouts/Components/MovieInfo/MovieInfo';
import { FavoriteContext } from '~/store';

function Movie() {
    const [state, dispatch] = useContext(FavoriteContext);
    const currentMovie = state.currentMovie;

    useEffect(() => {
        document.title = currentMovie.title;
    }, [currentMovie.title]);
    return (
        <div className="wrapper p-[24px] bg-gradient-to-r from-purple-500 to-pink-500 h-[100vh]  text-[#fff] lg:mt-[0px] mt-[-8px]">
            <div className="w-full mx-auto mb-[12px]">
                <h2 className="text-[4rem] font-bold ">{currentMovie.title}</h2>
                <h4 className="font-semibold text-[2rem]">{currentMovie.original_title}</h4>
            </div>
            <MovieInfo currentMovie={currentMovie} />
            <div className="mt-[30px] flex">
                <div className="w-[60%]">
                    <h3 className="text-[3rem] font-bold underline mb-[20px]">Description: </h3>
                    <p className="text-[2rem] ">{currentMovie.overview}</p>
                </div>
                <div className="grid gap-y-[10px] grid-cols-1 h-[400px] max-h-[800px] w-[40%] overflow-y-auto pt-0 rounded-[24px] p-[20px]">
                    <h3 className="text-[3rem] font-bold underline mb-[20px]">You may also like</h3>
                    {state.favoriteMovies.length > 0 ? (
                        state.favoriteMovies.map((item, index) => <MovieItem key={index} data={item} isSuggested />)
                    ) : (
                        <p>you haven't added any movies to your list yet...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Movie;
