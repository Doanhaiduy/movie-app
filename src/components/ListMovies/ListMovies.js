import { Fragment, useEffect, useState } from 'react';
import { useContext } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';

import MovieItem from './MovieItem';
import { MovieContext } from '~/store';
import { addToFavorite, handleDisableBtn } from '~/store/actions';
import { topRated, popular, nowPlaying, upcoming } from '~/services';
import { SkeletonCard } from '../LoadingSkeleton';
import { trending } from '~/services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

function ListMovies({ page = false, type = 'all', pageNumProp = 1 }) {
    const [favoriteMovies, dispatch] = useContext(MovieContext);
    const [movies, setMovies] = useState([]);
    const [moviesHasDisable, setMoviesHasDisable] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pageNum, setPageNum] = useState(pageNumProp);

    let fetchApi = function () {};

    switch (type) {
        case 'all': {
            fetchApi = async (pageNum) => {
                const result = await popular('less', pageNum);
                setMovies(result.results);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            };
            break;
        }
        case 'topRated': {
            fetchApi = async () => {
                const result = await topRated();
                setMovies(result.results);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            };
            break;
        }
        case 'nowPlaying': {
            fetchApi = async () => {
                const result = await nowPlaying();
                setMovies(result.results);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            };
            break;
        }
        case 'upcoming': {
            fetchApi = async () => {
                const result = await upcoming();
                setMovies(result.results);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            };
            break;
        }
        case 'trending': {
            fetchApi = async () => {
                const result = await trending();
                setMovies(result.results);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            };
            break;
        }
        default:
            throw new Error('validate axios API ');
    }

    useEffect(() => {
        setIsLoading(true);
        console.log('re-render');
        fetchApi(pageNum);
    }, [type, pageNum]);

    // const handleSearch = (searchInput) => {
    //     if (searchInput !== '' || searchInput.length > 3) {
    //         setIsLoading(true);
    //         fetchApi(searchInput);
    //     }

    //     return;
    // };
    const handleAddFavoriteMovie = (movie) => {
        localStorage.setItem('moviesFavorite', JSON.stringify([...favoriteMovies.favoriteMovies, movies[movie]]));
        setMoviesHasDisable([...moviesHasDisable, movies[movie].id]);
        dispatch(handleDisableBtn(movies[movie].id));
        dispatch(addToFavorite(movies[movie]));
    };

    const handlePrevPage = () => {
        if (pageNum === 1) {
            return;
        } else {
            setPageNum((prev) => prev - 1);
        }
    };

    const handleNextPage = () => {
        setPageNum((prev) => prev + 1);
    };
    return (
        <Fragment>
            {page ? null : <h2 className="text-[3rem] font-semibold p-10 uppercase">{type}</h2>}
            {type === 'all' ? (
                <div className="flex gap-[24px] px-10 text-[3rem] mb-[22px]">
                    <FontAwesomeIcon
                        className={`select-none  ${
                            pageNum === 1 ? 'opacity-20 pointer-events-none ' : 'opacity-100 cursor-pointer'
                        }`}
                        onClick={handlePrevPage}
                        icon={faArrowCircleLeft}
                    />
                    <FontAwesomeIcon
                        className="select-none cursor-pointer"
                        onClick={handleNextPage}
                        icon={faArrowCircleRight}
                    />
                </div>
            ) : null}
            {/* grid mx-10 grid-cols-201 2xl:grid-cols-205 lg:grid-cols-204 sm:grid-cols-202  overflow-x-auto gap-x-[16px] mt-5 max-w-[90vw] p-5 bg-cyan-950 rounded-[12px] */}
            <div className=" grid mx-10 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 md:gap-x-[10px] grid-cols-2 gap-[16px] mt-5">
                {isLoading ? (
                    <SkeletonCard cards={movies.length} />
                ) : movies.slice(1).length > 0 ? (
                    movies
                        .slice(1)
                        .map((movie, index) => (
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
            <p className="text-[1.2rem] cursor-pointer text-orange-600 text-center font-medium mt-[16px]">See more</p>
        </Fragment>
    );
}

export default ListMovies;
