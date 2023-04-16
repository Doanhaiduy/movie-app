import { Link } from 'react-router-dom';

function MovieInfo({ currentMovie }) {
    const URL = currentMovie.movieCurrentURL;
    currentMovie = currentMovie.movieCurrentObj;
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

    return (
        <div className="p-[20px] overflow-hidden wrapper grid grid-cols-4 sm:grid-cols-4  gap-x-[12px] mx-auto sm:h-[360px] lg:w-[70vw] text-gray-200 bg-gradient-to-r from-slate-900 to-slate-600 bg-opacity-90 rounded-[24px] backdrop-blur-3xl ">
            <img
                className="sm:w-[200px] h-[100%] object-cover rounded-[12px] col-span-4 sm:col-span-1 "
                src={IMG_PATH + currentMovie.poster_path}
                alt=""
            />
            <div className="flex flex-col  gap-y-[12px] justify-center col-span-2 sm:col-span-1">
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Vote count:
                    <span className="text-yellow-400"> {currentMovie.vote_count}</span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px] ">
                    Sub: <span className="text-yellow-400 uppercase">{currentMovie.original_language}</span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Category: <span className="text-yellow-400">odd movie</span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    <span className="text-yellow-400">{currentMovie.popularity}</span> View
                </p>
            </div>
            <div className="gap-y-[12px] flex flex-col justify-center col-span-2 sm:col-span-1 ">
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Quality: <span className="text-yellow-400">HD</span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Time: <span className="text-yellow-400">{Math.floor(Math.random() * (180 - 60) + 60)} Minutes</span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Release date: <span className="text-yellow-400">{currentMovie.release_date}</span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Vote average: <span className="text-yellow-400">{currentMovie.vote_average}</span>
                </p>
            </div>
            <div className="flex justify-center items-center flex-row col-span-4 mt-[24px] gap-x-6 sm:col-span-1 sm:flex-col">
                <Link
                    to={'https://www.youtube.com/embed/' + URL}
                    target="_blank"
                    className="mb-[20px] flex text-[#fff] justify-center items-center max-w-[150px] max-h-[40px] bg-[--primary] font-bold rounded-[6px] px-[12px] py-[6px] hover:opacity-[0.9] text-[2rem] cursor-pointer w-[200px]"
                >
                    Watch Now
                </Link>
                <Link
                    to="#"
                    className="mb-[20px] flex text-[#fff] justify-center items-center max-w-[150px] max-h-[40px] bg-green-500 font-bold rounded-[6px] px-[12px] py-[6px] hover:opacity-[0.9] text-[2rem] cursor-pointer w-[200px]"
                >
                    DownLoad
                </Link>
            </div>
        </div>
    );
}

export default MovieInfo;
