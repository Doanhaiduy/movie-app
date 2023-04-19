import Skeleton from 'react-loading-skeleton';

function SkeletonCard({ cards }) {
    return Array(cards)
        .fill(0)
        .map((item, index) => (
            <div key={index} className="">
                <Skeleton height={300} />
                <div className="border-[1px] p-[12px]">
                    <Skeleton height={40} className="mt-[6px]" />
                    <Skeleton height={24} width={80} className="mt-[12px]" />
                    <div className="mt-[6px]">
                        <Skeleton count={1} height={40} />
                        <Skeleton count={1} height={30} />
                    </div>
                </div>
            </div>
        ));
}

export default SkeletonCard;
