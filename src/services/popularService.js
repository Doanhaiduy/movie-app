import * as httpRequest from '~/utils/httpRequest';

const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
export const popular = async (type = 'less', pageNum) => {
    try {
        const res = await httpRequest.get('movie/popular', {
            params: {
                api_key: API_KEY,
                type,
                page: pageNum,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
