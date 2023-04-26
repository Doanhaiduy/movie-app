import { faComment, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState, useContext } from 'react';

import ChatWindow from './ChatWindow/';
import { MovieContext } from '~/store';

function ChatBox() {
    const [openChat, setOpenChat] = useState(false);
    const [state, dispatch] = useContext(MovieContext);

    const isDarkMode = state.isDarkMode;

    const handleOpenChat = () => {
        openChat ? setOpenChat(false) : setOpenChat(true);
    };
    return (
        <div className="fixed sm:right-[60px] sm:bottom-[80px] right-[60px] bottom-[80px] z-30  cursor-pointer font-semibold  gap-x-[6px] transition-all">
            {!openChat ? (
                <div
                    className={` transition-colors duration-500 select-none px-[16px] py-[10px] rounded-[999px] ${
                        isDarkMode ? 'bg-slate-700 text-white ' : 'bg-slate-100 text-slate-700'
                    }`}
                    onClick={handleOpenChat}
                >
                    <FontAwesomeIcon className="text-[2rem] sm:mr-[8px]" icon={faComment} />
                    <span className="sm:inline hidden">Chat Box</span>
                </div>
            ) : (
                <Fragment>
                    <div className="relative">
                        <FontAwesomeIcon
                            className={`transition-colors duration-500 select-none  px-[16px] py-[10px] rounded-[999px] text-[2rem]  ${
                                isDarkMode ? 'bg-slate-700 text-white ' : 'bg-slate-100 text-slate-700'
                            }`}
                            icon={faXmark}
                            onClick={handleOpenChat}
                        />
                        <ChatWindow handleOpenChat={handleOpenChat} isDarkMode={isDarkMode} />
                    </div>
                </Fragment>
            )}
        </div>
    );
}

export default ChatBox;
