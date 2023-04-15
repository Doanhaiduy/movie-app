import { Fragment } from 'react';
import Header from '../Components/Header/';
import Sidebar from '../Components/Sidebar/';

function DefaultLayout({ children }) {
    return (
        <div className="">
            <Header />
            <div className="flex items-center">
                <div className="sm:w-[250px] w-0">
                    <Sidebar />
                </div>
                <div className="flex-1 mt-[74px]">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
