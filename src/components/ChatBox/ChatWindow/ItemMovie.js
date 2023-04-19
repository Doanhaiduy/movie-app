import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { MovieContext } from '~/store';
import { setCurrentMovie } from '~/store/actions';
import Image from '~/components/Image/';

function ItemMovie({ data }) {
    const [state, dispatch] = useContext(MovieContext);

    const handleSetCurrentMovie = (payload) => {
        window.scrollTo(0, 0);
        dispatch(setCurrentMovie({ obj: payload }));
    };
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
    let a = IMG_PATH + data.poster_path;
    return (
        <Link
            to={'/movie/' + data.id}
            onClick={() => {
                handleSetCurrentMovie(data);
            }}
            className={` flex  flex-col overflow-hidden rounded-[8px]  bg-cover bg-center bg-no-repeat relative`}
        >
            <Image src={a} alt="" className="h-[70%] w-full object-cover" />
            <div className=" flex items-start justify-between  bg-slate-500 p-[4px] h-[30%]">
                <div className="  text-white ">
                    <h3 className="text-xl text-[1rem] font-bold line-clamp-2">{data.title}</h3>
                    <p className="text-[1rem]">{data.release_date}</p>
                </div>
            </div>
        </Link>
    );
}

export default ItemMovie;
