import * as httpRequest from '~/utils/httpRequest';
const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';

export const cast = async (id) => {
    try {
        const res = await httpRequest.get(`movie/${id}/credits`, {
            params: {
                api_key: API_KEY,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
