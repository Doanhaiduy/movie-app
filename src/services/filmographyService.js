import * as httpRequest from '~/utils/httpRequest';
const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
export const filmography = async (id) => {
    try {
        const res = await httpRequest.get(`discover/movie`, {
            params: {
                api_key: API_KEY,
                sort_by: 'vote_count.desc',
                with_cast: id,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
