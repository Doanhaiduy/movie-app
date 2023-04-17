import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import routes from '~/config/routes';
import NavItem from '~/components/NavItem/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchMovie from '../SearchMovie/SearchMovie';
import Image from '~/components/Image';

function Header({ title }) {
    const [activeSearch, setActiveSearch] = useState(false);
    const handleClick = () => {
        activeSearch ? setActiveSearch(false) : setActiveSearch(true);
    };

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="w-full max-w-full bg-[#0f0f12] fixed z-50 block">
            <div className="flex relative items-center lg:justify-between p-10 sm:w-full text-[#fff] lg:px-[80px] lg:mx-auto  justify-between w-[100vw]">
                <nav className="sm:flex hidden lg:text-[1.8rem] 2xl:text-[2.2rem] text-[1.2rem] font-medium ">
                    <NavItem
                        onClick={handleScrollToTop}
                        title="Home"
                        className={({ isActive }) =>
                            isActive
                                ? 'md:mx-[16px]  mx-[5px] hover:border-b-[2.5px]  hover:border-[--primary] leading-[2rem] border-b-[2px] border-[--primary]'
                                : 'md:mx-[16px]  mx-[5px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem]'
                        }
                        to={routes.home}
                    >
                        Home
                    </NavItem>
                    <NavItem
                        onClick={handleScrollToTop}
                        title="Movies"
                        className={({ isActive }) =>
                            isActive
                                ? 'md:mx-[16px]  mx-[5px] hover:border-b-[2.5px]  hover:border-[--primary] leading-[2rem] border-b-[2px] border-[--primary]'
                                : 'md:mx-[16px]  mx-[5px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem]'
                        }
                        to={routes.movies}
                    >
                        Movies
                    </NavItem>
                    <NavItem
                        onClick={handleScrollToTop}
                        title="Favorite"
                        className={({ isActive }) =>
                            isActive
                                ? 'md:mx-[16px]  mx-[5px] hover:border-b-[2.5px]  hover:border-[--primary] leading-[2rem] border-b-[2px] border-[--primary]'
                                : 'md:mx-[16px]  mx-[5px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem]'
                        }
                        to={routes.favorite}
                    >
                        Favorite
                    </NavItem>
                    <NavItem
                        onClick={handleScrollToTop}
                        title="Shows"
                        className={({ isActive }) =>
                            isActive
                                ? 'md:mx-[16px]  mx-[5px] hover:border-b-[2.5px]  hover:border-[--primary] leading-[2rem] border-b-[2px] border-[--primary]'
                                : 'md:mx-[16px]  mx-[5px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem]'
                        }
                        to={routes.shows}
                    >
                        Shows
                    </NavItem>
                    <NavItem
                        onClick={handleScrollToTop}
                        title="Comedy"
                        className={({ isActive }) =>
                            isActive
                                ? 'md:mx-[16px]  mx-[5px] hover:border-b-[2.5px]  hover:border-[--primary] leading-[2rem] border-b-[2px] border-[--primary]'
                                : 'md:mx-[16px]  mx-[5px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem]'
                        }
                        to={routes.comedy}
                    >
                        Comedy
                    </NavItem>
                    <NavItem
                        onClick={handleScrollToTop}
                        title="Music Videos"
                        className={({ isActive }) =>
                            isActive
                                ? 'md:mx-[16px]  mx-[5px] hover:border-b-[2.5px]  hover:border-[--primary] leading-[2rem] border-b-[2px] border-[--primary]'
                                : 'md:mx-[16px]  mx-[5px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem]'
                        }
                        to={routes.musicVideo}
                    >
                        Music
                    </NavItem>
                </nav>
                {/* <div className="lg:flex  hidden">
                    <Link to={routes.home} className="md:mx-[16px]  mx-[5px] ">
                        Subscribe
                    </Link>
                    <Link to={routes.home} className="md:mx-[16px]  mx-[5px] ">
                        Sign in
                    </Link>
                </div> */}
                <Link to={routes.home} className="sm:hidden">
                    <Image
                        src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
                        width={67}
                        alt=""
                        className="object-cover w-[67px]"
                    />
                </Link>
                {activeSearch ? (
                    <SearchMovie activeSearch={activeSearch} />
                ) : (
                    <h2 className="text-[2.4rem] font-semibold  text-center sm:hidden pr-10">{title}</h2>
                )}

                <div className="">
                    <FontAwesomeIcon
                        onClick={handleClick}
                        className="text-[1.8rem] ml-5 py-[4px] cursor-pointer font-bold"
                        icon={faSearch}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
