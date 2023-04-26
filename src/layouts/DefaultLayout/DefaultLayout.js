import { SkeletonTheme } from 'react-loading-skeleton';
import { useContext } from 'react';

import { MovieContext } from '~/store';
import Header from '../Components/Header/';
import Sidebar from '../Components/Sidebar/';
import Footer from '../Components/Footer/Footer';
import SidebarFooter from '~/layouts/Components/SidebarFooter';
import ChatBox from '~/components/ChatBox/';

function DefaultLayout({ children, noUseSide = false, title }) {
    const [state, dispatch] = useContext(MovieContext);
    const isDarkMode = state.isDarkMode;

    return (
        <SkeletonTheme
            baseColor={` ${isDarkMode ? '#dbdbdb' : '#202020'}`}
            highlightColor={` ${isDarkMode ? '#f5f5f5' : '#444'}`}
        >
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
        </SkeletonTheme>
    );
}

export default DefaultLayout;
