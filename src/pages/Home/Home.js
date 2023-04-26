import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { MovieContext } from '~/store';
import ListMovies from '~/components/ListMovies/';
import routes from '~/config/routes';

function Home() {
    const [state, dispatch] = useContext(MovieContext);

    const isDarkMode = state.isDarkMode;
    return (
        <Fragment>
            <div
                className={`transition-all duration-500 w-full h-[calc(100vh_-_74px)]  bg-no-repeat bg-cover  ${
                    isDarkMode ? 'bg-home-bgr text-slate-300' : 'bg-home-bgr-light text-gray-950'
                }`}
            >
                <div className=" h-[100%] flex items-center justify-center flex-col gap-y-[18px]">
                    <h2 className="sm:text-[5rem] text-[3.5rem] font-bold text-center max-w-[900px] px-5 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.5)]">
                        Your streaming guide for movies, TV shows & sports
                    </h2>
                    <p className="text-center font-bold  flex items-center justify-center px-5 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.5)]">
                        Find where to stream new, popular & upcoming entertainment with JustWatch.
                    </p>
                    <div className="flex items-center gap-x-3 mt-12">
                        <Link
                            to={routes.movies}
                            className={`transition-colors duration-500 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold rounded-lg sm:text-[2rem] text-[1rem] px-5 py-[8px] text-center mr-2 mb-2
                                ${isDarkMode ? 'text-[#fff]' : 'text-[#000]'}
`}
                        >
                            Discover Movies & TV shows
                        </Link>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden sm:text-[2rem] text-[1rem] font-medium  rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200  focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                            <span
                                className={`relative px-5 py-[7px]  rounded-md group-hover:bg-opacity-0
                                transition-colors duration-500 ${isDarkMode ? 'text-[#fff]' : 'text-[#000]'}`}
                            >
                                Features
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`bg-gradient-to-b transition-colors duration-500 ${
                    isDarkMode ? 'from-gray-950 to-gray-200 text-[#fff]' : 'to-gray-950 from-gray-200 text-[#000]'
                }`}
            >
                <h2 className="text-[2rem] pt-[20px] px-[32px]  font-semibold ">Featured Category</h2>

                <ListMovies page={'home'} type="trending" />
            </div>
        </Fragment>
    );
}

export default Home;
