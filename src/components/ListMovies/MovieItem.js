import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { MovieContext } from '~/store';
import Image from '~/components/Image';
import { setCurrentMovie } from '~/store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function MovieItem({
    data,
    handleAddFavoriteMovie,
    index,
    isFavorite = false,
    handleDeleteFavoriteMovie,
    isSuggested = false,
    isHome = false,
    setIsLoading,
}) {
    const [state, dispatch] = useContext(MovieContext);

    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
    const n = parseInt(data.vote_average / 2);
    const n2 = 5 - n;
    const arrStar = new Array(n).fill(null);
    const arrStar2 = new Array(n2).fill(null);
    const isDarkMode = state.isDarkMode;
    const ListMoviesFavoriteStorage = JSON.parse(localStorage.getItem('moviesFavorite')) || [];
    const ListIdsFavoriteStorage = ListMoviesFavoriteStorage.map((item) => item.id);
    const handleSetCurrentMovie = (payload) => {
        window.scrollTo(0, 0);
        dispatch(setCurrentMovie({ obj: payload }));
    };

    return !isSuggested ? (
        <div
            className={`transition-colors duration-500 max-w-[500px] ${
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
                        className={`transition-colors duration-500 h-[40px] mb-2 text-2xl font-bold tracking-tight ${
                            isDarkMode ? 'text-white' : ' text-gray-900'
                        } line-clamp-2`}
                    >
                        {data.title}
                    </h5>
                </Link>
                <p
                    className={`transition-colors duration-500 mb-3 font-normal flex justify-between items-center ${
                        isDarkMode ? 'text-gray-400 ' : ' text-gray-700'
                    }`}
                >
                    <span>Vote: {data.vote_average}</span>
                    <span className="text-[1rem] flex gap-[4px]">
                        {arrStar2.map((item, index) => (
                            <FontAwesomeIcon key={index} icon={faStar} className="" />
                        ))}
                        {arrStar.map((starItem, index) => (
                            <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400" />
                        ))}
                    </span>
                </p>
                <Link
                    to={'/movie/' + data.id}
                    onClick={() => {
                        handleSetCurrentMovie(data);
                    }}
                    className={`transition-colors duration-500 ${
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
                            className={`transition-colors duration-500 select-none
                    relative inline-flex items-center justify-center w-full p-0.5 my-3  overflow-hidden text-[1.2rem] font-medium  rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 
                    ${isDarkMode ? ' text-white hover:text-gray-900' : ' text-gray-900 hover:text-white '}
                    `}
                        >
                            <span
                                className={` relative px-5 w-full py-2.5 transition-all ease-in duration-75   rounded-md group-hover:bg-opacity-0
                                ${isDarkMode ? 'bg-gray-900' : 'bg-white '}`}
                            >
                                Add To Favorite
                            </span>
                        </button>
                    ) : (
                        <button
                            className={`transition-colors duration-500 pointer-events-none
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
                setIsLoading(true);
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
                    className={`transition-colors duration-500 mb-2 text-2xl font-bold tracking-tight text-[2rem] line-clamp-2
                ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                    {data.title}
                </h5>
                <p
                    className={`transition-colors duration-500 mb-3 font-normal   line-clamp-5
                ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
                >
                    {data.overview}
                </p>
            </div>
        </Link>
    );
}

export default MovieItem;
