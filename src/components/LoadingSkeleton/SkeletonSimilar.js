import Skeleton from 'react-loading-skeleton';

function SkeletonSimilar({ cards = 1 }) {
    return Array(cards)
        .fill(0)
        .map((item, index) => (
            <div
                key={index}
                className="p-[10px] px-4 lg:h-[220px] h-[450px] flex flex-col items-center rounded-[15px] shadow lg:flex-row w-full overflow-hidden "
            >
                <div className="lg:h-full lg:w-[50%] h-[50%] w-full lg:mb-0 mb-[20px]">
                    <Skeleton height={'100%'} width={'100%'} className="" />
                </div>

                <div className="flex flex-col lg:w-[50%] w-full lg:h-full h-[50%] justify-center  lg:pl-[10px] leading-normal overflow-x-hidden p-4 lg:p-0">
                    <Skeleton height={30} width={'100%'} className="mb-2" />
                    <Skeleton height={12} width={'100%'} count={5} className="" />
                </div>
            </div>
        ));
}

export default SkeletonSimilar;
