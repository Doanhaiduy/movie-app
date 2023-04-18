import { ADD_TO_FAVORITE, DELETE_FAVORITE, HANDLE_DISABLE_BTN, SET_CURRENT_MOVIE, SET_THEME } from './Constants';

export const addToFavorite = (payload) => {
    return {
        type: ADD_TO_FAVORITE,
        payload,
    };
};

export const deleteFavorite = (payload) => {
    return {
        type: DELETE_FAVORITE,
        payload,
    };
};

export const handleDisableBtn = (payload) => {
    return {
        type: HANDLE_DISABLE_BTN,
        payload,
    };
};

export const setCurrentMovie = (payload) => {
    return {
        type: SET_CURRENT_MOVIE,
        payload,
    };
};

export const setTheme = (payload) => {
    return {
        type: SET_THEME,
        payload,
    };
};
