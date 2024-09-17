import { useEffect, useState, useCallback, memo } from 'react';
import { cast as castAPI } from '~/services';
import Image from '../Image/Image';
import { SkeletonCast } from '../LoadingSkeleton';
import InfoCast from './InfoCast';

function Cast({ id }) {
    const [casts, setCasts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isShowCast, setIsShowCast] = useState({
        active: false,
        id: '',
    });
    const [idCast, setIdCast] = useState('');
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

    const fetchApi = async (id) => {
        const result = await castAPI(id);
        setCasts(result.cast);
    };
    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        fetchApi(id);
    }, [id]);
    const handleShowInfoCast = (id) => {
        setIsShowCast(() => ({
            id,
            active: true,
        }));
    };

    const handleHideInfoCast = () => {
        setIsShowCast((prev) => ({
            ...prev,
            active: false,
        }));
    };
    return (
        <div className="flex max-w-[90vw] mx-auto overflow-x-auto gap-x-[20px] py-[8px] ">
            {isShowCast.active ? <InfoCast onClick={handleHideInfoCast} id={isShowCast.id} /> : null}
            {isLoading ? (
                <SkeletonCast cards={casts.length} />
            ) : (
                casts.map((cast, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-[6px] cursor-pointer"
                        onClick={() => {
                            handleShowInfoCast(cast.id);
                        }}
                    >
                        <div className="w-[120px] h-[120px] overflow-hidden">
                            <Image
                                src={`${IMG_PATH}${cast.profile_path}`}
                                className="w-full h-full object-cover rounded-[50%]"
                                alt=""
                            />
                        </div>
                        <div className="font-medium text-center">{cast.name}</div>
                        <p className="text-[1rem]">{cast.character}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default memo(Cast);
