import Skeleton from 'react-loading-skeleton';

function SkeletonCard({ cards = 1 }) {
    return Array(cards)
        .fill(0)
        .map((item, index) => (
            <div key={index} className="">
                <div className="w-full mx-auto mb-[12px] flex flex-col  items-center">
                    <Skeleton className="mb-[15px]" height={60} width={'60vw'} />
                    <Skeleton className="mb-[4px] mt-[20px] " width={336} height={30} />
                </div>
                <div className="p-[20px] overflow-hidden grid grid-cols-4 sm:grid-cols-4 gap-x-[12px] mx-auto sm:h-[360px] lg:w-[70vw] border-[1px]">
                    <div className=" sm:h-[100%] ml-[5%] sm:ml-0 w-[90%] h-[50vh] object-cover rounded-[12px] col-span-4 sm:col-span-1">
                        <Skeleton height={'100%'} width={'100%'} />
                    </div>

                    <div className="flex flex-col gap-y-[12px] justify-center col-span-2 sm:col-span-1 ml-[10%] max-w-[150px]">
                        <Skeleton height={27} className="mt-[20px]" />
                        <Skeleton height={27} className="mt-[20px]" />
                        <Skeleton height={27} className="mt-[20px]" />
                        <Skeleton height={27} className="mt-[20px]" />
                    </div>
                    <div className="flex flex-col gap-y-[12px] justify-center col-span-2 sm:col-span-1 ml-[10px] max-w-[150px]">
                        <Skeleton height={27} className="mt-[20px]" />
                        <Skeleton height={27} className="mt-[20px]" />
                        <Skeleton height={27} className="mt-[20px]" />
                        <Skeleton height={27} className="mt-[20px]" />
                    </div>
                    <div className="flex justify-center sm:items-center flex-row col-span-4 mt-[24px] gap-x-6 sm:col-span-1 sm:flex-col  ">
                        <Skeleton
                            className=" flex justify-center items-center max-w-[150px] max-h-[40px]font-bold  px-[12px] py-0 sm:py-[6px]  "
                            height={40}
                            width={200}
                        />
                        <Skeleton
                            className="mb-[20px] flex justify-center items-center max-w-[150px] max-h-[40px]font-bold  px-[12px] py-0 sm:py-[6px]  "
                            height={40}
                            width={200}
                        />
                    </div>
                </div>
            </div>
        ));
}

export default SkeletonCard;
