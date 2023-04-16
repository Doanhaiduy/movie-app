import { useContext, useEffect, useState } from 'react';

import { MovieItem } from '~/components/ListMovies';
import MovieInfo from '~/layouts/Components/MovieInfo/MovieInfo';
import { FavoriteContext } from '~/store';
import { setCurrentMovie } from '~/store/actions';
import { similar } from '~/services';
import TrailerVideo from '~/components/TrailerVideo';

function Movie() {
    const [moviesSimilar, setMoviesSimilar] = useState([]);

    const [state, dispatch] = useContext(FavoriteContext);
    const currentMovie = state.currentMovie.movieCurrentObj;
    const fetchApi = async (id) => {
        const result = await similar(id);
        setMoviesSimilar(result.results);
    };

    useEffect(() => {
        fetchApi(currentMovie.id);
    }, [currentMovie]);

    useEffect(() => {
        document.title = currentMovie.title;
    }, [currentMovie.title]);
    return (
        <div className="wrapper p-[24px] bg-gradient-to-b from-[#0f0f12] to-slate-200  text-[#fff] ">
            <div className="w-full mx-auto mb-[12px]">
                <h2 className="text-[5rem] font-bold uppercase text-center">{currentMovie.title}</h2>
                <h4 className="font-semibold text-[3rem] my-[20px] text-orange-400">{currentMovie.original_title}</h4>
            </div>
            <MovieInfo currentMovie={state.currentMovie} />
            <div className="mt-[30px] ">
                <div className="w-[100%] flex  justify-between">
                    <div className="pr-[24px] ">
                        <h3 className="text-[3rem]  font-bold text-orange-400 mb-[20px]">Description</h3>
                        <p className="text-[2rem]">{currentMovie.overview}</p>
                    </div>
                    <div className="">
                        <h3 className="text-[3rem] font-bold text-orange-400 mb-[20px]">Trailer</h3>

                        <TrailerVideo id={currentMovie.id} />
                    </div>
                </div>
                <h3 className="text-[3rem] font-bold mb-[20px] mt-10 ml-[10px] text-orange-400">You may also like</h3>
                <div className="grid gap-[30px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-[100%]  pt-0 rounded-[24px] p-[10px]">
                    {moviesSimilar.length > 0 ? (
                        moviesSimilar.map((item, index) => <MovieItem key={index} data={item} isSuggested />)
                    ) : (
                        <p>you haven't added any movies to your list yet...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Movie;
