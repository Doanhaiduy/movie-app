import { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';

import Search from '../Search/';
import MovieItem from './MovieItem';
import { FavoriteContext } from '~/store';
import { addToFavorite, handleDisableBtn } from '~/store/actions';

function ListMovies() {
    const [movies, setMovies] = useState([]);
    const [hasMovies, setHasMovies] = useState(true);
    const [favoriteMovies, dispatch] = useContext(FavoriteContext);
    const [moviesHasDisable, setMoviesHasDisable] = useState([]);

    const renderListMovies = async (search) => {
        await axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=' + search)
            .then(function (response) {
                // handle success
                if (response.data.results.length > 0) {
                    setHasMovies(true);
                    setMovies(response.data.results);
                } else {
                    setHasMovies(false);
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    };


    useEffect(() => {
        console.log('re-render');
        renderListMovies('a');
    }, []);


    const handleSearch = (searchInput) => {
        if (searchInput !== '' || searchInput.length > 3) renderListMovies(searchInput);
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
            <Search onSubmit={handleSearch} />
            <div className=" grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 md:gap-x-[10px] grid-cols-2 gap-x-1 gap-[16px] mt-5">
                {hasMovies ? (
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
    );
}

export default ListMovies;
