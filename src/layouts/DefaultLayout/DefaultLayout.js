import { Fragment } from 'react';

import Header from '../Components/Header/';
import Sidebar from '../Components/Sidebar/';
import Footer from '../Components/Footer/Footer';

function DefaultLayout({ children, noUseSide = false }) {
    return (
        <div className="">
            <Header />
            <div className="flex items-center ">
                {noUseSide ? (
                    <div className=" mt-[72px] w-[100vw] ">{children}</div>
                ) : (
                    <>
                        {/* <div className="hidden lg:w-[15vw] lg:block ">
                            <Sidebar />
                        </div> */}
                        <div className="  lg:mt-[74px] mt-[72px] lg:w-[100vw] w-[100vw] ">{children}</div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
