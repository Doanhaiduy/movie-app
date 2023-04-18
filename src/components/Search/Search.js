import { useRef, useState, useContext } from 'react';
import { MovieContext } from '~/store';

function Search({ onSubmit }) {
    const [searchInput, setSearchInput] = useState('');
    const [state, dispatch] = useContext(MovieContext);
    const isDarkMode = state.isDarkMode;

    const inputRef = useRef();

    return (
        <div className="w-[50vw] h-[60px] mx-auto mt-[26px]">
            <label
                htmlFor="default-search"
                className={`mb-2 text-sm font-medium sr-only  ${isDarkMode ? 'text-[#fff]' : 'text-gray-900'}`}
            >
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className={`w-10 h-10 ${isDarkMode ? 'text-[#fff]' : 'text-gray-500'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <input
                    ref={inputRef}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="search"
                    id="default-search"
                    className={`block w-full p-4 pl-[38px] pr-[85px] text-[1.8rem] rounded-lg   
                    ${
                        isDarkMode
                            ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                            : 'text-gray-900 border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
                    }`}
                    placeholder="Search Movies..."
                    required
                />
                <div
                    onClick={() => {
                        onSubmit(searchInput);
                        setSearchInput('');
                        inputRef.current.focus();
                    }}
                    type="text"
                    className={`
                    text-[2rem] select-none cursor-pointer absolute right-2.5 bottom-[0.6rem]  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-5 
                    ${
                        isDarkMode
                            ? 'text-gray-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            : 'text-[#fff] bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'
                    }`}
                >
                    Search
                </div>
            </div>
        </div>
    );
}

export default Search;
