import { memo, useEffect, useState } from 'react';
import { infoCast as infoCastAPI } from '~/services';
import Image from '../Image/Image';
import Filmography from './Filmography';

function InfoCast({ onClick, id }) {
    const [infoCast, setInfoCast] = useState({});

    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

    const fetchApi = async (id) => {
        const result = await infoCastAPI(id);
        setInfoCast(result);
    };
    useEffect(() => {
        fetchApi(id);
    }, [id]);
    const handleContainerClick = (e) => {
        if (e.target.classList.contains('fixed')) {
            onClick();
        }
    };

    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-gray-500 z-[10000] bg-opacity-50 flex justify-center items-center"
            onClick={handleContainerClick}
        >
            <div className=" lg:w-[1000px] sm:w-[700px] w-[90%] h-[90vh]  bg-slate-400 sm:h-[600px] lg:h-[540px] rounded-[12px] relative p-[25px] overflow-hidden">
                <span
                    className="cursor-pointer text-[5rem] font-medium absolute top-[0] right-[20px]"
                    onClick={onClick}
                >
                    &times;
                </span>
                <div className="lg:flex gap-[25px]">
                    <div className="lg:h-[480px] h-[150px] w-[150px]  lg:w-[300px] sm:h-[280px] sm:w-[190px] sm:inline-block lg:block sm:p-4 block  mx-auto ">
                        <Image
                            src={`${IMG_PATH}${infoCast.profile_path}`}
                            alt=""
                            className="h-full w-full rounded-[50%]  sm:rounded-[6px] lg:max-w-[300px] sm:max-w-[190px] object-cover sm:inline lg:block"
                        />
                    </div>
                    <div className="flex-1 sm:max-w-[400px] sm:float-right lg:float-none lg:max-w-none mt-[12px] sm:mt-0 sm:min-w-[400px]">
                        <h2 className="text-center text-[2.4rem] font-medium mb-[12px] sm:mb-0">{infoCast.name}</h2>
                        <div className="">
                            <strong>Birthday: </strong>
                            <span className="text-[1.4rem] ">{infoCast.birthday}</span>
                        </div>
                        <div className="">
                            <strong>Place of birth: </strong>
                            <span className="text-[1.4rem] ">{infoCast.place_of_birth}</span>
                        </div>
                        <div className="">
                            <strong>Bio: </strong>
                            <span className="text-[1.4rem] line-clamp-[7] min-h-[147px] ">{infoCast.biography}</span>
                        </div>
                        <div className="sm:absolute lg:static sm:left-[20px] left-0 sm:bottom-[20px] bottom-[-300px] absolute overflow-auto ">
                            <strong className="sm:ml-[10px] ml-[16px] lg:ml-0">Filmography: </strong>
                            <div className="sm:flex grid grid-cols-3 sm:gap-0 gap-y-[100px] ml-[8px] sm:ml-0">
                                <Filmography id={id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCast;
