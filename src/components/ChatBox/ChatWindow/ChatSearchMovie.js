import { useEffect, useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ChatSearchMovie({ handleSearchMovie, movies }) {
    const [searchInput, setSearchInput] = useState('');

    return (
        <div className="flex items-center px-[30px] border-t-[2px]">
            <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter the name of the movie..."
                className=" outline-gray-400 sm:mt-[16px] mt-[8px] border-[1px] px-[10px] py-[6px] rounded-[999px] mb-[10px] w-[90%]"
                type="text"
            />
            <FontAwesomeIcon
                icon={faPaperPlane}
                className="ml-[12px] text-[2rem] cursor-pointer"
                onClick={() => {
                    handleSearchMovie(searchInput);
                    setSearchInput('');
                }}
            />
        </div>
    );
}

export default ChatSearchMovie;
