import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="w-full relative">
            <aside
                id="separator-sidebar"
                className="fixed top-[70px] left-0 z-40 lg:w-[15vw] sm:w-[10vw] h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-[#0f0f12]">
                    <ul className="space-y-6 font-medium">
                        <li>
                            <Link
                                to={'/other'}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                </svg>
                                <span className="ml-3">Discovery</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/other'}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Premium</span>
                                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                                    Pro
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/other'}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Coming soon</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                    3
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/other'}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Recent</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/other'}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Bookmarked</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/other'}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Top rated</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/other'}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Downloaded</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        <li>
                            <Link
                                to={'/other'}
                                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="gem"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                                    />
                                </svg>
                                <span className="ml-4">Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/other'}
                                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="ml-3">Help</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;
