import { Link } from 'react-router-dom';
import { MovieContext } from '~/store';
import { setCurrentMovie } from '~/store/actions';
import { useContext } from 'react';

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
            className={` flex flex-col overflow-hidden rounded-xl  bg-cover bg-center bg-no-repeat relative`}
        >
            <img src={a} alt="" className="h-[70%] w-full object-cover" />
            <div className=" flex items-start justify-between  bg-slate-500 p-[4px]">
                <div className="  text-white lg:pt-24">
                    <h3 className="text-xl text-[1rem] font-bold line-clamp-1">{data.title}</h3>

                    <p className="text-[1rem]">{data.release_date}</p>
                </div>
            </div>
        </Link>
    );
}

export default ItemMovie;
