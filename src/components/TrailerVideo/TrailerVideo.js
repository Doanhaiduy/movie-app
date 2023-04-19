import { useEffect, useContext, useState } from 'react';

import { movieInfo } from '~/services';
import ReactPlayer from 'react-player';
import { MovieContext } from '~/store';
import { setCurrentMovie } from '~/store/actions';

function TrailerVideo({ id }) {
    const [movie, setMovie] = useState('');
    const [state, dispatch] = useContext(MovieContext);
    const currentMovie = state.currentMovie.movieCurrentObj;

    const fetchApi = async (id) => {
        const result = await movieInfo(id);
        setMovie(result.results[0].key);
        dispatch(setCurrentMovie({ obj: currentMovie, url: result.results[0].key }));
    };
    useEffect(() => {
        fetchApi(id);
    }, [id]);
    return (
        <ReactPlayer
            width={'50vw'}
            url={`https://www.youtube.com/watch?v=${movie}`}
            controls={false}
        />
    );
}

export default TrailerVideo;
