import { ADD_TO_FAVORITE, DELETE_FAVORITE, HANDLE_DISABLE_BTN, SET_CURRENT_MOVIE, SET_THEME } from './Constants';

const favoriteMoviesLocal = JSON.parse(localStorage.getItem('moviesFavorite')) || [];
const movieCurrent = JSON.parse(localStorage.getItem('movieCurrent')) || '';
export const initState = {
    favoriteMovies: [...favoriteMoviesLocal],
    idMoviesInFavorite: favoriteMoviesLocal.map((item) => item.id),
    currentMovie: {
        movieCurrentObj: movieCurrent.movieCurrentObj,
        movieCurrentURL: movieCurrent.movieCurrentURL,
    },
    isDarkMode: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE: {
            const newState = {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.payload],
            };
            return newState;
        }
        case DELETE_FAVORITE: {
            const newFavoriteMovies = state.favoriteMovies.filter((item, index) => index !== action.payload);
            // localStorage.setItem('moviesFavorite', JSON.stringify(newFavoriteMovies));

            const newState = {
                ...state,
                favoriteMovies: [...newFavoriteMovies],
            };
            localStorage.setItem('moviesFavorite', JSON.stringify(newState.favoriteMovies));
            return newState;
        }
        case HANDLE_DISABLE_BTN: {
            const newState = {
                ...state,
                idMoviesInFavorite: [...state.idMoviesInFavorite, action.payload],
            };
            return newState;
        }
        case SET_CURRENT_MOVIE: {
            localStorage.setItem(
                'movieCurrent',
                JSON.stringify({
                    movieCurrentObj: action.payload.obj,
                    movieCurrentURL: action.payload.url ? action.payload.url : '',
                }),
            );
            const newState = {
                ...state,
                currentMovie: {
                    ...state.currentMovie,
                    movieCurrentObj: action.payload.obj,
                    movieCurrentURL: action.payload.url ? action.payload.url : '',
                },
            };
            return newState;
        }
        case SET_THEME: {
            console.log('prev: ', state.isDarkMode);
            const newsState = {
                ...state,
                isDarkMode: state.isDarkMode ? false : true,
            };
            console.log('next: ', newsState.isDarkMode);

            return newsState;
        }
        default:
            throw new Error('invalid actions');
    }
};

export default reducer;
