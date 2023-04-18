import { faHeart, faMusic, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faFilm, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import routes from '~/config/routes';
import { MovieContext } from '~/store';
import { useContext } from 'react';

function SidebarFooter() {
    const [state, dispatch] = useContext(MovieContext);
    const isDarkMode = state.isDarkMode;

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <nav
            className={`fixed left-0 right-0 bottom-0  flex sm:hidden items-center justify-between  px-10
            ${isDarkMode ? 'text-gray-500 bg-slate-900 ' : 'bg-gray-300 text-gray-500'}`}
        >
            <NavLink
                onClick={handleScrollToTop}
                className={({ isActive }) =>
                    isActive
                        ? `flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center ${
                              isDarkMode ? 'text-[#fff]' : ' text-[#000]'
                          } font-[500]`
                        : 'flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center'
                }
                to={routes.home}
            >
                <FontAwesomeIcon icon={faHome} />
                Home
            </NavLink>
            <NavLink
                onClick={handleScrollToTop}
                className={({ isActive }) =>
                    isActive
                        ? `flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center ${
                              isDarkMode ? 'text-[#fff]' : ' text-[#000]'
                          } font-[500]`
                        : 'flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center'
                }
                to={routes.movies}
            >
                <FontAwesomeIcon icon={faFilm} />
                Movies
            </NavLink>
            <NavLink
                onClick={handleScrollToTop}
                className={({ isActive }) =>
                    isActive
                        ? `flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center ${
                              isDarkMode ? 'text-[#fff]' : ' text-[#000]'
                          } font-[500]`
                        : 'flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center'
                }
                to={routes.favorite}
            >
                <FontAwesomeIcon icon={faHeart} />
                Favorite
            </NavLink>
            <NavLink
                onClick={handleScrollToTop}
                className={({ isActive }) =>
                    isActive
                        ? `flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center ${
                              isDarkMode ? 'text-[#fff]' : ' text-[#000]'
                          } font-[500]`
                        : 'flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center'
                }
                to={routes.shows}
            >
                <FontAwesomeIcon icon={faVideo} />
                Shows
            </NavLink>
            <NavLink
                onClick={handleScrollToTop}
                className={({ isActive }) =>
                    isActive
                        ? `flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center ${
                              isDarkMode ? 'text-[#fff]' : ' text-[#000]'
                          } font-[500]`
                        : 'flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center'
                }
                to={routes.musicVideo}
            >
                <FontAwesomeIcon icon={faMusic} />
                Music
            </NavLink>
        </nav>
    );
}

export default SidebarFooter;
