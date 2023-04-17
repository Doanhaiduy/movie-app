import { faHeart, faMusic, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faFilm, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import routes from '~/config/routes';

function SidebarFooter() {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <nav className="fixed left-0 right-0 bottom-0 text-gray-500 flex sm:hidden items-center justify-between bg-slate-800 px-10 ">
            <NavLink
                onClick={handleScrollToTop}
                className={({ isActive }) =>
                    isActive
                        ? 'flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center text-white font-[500]'
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
                        ? 'flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center text-white font-[500]'
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
                        ? 'flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center text-white font-[500]'
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
                        ? 'flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center text-white font-[500]'
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
                        ? 'flex flex-col items-center px-5 py-6 gap-y-2  text-[1.2rem] justify-center text-white font-[500]'
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
