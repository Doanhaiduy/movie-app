import { Link } from 'react-router-dom';
import Image from '~/components/Image';

function MovieInfo({ currentMovie, isDarkMode }) {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
    const URL = currentMovie.movieCurrentURL;
    currentMovie = currentMovie.movieCurrentObj;

    return (
        <div
            className={`p-[20px] overflow-hidden wrapper grid grid-cols-4 sm:grid-cols-4  gap-x-[12px] mx-auto sm:h-[360px] lg:w-[70vw]  bg-gradient-to-r  bg-opacity-90 rounded-[24px] backdrop-blur-3xl
        ${isDarkMode ? ' text-gray-200 from-slate-900 to-slate-600' : ' text-gray-900 from-slate-200 to-gray-500'}`}
        >
            <Image
                className="sm:w-[200px] sm:h-[100%] h-[50vh] w-full object-cover rounded-[12px] col-span-4 sm:col-span-1 "
                src={IMG_PATH + currentMovie.poster_path}
                alt=""
            />
            <div className="flex flex-col  gap-y-[12px] justify-center col-span-2 sm:col-span-1 ml-[10px]">
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Vote count:
                    <span
                        className={`    ${isDarkMode ? 'text-yellow-400' : 'text-red-600'}
`}
                    >
                        {' '}
                        {currentMovie.vote_count}
                    </span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px] ">
                    Sub:{' '}
                    <span
                        className={`    ${isDarkMode ? 'text-yellow-400' : 'text-red-600'}
 uppercase`}
                    >
                        {currentMovie.original_language}
                    </span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Category:{' '}
                    <span
                        className={`    ${isDarkMode ? 'text-yellow-400' : 'text-red-600'}
`}
                    >
                        odd movie
                    </span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    <span
                        className={`    ${isDarkMode ? 'text-yellow-400' : 'text-red-600'}
`}
                    >
                        {currentMovie.popularity}
                    </span>{' '}
                    View
                </p>
            </div>
            <div className="gap-y-[12px] flex flex-col justify-center col-span-2 sm:col-span-1 ">
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Quality:{' '}
                    <span
                        className={`    ${isDarkMode ? 'text-yellow-400' : 'text-red-600'}
`}
                    >
                        HD
                    </span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Time:{' '}
                    <span
                        className={`    ${isDarkMode ? 'text-yellow-400' : 'text-red-600'}
`}
                    >
                        {Math.floor(Math.random() * (180 - 60) + 60)} Minutes
                    </span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Release date:{' '}
                    <span
                        className={`    ${isDarkMode ? 'text-yellow-400' : 'text-red-600'}
`}
                    >
                        {currentMovie.release_date}
                    </span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Vote average:{' '}
                    <span
                        className={`    ${isDarkMode ? 'text-yellow-400' : 'text-red-600'}
`}
                    >
                        {currentMovie.vote_average}
                    </span>
                </p>
            </div>
            <div className="flex justify-center items-center flex-row col-span-4 mt-[24px] gap-x-6 sm:col-span-1 sm:flex-col">
                <Link
                    to={'https://www.youtube.com/embed/' + URL}
                    target="_blank"
                    className="mb-[20px] flex  justify-center items-center max-w-[150px] max-h-[40px] bg-[--primary] font-bold rounded-[6px] px-[12px] py-[6px] hover:opacity-[0.9] text-[1rem] sm:text-[2rem] cursor-pointer w-[200px]"
                >
                    Watch Now
                </Link>
                <Link
                    to="#"
                    className="mb-[20px] flex  justify-center items-center max-w-[150px] max-h-[40px] bg-green-500 font-bold rounded-[6px] px-[12px] py-[6px] hover:opacity-[0.9] text-[1rem] sm:text-[2rem] cursor-pointer w-[200px]"
                >
                    DownLoad
                </Link>
            </div>
        </div>
    );
}

export default MovieInfo;
