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

    const isDarkMode = state.isDarkMode;

    const ListMoviesFavoriteStorage = JSON.parse(localStorage.getItem('moviesFavorite')) || [];
    const ListIdsFavoriteStorage = ListMoviesFavoriteStorage.map((item) => item.id);
    const handleSetCurrentMovie = (payload) => {
        window.scrollTo(0, 0);
        dispatch(setCurrentMovie({ obj: payload }));
    };

    return !isSuggested ? (
        <div
            className={`max-w-sm  ${
                isDarkMode ? 'bg-gray-800 border border-gray-200' : 'bg-white border border-gray-900'
            } rounded-lg shadow  `}
        >
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
                    <h5
                        className={`h-[40px] mb-2 text-2xl font-bold tracking-tight ${
                            isDarkMode ? 'text-white' : ' text-gray-900'
                        } line-clamp-2`}
                    >
                        {data.title}
                    </h5>
                </Link>
                <p className={`mb-3 font-normal ${isDarkMode ? 'text-gray-400 ' : ' text-gray-700'}`}>
                    Vote: {data.vote_count}
                </p>
                <Link
                    to={'/movie/' + data.id}
                    onClick={() => {
                        handleSetCurrentMovie(data);
                    }}
                    className={`${
                        isDarkMode ? 'text-white focus:ring-pink-800' : ' text-gray-900 focus:ring-pink-200'
                    } bg-gradient-to-br text-[1.4rem] from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  font-medium rounded-lg item-center justify-center px-5 py-3.5 flex text-center mr-2 mb-2 w-full`}
                >
                    Watch Now
                </Link>
                {!isFavorite ? (
                    !ListIdsFavoriteStorage.includes(data.id) ? (
                        <button
                            onClick={() => {
                                handleAddFavoriteMovie(index);
                            }}
                            className={`select-none
                    relative inline-flex items-center justify-center w-full p-0.5 my-3  overflow-hidden text-[1.2rem] font-medium  rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 
                    ${isDarkMode ? ' text-white hover:text-gray-900' : ' text-gray-900 hover:text-white '}
                    `}
                        >
                            <span
                                className={`relative px-5 w-full py-2.5 transition-all ease-in duration-75   rounded-md group-hover:bg-opacity-0
                                ${isDarkMode ? 'bg-gray-900' : 'bg-white '}`}
                            >
                                Add To Favorite
                            </span>
                        </button>
                    ) : (
                        <button
                            className={`pointer-events-none
                            select-none
                                opacity-50
                    relative inline-flex items-center w-full justify-center p-0.5 my-3  overflow-hidden text-[1.2rem] font-medium  rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400  
                    ${isDarkMode ? ' text-white hover:text-gray-900' : ' text-gray-900 hover:text-white '}
                    `}
                        >
                            <span
                                className={` w-full relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0 
                                    ${
                                        isDarkMode
                                            ? '  text-white hover:text-gray-900 bg-gray-900'
                                            : '  text-gray-900 hover:text-white bg-white'
                                    }
                                `}
                            >
                                Added
                            </span>
                        </button>
                    )
                ) : (
                    <button
                        onClick={() => {
                            handleDeleteFavoriteMovie(index);
                        }}
                        className={`relative inline-flex w-full items-center justify-center p-0.5 my-3  overflow-hidden text-[1.2rem] font-medium  rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800
                        
                    `}
                    >
                        <span
                            className={`w-full relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0
                            ${
                                isDarkMode
                                    ? 'bg-gray-900 text-white hover:text-gray-900'
                                    : ' bg-white text-gray-900 hover:text-white'
                            }
                            `}
                        >
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
            className={`sm:p-4 px-4 flex flex-col items-center  rounded-[15px] shadow lg:flex-row w-full   overflow-hidden
              ${
                  isDarkMode
                      ? 'bg-gray-800 border-gray-700  hover:bg-gray-700 '
                      : 'bg-gray-300 border border-gray-200 hover:bg-gray-100'
              }`}
        >
            <Image
                className="object-cover w-full  h-96 lg:h-auto lg:w-48 rounded-[25px] hover:scale-[1.1] transition mb-6   "
                src={IMG_PATH + data.poster_path}
                alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal overflow-x-hidden">
                <h5
                    className={`mb-2 text-2xl font-bold tracking-tight text-[2rem] 
                ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                    {data.title}
                </h5>
                <p
                    className={`mb-3 font-normal   line-clamp-5
                ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
                >
                    {data.overview}
                </p>
            </div>
        </Link>
    );
}

export default MovieItem;
