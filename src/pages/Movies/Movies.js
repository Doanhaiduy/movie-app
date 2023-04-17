import { useEffect } from 'react';

import ListMovies from '~/components/ListMovies/';

function Movies() {
    useEffect(() => {
        document.title = 'Movies';
    }, []);
    return (
        <div className="py-[30px] min-h-[100vh] bg-gradient-to-b from-[#0f0f12] to-slate-200">
            <h1 className="text-5xl text-center font-bold text-gray-300 mt-6 ">Movies</h1>
            <div className="px-[20px]">
                <ListMovies Page={'movies'} />
            </div>
        </div>
    );
}

export default Movies;
