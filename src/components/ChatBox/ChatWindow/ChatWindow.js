import { faCircle, faHandsClapping, faPaperPlane, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import Button from '~/components/Button/';
import routes from '~/config/routes';
import ChatWindowChildren from './ChatWindowChildren';

function ChatWindow({ handleOpenChat }) {
    const [name, setName] = useState('');
    const [option, setOption] = useState('');
    const [startChatOnline, setStartChatOnline] = useState(false);
    // const []

    const handleToChatOnline = (name) => {
        setStartChatOnline(true);
    };

    const handleMoveChatOnline = (name) => {
        setStartChatOnline(false);
    };

    return (
        <div className="cursor-auto w-[360px]  bottom-[150px] right-[30px]  h-[450px] bg-white fixed sm:right-[60px]  rounded-[16px] font-thin">
            <div className="w-full  font-thin text-white bg-gradient-to-r from-slate-900 to-slate-600 bg-opacity-90 rounded-t-[16px] py-[12px] px-[10px] flex items-center">
                <p className="">Let's chat? - We're online</p>
                <FontAwesomeIcon icon={faCircle} className="ml-[10px] text-[1rem] text-green-500" />
                <FontAwesomeIcon
                    icon={faXmark}
                    onClick={handleOpenChat}
                    className="ml-[90px] p-2 cursor-pointer text-[1.9rem]"
                />
            </div>
            {!startChatOnline ? (
                <Fragment>
                    <div className="p-[30px] min-h-[320px]  overflow-y-auto">
                        <p className="text-[1.4rem] text-center text-slate-900">
                            Hi!
                            <FontAwesomeIcon className="ml-[2px] " icon={faHandsClapping} /> Please fill out the form
                            below to start chatting with me next a available agent.
                        </p>

                        <form className="mt-[30px]">
                            <input
                                value={name}
                                placeholder="Name"
                                className="outline-gray-400 border-[1px] px-[10px] py-[6px] rounded-[999px] mb-[20px] w-full"
                                type="text"
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                placeholder="Email"
                                className="outline-gray-400 border-[1px] px-[10px] py-[6px] rounded-[999px] mb-[20px] w-full"
                                type="email"
                                required
                            />
                            <select
                                id="countries"
                                className=" border-[1px] px-[10px] py-[9px]  text-gray-900 rounded-[999px]  focus:outline-gray-400  w-full"
                                required
                                defaultValue={'DEFAULT'}
                                onChange={(e) => setOption(e.target.value)}
                            >
                                <option value="DEFAULT" disabled>
                                    Choose a option ...
                                </option>
                                <option value="chatOnline">Chat Online</option>
                                <option value="messenger">Messenger</option>
                            </select>
                            <Button
                                href="https://m.me/DoanHaiDuy.Profile"
                                target="_blank"
                                onClick={(e) => {
                                    if (
                                        (option === 'messenger' && name !== '') ||
                                        (option === 'messenger' && name === '')
                                    ) {
                                    } else {
                                        e.preventDefault();
                                        if (name !== '' && option === 'chatOnline') {
                                            handleToChatOnline(name);
                                        }
                                    }
                                }}
                                className="block bg-gradient-to-r from-slate-900 text-center to-slate-600 bg-opacity-90 w-full mt-[30px] rounded-[999px] px-[10px] py-[6px] text-white"
                            >
                                Start Chat
                            </Button>
                        </form>
                        <div className="mt-[30px]">
                            <span className="text-[1.3rem] w-full text-center block text-gray-600">
                                Powered by Doan Hai Duy
                            </span>
                        </div>
                    </div>
                </Fragment>
            ) : (
                <ChatWindowChildren handleMoveChatOnline={handleMoveChatOnline} name={name} />
            )}
        </div>
    );
}

export default ChatWindow;
