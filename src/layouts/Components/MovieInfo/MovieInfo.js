import { faHeart, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Image';

function MovieInfo({ currentMovie, isDarkMode }) {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
    const URL = currentMovie.movieCurrentURL;
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavorite = () => {
        isFavorite ? setIsFavorite(false) : setIsFavorite(true);
    };
    currentMovie = currentMovie.movieCurrentObj;

    return (
        <div
            className="sm:h-[360px] lg:w-[70vw] mx-auto rounded-[24px] bg-cover"
            style={{ backgroundImage: `url('${IMG_PATH}${currentMovie.backdrop_path}')` }}
        >
            <div
                className={`transition-colors duration-500 p-[20px] overflow-hidden wrapper grid grid-cols-4 sm:grid-cols-4  gap-x-[12px]  mx-auto sm:h-[360px] lg:w-[70vw]  bg-gradient-to-r  bg-opacity-40 rounded-[24px] 
        ${
            isDarkMode
                ? ' text-gray-200 from-slate-900/60 to-slate-600/80'
                : 'text-gray-900 from-slate-200/90 to-gray-500/60'
        }`}
            >
                <Image
                    className="sm:w-[200px] sm:h-[100%] h-[50vh] w-full object-cover rounded-[12px] col-span-4 sm:col-span-1 "
                    src={IMG_PATH + currentMovie.poster_path}
                    alt=""
                />
                <div className="mx-auto sm:flex justify-center grid grid-cols-6  items-center col-span-4 mt-[24px] gap-y-[30px] sm:col-span-1 sm:flex-col">
                    <Tippy content="Add this video to favorite list">
                        <span>
                            <FontAwesomeIcon
                                onClick={handleFavorite}
                                className={`transition-colors hover:bg-red-600 duration-500 p-[18px] text-[1.6rem] cursor-pointer rounded-[50%] ${
                                    isDarkMode ? ' text-gray-200 bg-slate-700 ' : 'text-gray-900 bg-gray-400'
                                } ${isFavorite ? 'bg-red-600' : ''}`}
                                icon={faHeart}
                            />
                        </span>
                    </Tippy>
                    <Tippy content="Login to rate this video">
                        <span>
                            <FontAwesomeIcon
                                className={`ml-[6px] sm:ml-0 transition-colors hover:bg-yellow-400 duration-500 p-[18px] text-[1.6rem] cursor-pointer rounded-[50%] ${
                                    isDarkMode ? ' text-gray-200 bg-slate-700 ' : 'text-gray-900 bg-gray-400'
                                }`}
                                icon={faStar}
                            />
                        </span>
                    </Tippy>

                    <Link
                        to={'https://www.youtube.com/embed/' + URL}
                        target="_blank"
                        className="sm:mb-[20px] col-span-4 mx-auto  flex justify-center gap-2 items-center max-w-[140px] max-h-[40px] border-[2px] hover:bg-red-500 font-bold rounded-[6px] px-[12px] py-[6px]  text-[1.4rem] sm:text-[1.6rem] cursor-pointer w-[200px]"
                    >
                        <FontAwesomeIcon icon={faPlay} className="inline" />
                        Watch Now
                    </Link>
                </div>
                <div className="flex flex-col justify-center col-span-2 sm:col-span-1 ml-[10px] text-center sm:text-left">
                    <p className="text-[1.8rem] font-bold min-h-[54px] mt-[20px]">
                        Vote count:
                        <span
                            className={` transition-colors duration-500   ${
                                isDarkMode ? 'text-yellow-400' : 'text-yellow-950'
                            }
`}
                        >
                            {' '}
                            {currentMovie.vote_count}
                        </span>
                    </p>
                    <p className="text-[1.8rem] font-bold min-h-[54px] mt-[20px] ">
                        Sub:{' '}
                        <span
                            className={` transition-colors duration-500   ${
                                isDarkMode ? 'text-yellow-400' : 'text-yellow-950'
                            }
 uppercase`}
                        >
                            {currentMovie.original_language}
                        </span>
                    </p>
                    <p className="text-[1.8rem] font-bold min-h-[54px] mt-[20px]">
                        Category:{' '}
                        <span
                            className={`  transition-colors duration-500  ${
                                isDarkMode ? 'text-yellow-400' : 'text-yellow-950'
                            }
`}
                        >
                            odd movie
                        </span>
                    </p>
                    <p className="text-[1.8rem] font-bold min-h-[54px] mt-[20px]">
                        <span
                            className={`  transition-colors duration-500  ${
                                isDarkMode ? 'text-yellow-400' : 'text-yellow-950'
                            }
`}
                        >
                            {currentMovie.popularity}
                        </span>{' '}
                        View
                    </p>
                </div>
                <div className=" flex flex-col justify-center col-span-2 sm:col-span-1 text-center sm:text-left">
                    <p className="text-[1.8rem] font-bold min-h-[54px] mt-[20px]">
                        Quality:{' '}
                        <span
                            className={`  transition-colors duration-500  ${
                                isDarkMode ? 'text-yellow-400' : 'text-yellow-950'
                            }
`}
                        >
                            HD
                        </span>
                    </p>
                    <p className="text-[1.8rem] font-bold min-h-[54px] mt-[20px]">
                        Time:{' '}
                        <span
                            className={` transition-colors duration-500   ${
                                isDarkMode ? 'text-yellow-400' : 'text-yellow-950'
                            }
`}
                        >
                            128 Minutes
                        </span>
                    </p>
                    <p className="text-[1.8rem] font-bold min-h-[54px] mt-[20px]">
                        Release date:{' '}
                        <span
                            className={`  transition-colors duration-500  ${
                                isDarkMode ? 'text-yellow-400' : 'text-yellow-950'
                            }
`}
                        >
                            {currentMovie.release_date}
                        </span>
                    </p>
                    <p className="text-[1.8rem] font-bold min-h-[54px] mt-[20px]">
                        Vote average:{' '}
                        <span
                            className={`  transition-colors duration-500  ${
                                isDarkMode ? 'text-yellow-400' : 'text-yellow-950'
                            }
`}
                        >
                            {(currentMovie.vote_average * 10).toFixed(2)}%
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MovieInfo;
