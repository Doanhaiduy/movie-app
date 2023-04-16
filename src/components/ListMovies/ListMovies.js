import { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';

import Search from '../Search/';
import MovieItem from './MovieItem';
import { FavoriteContext } from '~/store';
import { addToFavorite, handleDisableBtn } from '~/store/actions';
import { search as searchServices, trending, similar } from '~/services';

function ListMovies({ page = false }) {
    const [movies, setMovies] = useState([]);
    const [favoriteMovies, dispatch] = useContext(FavoriteContext);
    const [moviesHasDisable, setMoviesHasDisable] = useState([]);
    console.log('render nè');
    let fetchApi = function () {};
    switch (page) {
        case 'home': {
            fetchApi = async () => {
                const result = await trending();
                setMovies(result.results);
            };
            break;
        }
        default:
            fetchApi = async (search) => {
                const result = await searchServices(search);
                setMovies(result.results);
            };
    }

    useEffect(() => {
        console.log('re-render');
        fetchApi('a');
    }, []);

    const handleSearch = (searchInput) => {
        if (searchInput !== '' || searchInput.length > 3) {
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
        <>
            {page ? (
                <div className="p-[30px] grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 md:gap-x-[10px] grid-cols-2 gap-x-1 gap-[16px]">
                    {movies.length > 0 ? (
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
                    <div className=" grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 md:gap-x-[10px] grid-cols-2 gap-x-1 gap-[16px] mt-5">
                        {movies.length > 0 ? (
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
        </>
    );
}

export default ListMovies;
