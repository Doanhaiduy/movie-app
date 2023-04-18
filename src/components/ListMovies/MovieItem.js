import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import Image from '~/components/Image';
import { MovieContext } from '~/store';
import { setCurrentMovie } from '~/store/actions';

function MovieItem({
    data,
    handleAddFavoriteMovie,
    index,
    isFavorite = false,
    handleDeleteFavoriteMovie,
    isSuggested = false,
    isHome = false,
}) {
    const [state, dispatch] = useContext(MovieContext);
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

    const ListMoviesFavoriteStorage = JSON.parse(localStorage.getItem('moviesFavorite')) || [];
    const ListIdsFavoriteStorage = ListMoviesFavoriteStorage.map((item) => item.id);
    const handleSetCurrentMovie = (payload) => {
        window.scrollTo(0, 0);
        dispatch(setCurrentMovie({ obj: payload }));
    };
    return !isSuggested ? (
        <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link
                className=""
                to={'/movie/' + data.id}
                onClick={() => {
                    handleSetCurrentMovie(data);
                }}
            >
                <Image
                    className="rounded-t-lg h-[300px] w-full object-cover"
                    src={IMG_PATH + data.poster_path}
                    alt=""
                />
            </Link>
            <div className="p-5 ">
                <Link
                    to={'/movie/' + data.id}
                    onClick={() => {
                        handleSetCurrentMovie(data);
                    }}
                >
                    <h5 className="h-[40px] mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                        {data.title}
                    </h5>
                </Link>
                <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">Vote: {data.vote_count}</p>
                <Link
                    to={'/movie/' + data.id}
                    onClick={() => {
                        handleSetCurrentMovie(data);
                    }}
                    className="text-white bg-gradient-to-br text-[1.4rem] from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg item-center justify-center px-5 py-3.5 flex text-center mr-2 mb-2 w-full"
                >
                    Watch Now
                </Link>
                {!isFavorite ? (
                    !ListIdsFavoriteStorage.includes(data.id) ? (
                        <button
                            onClick={() => {
                                handleAddFavoriteMovie(index);
                            }}
                            className="
                            select-none
                    relative inline-flex items-center justify-center w-full p-0.5 my-3  overflow-hidden text-[1.2rem] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white  
                    "
                        >
                            <span className=" relative px-5 w-full py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Add To Favorite
                            </span>
                        </button>
                    ) : (
                        <button
                            className="
                                pointer-events-none
                            select-none
                                opacity-50
                    relative inline-flex items-center w-full justify-center p-0.5 my-3  overflow-hidden text-[1.2rem] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white 
                    "
                        >
                            <span className=" w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                                Added
                            </span>
                        </button>
                    )
                ) : (
                    <button
                        onClick={() => {
                            handleDeleteFavoriteMovie(index);
                        }}
                        className="
                    relative inline-flex w-full items-center justify-center p-0.5 my-3  overflow-hidden text-[1.2rem] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800
                    "
                    >
                        <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Delete
                        </span>
                    </button>
                )}
            </div>
        </div>
    ) : (
        <Link
            to={'/movie/' + data.id}
            onClick={() => {
                handleSetCurrentMovie(data);
            }}
            className=" sm:p-4 px-4 flex flex-col items-center bg-white border border-gray-200 rounded-[15px] shadow lg:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden "
        >
            <Image
                className="object-cover w-full  h-96 lg:h-auto lg:w-48 rounded-[25px] hover:scale-[1.1] transition mb-6 lg:rounded-r-none rounded-b-none "
                src={IMG_PATH + data.poster_path}
                alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal overflow-x-hidden">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-5">{data.overview}</p>
            </div>
        </Link>
    );
}

export default MovieItem;
