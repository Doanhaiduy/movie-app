import { Link } from 'react-router-dom';

function MovieInfo({ currentMovie }) {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

    return (
        <div className=" wrapper grid grid-cols-3 gap-x-[12px] xxl:h-[40vh] h-[60vh] bg-gray-800 p-[24px] bg-opacity-60 rounded-[24px] backdrop-blur-3xl ">
            <div className="w-full">
                <img
                    className="w-[250px] h-[100%] object-cover rounded-[12px]"
                    src={IMG_PATH + currentMovie.poster_path}
                    alt=""
                />
            </div>
            <div className="flex flex-col gap-y-[12px]">
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Vote count:
                    <span className="text-yellow-500"> {currentMovie.vote_count}</span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Sub: <span className="text-yellow-500 uppercase">{currentMovie.original_language}</span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Category: <span className="text-yellow-500">odd movie</span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    <span className="text-yellow-500">{currentMovie.popularity}</span> View
                </p>
            </div>
            <div className="gap-y-[12px] grid">
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Quality: <span className="text-yellow-500">HD</span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Time: <span className="text-yellow-500">{Math.floor(Math.random() * (180 - 60) + 60)} Minutes</span>
                </p>
                <p className="text-[1.8rem] font-bold mt-[20px]">
                    Release date: <span className="text-yellow-500">{currentMovie.release_date}</span>
                </p>
                <Link className="mb-[20px]  flex justify-center items-center max-w-[150px] max-h-[40px] bg-[--primary] font-bold rounded-[6px] hover:opacity-[0.9] text-[2rem] cursor-pointer w-[200px]">
                    Watch Now
                </Link>
            </div>
        </div>
    );
}

export default MovieInfo;
