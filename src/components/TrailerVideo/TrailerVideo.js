import { Fragment, useEffect, useContext, useState } from 'react';
import { movieInfo } from '~/services';
import ReactPlayer from 'react-player';
import { FavoriteContext } from '~/store';
import { setCurrentMovie } from '~/store/actions';

function TrailerVideo({ id }) {
    console.log(id);
    const [movie, setMovie] = useState('');
    const [state, dispatch] = useContext(FavoriteContext);
    const currentMovie = state.currentMovie.movieCurrentObj;

    const fetchApi = async (id) => {
        const result = await movieInfo(id);
        console.log(result);
        setMovie(result.results[0].key);
        dispatch(setCurrentMovie({ obj: currentMovie, url: result.results[0].key }));
    };
    useEffect(() => {
        fetchApi(id);
    }, [id]);
    return (
        <ReactPlayer
            width={700}
            // height={00}
            style={{ borderRadius: '10px' }}
            url={`https://www.youtube.com/watch?v=${movie}`}
            controls={false}
        />
    );
}

export default TrailerVideo;
