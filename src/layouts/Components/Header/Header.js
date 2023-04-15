import { Link } from 'react-router-dom';

import routes from '~/config/routes';
import NavItem from '~/components/NavItem/';

function Header() {
    return (
        <div className="w-full max-w-full bg-[#0f0f12] fixed z-50 hidden sm:block">
            <div className="flex lg:justify-between p-10 w-full text-[#fff] lg:px-[80px] lg:mx-auto justify-center">
                <nav className="flex text-[1.6rem] font-medium ">
                    <NavItem
                        title="Home"
                        className={({ isActive }) =>
                            isActive
                                ? 'mx-[16px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem] border-b-[2px] border-[--primary]'
                                : 'mx-[16px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem]'
                        }
                        to={routes.home}
                    >
                        Home
                    </NavItem>
                    <NavItem
                        title="Movies"
                        className={({ isActive }) =>
                            isActive
                                ? 'mx-[16px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem] border-b-[2px] border-[--primary]'
                                : 'mx-[16px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem]'
                        }
                        to={routes.movies}
                    >
                        Movies
                    </NavItem>
                    <NavItem
                        title="Favorite"
                        className={({ isActive }) =>
                            isActive
                                ? 'mx-[16px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem] border-b-[2px] border-[--primary]'
                                : 'mx-[16px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem]'
                        }
                        to={routes.favorite}
                    >
                        Favorite
                    </NavItem>
                    <NavItem
                        title="Shows"
                        className={({ isActive }) =>
                            isActive
                                ? 'mx-[16px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem] border-b-[2px] border-[--primary]'
                                : 'mx-[16px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem]'
                        }
                        to={routes.shows}
                    >
                        Shows
                    </NavItem>
                    <NavItem
                        title="Comedy"
                        className={({ isActive }) =>
                            isActive
                                ? 'mx-[16px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem] border-b-[2px] border-[--primary]'
                                : 'mx-[16px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem]'
                        }
                        to={routes.comedy}
                    >
                        Comedy
                    </NavItem>
                    <NavItem
                        title="Music Videos"
                        className={({ isActive }) =>
                            isActive
                                ? 'mx-[16px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem] border-b-[2px] border-[--primary]'
                                : 'mx-[16px] hover:border-b-[2.5px] hover:border-[--primary] leading-[2rem]'
                        }
                        to={routes.musicVideo}
                    >
                        Music Videos
                    </NavItem>
                </nav>
                <div className="lg:flex hidden">
                    <Link to={routes.home} className="mx-[16px] ">
                        Search
                    </Link>
                    <Link to={routes.home} className="mx-[16px] ">
                        Subscribe
                    </Link>
                    <Link to={routes.home} className="mx-[16px] ">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
