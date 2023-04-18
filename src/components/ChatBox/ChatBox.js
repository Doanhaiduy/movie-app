import { faComment, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import ChatWindow from './ChatWindow/';

function ChatBox() {
    const [openChat, setOpenChat] = useState(false);

    const handleOpenChat = () => {
        openChat ? setOpenChat(false) : setOpenChat(true);
    };
    return (
        <div className="fixed sm:right-[60px] sm:bottom-[80px] right-[60px] bottom-[80px] z-[1000]  cursor-pointer font-semibold  gap-x-[6px] transition-all">
            {!openChat ? (
                <div
                    className="bg-slate-700 select-none text-white px-[16px] py-[10px] rounded-[999px]"
                    onClick={handleOpenChat}
                >
                    <FontAwesomeIcon className="text-[2rem] mr-[8px]" icon={faComment} />
                    <span>Chat Box</span>
                </div>
            ) : (
                <Fragment>
                    <div className="relative">
                        <FontAwesomeIcon
                            className="bg-slate-700 select-none text-white px-[16px] py-[10px] rounded-[999px] text-[2rem]"
                            icon={faXmark}
                            onClick={handleOpenChat}
                        />
                        <ChatWindow handleOpenChat={handleOpenChat} />
                    </div>
                </Fragment>
            )}
        </div>
    );
}

export default ChatBox;
