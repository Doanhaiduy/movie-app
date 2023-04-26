import Skeleton from 'react-loading-skeleton';

function SkeletonCast({ cards = 1 }) {
    return Array(cards)
        .fill(0)
        .map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-[6px] py-[8px]">
                <div className="w-[120px] h-[120px] ">
                    <Skeleton width={'100%'} height={'100%'} className="rounded-[50%]" />
                </div>
                <Skeleton height={20} width={'100px'} className="" />
            </div>
        ));
}

export default SkeletonCast;
