import Skeleton from 'react-loading-skeleton';

function SkeletonOverView({ cards = 1 }) {
    return Array(cards)
        .fill(0)
        .map((item, index) => (
            <div key={index} className="w-[100%] flex  justify-between">
                <div className="pr-[24px] flex-1">
                    <Skeleton height={45} width={180} className=" mb-[20px]" />
                    <Skeleton height={18} width={'100%'} count={14} className="mb-[4px]" />
                </div>
                <div className="sm:w-[50vw] w-[40vw]">
                    <Skeleton height={45} width={180} className=" mb-[20px]" />
                    <Skeleton width={' 100%'} height={360} />
                </div>
            </div>
        ));
}

export default SkeletonOverView;
