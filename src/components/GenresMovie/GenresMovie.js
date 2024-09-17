import { useEffect, useState } from 'react';

function GenresMovie({ id = 603692 }) {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
            .then((Response) => Response.json())
            .then((data) => {
                setGenres(data.genres);
            });
    }, [id]);
    return genres.slice(0, 5).map((item, index) => <span key={index}>{item.name}</span>);
}

export default GenresMovie;
