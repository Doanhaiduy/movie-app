import { ADD_TO_FAVORITE, DELETE_FAVORITE, HANDLE_DISABLE_BTN } from './Constants';

const favoriteMoviesLocal = JSON.parse(localStorage.getItem('moviesFavorite')) || [];
export const initState = {
    favoriteMovies: [...favoriteMoviesLocal],
    moviesInFavorite: favoriteMoviesLocal.map((item) => item.imdbID),
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE: {
            const newState = {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.payload],
            };
            console.log(state.moviesInFavorite);
            return newState;
        }
        case DELETE_FAVORITE: {
            const newFavoriteMovies = state.favoriteMovies.filter((item, index) => index !== action.payload);
            localStorage.setItem('moviesFavorite', JSON.stringify(newFavoriteMovies));
            const newState = {
                ...state,
                favoriteMovies: [...newFavoriteMovies],
            };
            return newState;
        }
        case HANDLE_DISABLE_BTN: {
            const newState = {
                ...state,
                moviesInFavorite: [...state.moviesInFavorite, action.payload],
            };
            return newState;
        }
        default:
            throw new Error('invalid actions');
    }
};

export default reducer;
