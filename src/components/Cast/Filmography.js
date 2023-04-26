import { useCallback, useEffect, useState } from 'react';
import { filmography as filmographyAPI } from '~/services';
import Image from '../Image/Image';

function Filmography({ id }) {
    const [listMovie, setListMovie] = useState([]);

    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

    const fetchApi = useCallback(async (id) => {
        const result = await filmographyAPI(id);
        setListMovie(result.results);
    }, []);

    useEffect(() => {
        fetchApi(id);
    }, [id, fetchApi]);
    return listMovie.slice(0, 5).map((movie, index) => (
        <div key={index} className="p-[10px] max-w-[130px] flex flex-col items-center justify-center flex-1">
            <div className="w-[full] min-h-[160px] rounded-[4px] overflow-hidden">
                <Image height="100%" src={IMG_PATH + movie.poster_path} />
            </div>
            <p className="text-center text-[1.2rem] font-medium py-[2px] px-[6px] line-clamp-2 min-h-[50px]">
                {movie.title}
            </p>
        </div>
    ));
}

export default Filmography;
