import { Link } from 'react-router-dom';

import Image from '../Image/Image';
import { MovieContext } from '~/store';
import { useContext } from 'react';
import { setCurrentMovie } from '~/store/actions';

function MovieItemSearch({ data, onClick, isDarkMode }) {
    const [state, dispatch] = useContext(MovieContext);

    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

    return (
        <Link
            onClick={() => {
                dispatch(setCurrentMovie({ obj: data, url: data.id }));
                window.scrollTo(0, 0);

                onClick(data);
            }}
            to={'/movie/' + data.id}
            className={` flex gap-x-4 items-center p-4 ${
                isDarkMode
                    ? 'text-slate-200 bg-slate-800 hover:bg-gray-200 hover:text-slate-800'
                    : ' text-slate-800 bg-slate-200 hover:bg-gray-800 hover:text-slate-200'
            }    cursor-pointer`}
        >
            <Image
                className="w-[100px] min-w-[100px] h-[60px] object-cover rounded-[4px]"
                src={IMG_PATH + data.poster_path}
                alt=""
            />
            <div className="">
                <h4 className="text-[1.6rem] font-semibold line-clamp-1">{data.title}</h4>
                <p className="text-[1rem] text-gray-500 line-clamp-2">{data.overview}</p>
            </div>
        </Link>
    );
}

export default MovieItemSearch;
