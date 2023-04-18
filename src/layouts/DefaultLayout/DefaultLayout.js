import { Fragment } from 'react';

import Header from '../Components/Header/';
import Sidebar from '../Components/Sidebar/';
import Footer from '../Components/Footer/Footer';
import SidebarFooter from '~/layouts/Components/SidebarFooter';
import ChatBox from '~/components/ChatBox/';

function DefaultLayout({ children, noUseSide = false, title }) {
    return (
        <div className="">
            <Header title={title} />
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
            <SidebarFooter />
            <Footer />
            <ChatBox />
        </div>
    );
}

export default DefaultLayout;
