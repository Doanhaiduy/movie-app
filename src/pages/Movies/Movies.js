import { useEffect } from 'react';

import ListMovies from '~/components/ListMovies/';

function Movies() {
   
    useEffect(() => {
        document.title = 'Movies';
    }, []);
    return (
        <div>
            <h1 className="text-5xl text-center font-bold text-[green] mt-6">Movies</h1>
            <div className="px-[20px]">
                <ListMovies />
            </div>
        </div>
    );
}

export default Movies;
