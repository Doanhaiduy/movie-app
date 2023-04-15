import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import routes from '~/config/routes';
import { useContext, useEffect, useState } from 'react';
import { FavoriteContext } from '~/store';

function MovieItem({ data, handleAddFavoriteMovie, index, isFavorite = false, handleDeleteFavoriteMovie }) {
    const [favoriteMovies, dispatch] = useContext(FavoriteContext);

    return (
        <div className="  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link className="" to={'/movies/' + data.imdbID}>
                <Image className="rounded-t-lg h-[300px] w-full object-cover" src={data.Poster} alt="" />
            </Link>
            <div className="p-5 ">
                <Link to={'/movies/' + data.imdbID}>
                    <h5 className="h-[40px] mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                        {data.Title}
                    </h5>
                </Link>
                <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">{data.Year}</p>
                <button
                    type="button"
                    className="text-white   bg-gradient-to-br text-[1.4rem] from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg  px-5 py-3.5 text-center mr-2 mb-2 w-full"
                >
                    Watch Now
                </button>
                {!isFavorite ? (
                    !favoriteMovies.moviesInFavorite.includes(data.imdbID) ? (
                        <button
                            onClick={() => {
                                handleAddFavoriteMovie(index);
                            }}
                            className="
                            select-none
                    relative inline-flex items-center justify-center p-0.5 my-3  overflow-hidden text-[1.2rem] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white  
                    "
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Add To Favorite
                            </span>
                        </button>
                    ) : (
                        <button
                            className="
                                pointer-events-none
                            select-none
                                opacity-50
                    relative inline-flex items-center justify-center p-0.5 my-3  overflow-hidden text-[1.2rem] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white 
                    "
                        >
                            <span className="  relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
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
                    relative inline-flex items-center justify-center p-0.5 my-3  overflow-hidden text-[1.2rem] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800
                    "
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Delete
                        </span>
                    </button>
                )}
            </div>
        </div>
    );
}

export default MovieItem;
