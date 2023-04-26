import * as httpRequest from '~/utils/httpRequest';

const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
export const topRated = async (type = 'less') => {
    try {
        const res = await httpRequest.get('movie/top_rated', {
            params: {
                api_key: API_KEY,
                type,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
