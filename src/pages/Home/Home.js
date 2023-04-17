import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import ListMovies from '~/components/ListMovies/ListMovies';
import routes from '~/config/routes';

function Home() {
    return (
        <Fragment>
            <div className=" w-full h-[calc(100vh_-_74px)] bg-home-bgr bg-no-repeat bg-cover text-[#fff]">
                <div className=" h-[100%] flex items-center justify-center flex-col gap-y-[18px]">
                    <h2 className="text-[5rem]  font-bold text-center max-w-[900px] px-5">
                        Your streaming guide for movies, TV shows & sports
                    </h2>
                    <p className="text-center font-bold  flex items-center justify-center px-5">
                        Find where to stream new, popular & upcoming entertainment with JustWatch.
                    </p>
                    <div className="flex items-center gap-x-3 mt-12">
                        <Link
                            to={routes.movies}
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold rounded-lg sm:text-[2rem] text-[1rem] px-5 py-[8px] text-center mr-2 mb-2"
                        >
                            Discover Movies & TV shows
                        </Link>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden sm:text-[2rem] text-[1rem] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                            <span className="relative px-5 py-[7px] transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Features
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-gray-950 to-gray-200">
                <h2 className="text-[#fff] text-[2rem] pt-[20px] px-[32px]  font-semibold ">Featured Category</h2>

                <ListMovies page={'home'} />
            </div>
        </Fragment>
    );
}

export default Home;
