import * as httpRequest from '~/utils/httpRequest';

const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
export const search = async (query, type = 'less') => {
    try {
        const res = await httpRequest.get('search/movie', {
            params: {
                api_key: API_KEY,
                query,
                type,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};


