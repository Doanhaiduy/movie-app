import MovieItemSearch from '~/components/MovieItemSearch/';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { search } from '~/services';
import { useDebounce } from '~/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function SearchMovie({ activeSearch = false }) {
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isShowResult, setIsShowResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const inputRef = useRef();

    const debounceValue = useDebounce(searchInput);

    useEffect(() => {
        if (activeSearch) {
            inputRef.current.focus();
        }
        const fetchApi = async () => {
            setIsLoading(true);
            const result = await search(debounceValue);
            setSearchResult(result.results);
            setIsLoading(false);
        };
        fetchApi();
    }, [debounceValue]);

    const handleShowResult = () => {
        setIsShowResult(true);
    };
    const handleHideResult = () => {
        setSearchResult([]);
    };

    const handleClickMovieItem = () => {
        setSearchInput('');
        setSearchResult([]);
    };
    return (
        <Tippy
            placement="bottom"
            offset={[-25, 25]}
            interactive
            visible={searchResult.length > 0 && isShowResult}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div
                    className="bg-white overscroll-y-contain  w-[90vw] sm:w-[600px] rounded-[2px] max-h-[80vh] overflow-y-auto"
                    tabIndex="-1"
                    {...attrs}
                >
                    <PopperWrapper>
                        {searchResult.map((item, index) => (
                            <MovieItemSearch key={index} data={item} onClick={handleClickMovieItem} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className="sm:flex-1 flex items-center">
                <input
                    ref={inputRef}
                    value={searchInput}
                    onFocus={handleShowResult}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                    type="text"
                    placeholder="Search movie..."
                    className=" text-gray-700 sm:mx-5 sm:flex-1 rounded-[999px] border-none outline-none py-[6px] px-3 "
                />
                <FontAwesomeIcon
                    className={
                        !isLoading
                            ? 'text-transparent ml-[12px] sm:ml-0'
                            : 'text-[#fff] animate-spin ml-[12px] sm:ml-0 '
                    }
                    icon={faSpinner}
                />
            </div>
        </Tippy>
    );
}

export default SearchMovie;
