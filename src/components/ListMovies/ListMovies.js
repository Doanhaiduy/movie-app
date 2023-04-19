import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Search from '../Search/';
import MovieItem from './MovieItem';
import { MovieContext } from '~/store';
import { addToFavorite, handleDisableBtn } from '~/store/actions';
import { search as searchServices, trending, similar } from '~/services';
import { SkeletonCard } from '../LoadingSkeleton';


function ListMovies({ page = false }) {
    const [movies, setMovies] = useState([]);
    const [favoriteMovies, dispatch] = useContext(MovieContext);
    const [moviesHasDisable, setMoviesHasDisable] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let fetchApi = function () {};

    switch (page) {
        case 'home': {
            fetchApi = async () => {
                const result = await trending();
                setMovies(result.results);
                setIsLoading(false);
            };
            break;
        }
        default:
            fetchApi = async (search) => {
                const result = await searchServices(search);
                setMovies(result.results);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            };
    }

    useEffect(() => {
        console.log('re-render');
        fetchApi('a');
    }, []);

    const handleSearch = (searchInput) => {
        if (searchInput !== '' || searchInput.length > 3) {
            setIsLoading(true);
            fetchApi(searchInput);
        }

        return;
    };
    const handleAddFavoriteMovie = (movie) => {
        localStorage.setItem('moviesFavorite', JSON.stringify([...favoriteMovies.favoriteMovies, movies[movie]]));
        setMoviesHasDisable([...moviesHasDisable, movies[movie].id]);
        dispatch(handleDisableBtn(movies[movie].id));
        dispatch(addToFavorite(movies[movie]));
    };

    return (
        <Fragment>
            {page ? (
                <div className="p-[30px] grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 md:gap-x-[10px] grid-cols-2 gap-x-1 gap-[16px]">
                    {isLoading ? (
                        <SkeletonCard cards={movies.length} />
                    ) : movies.length > 0 ? (
                        movies.map((movie, index) => (
                            <MovieItem
                                data={movie}
                                key={index}
                                index={index}
                                isHome
                                handleAddFavoriteMovie={handleAddFavoriteMovie}
                            />
                        ))
                    ) : (
                        <div className="w-full col-span-full mt-6">
                            <h2 className="text-center text-[24px]">Can't find the movie on demand</h2>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <Search onSubmit={handleSearch} />
                    <div className=" grid mx-10 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 md:gap-x-[10px] grid-cols-2 gap-[16px] mt-5">
                        {isLoading ? (
                            <SkeletonCard cards={movies.length} />
                        ) : movies.length > 0 ? (
                            movies.map((movie, index) => (
                                <MovieItem
                                    data={movie}
                                    key={index}
                                    index={index}
                                    handleAddFavoriteMovie={handleAddFavoriteMovie}
                                />
                            ))
                        ) : (
                            <div className="w-full col-span-full mt-6">
                                <h2 className="text-center text-[24px]">Can't find the movie on demand</h2>
                            </div>
                        )}
                    </div>
                </>
            )}
        </Fragment>
    );
}

export default ListMovies;
