import { Fragment, useState } from 'react';
import ChatSearchMovie from './ChatSearchMovie';
import { Link } from 'react-router-dom';
import { search as searchService } from '~/services';
import ItemMovie from './ItemMovie';
const select = [
    {
        title: 'Hi, can you recommend an action movie?', //user question
        children: [
            {
                title: 'Sure, how about action movie 2?',
                answer: ['What is it about?', 'Is it any good?'], //system answer
                children: [
                    {
                        answer: [
                            'Action movie 2 is about a secret agent who tries to stop a terrorist attack.',
                            'Yes, it has received positive reviews from both critics and audiences.',
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: 'Can you suggest a comedy movie?',
        children: [
            {
                title: 'How about we watch action movie 2?',
                answer: [
                    'That sounds like an action movie. Do you have any comedy recommendations?',
                    "Okay, let's watch it!",
                ],
                children: [
                    {
                        answer: [
                            'Sure, how about comedy movie 1? It is about a group of friends who go on a road trip.',
                            'Great, enjoy the movie!',
                        ],
                        children: [
                            {
                                answer: [
                                    'Comedy movie 1 is known for its witty humor and hilarious situations.',
                                    'It is a great movie to watch with friends and family.',
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                title: 'How old is Lorem Ipsum?',
                answer: [
                    "I'm sorry, I don't understand. Could you please rephrase the question?",
                    "I'm not sure. Would you like me to look it up?",
                ],
                children: [
                    {
                        answer: ['Sure, please look it up.'],
                        children: [
                            {
                                answer: [
                                    'Lorem Ipsum is a dummy text used in printing and typesetting industry.',
                                    'It does not have a specific age because it is a piece of meaningless text.',
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: 'Do you have any horror movie suggestions?',
        children: [
            {
                title: 'How about a thriller movie called "The Shining"?',
                children: [
                    {
                        answer: ['What is it about?', 'Is it scary?'],
                        children: [
                            {
                                answer: [
                                    '"The Shining" is about a family who becomes the caretakers of a hotel during the winter.',
                                    'Yes, it is considered one of the scariest movies of all time.',
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                title: 'What is the origin of Lorem Ipsum?',
                children: [
                    {
                        title: 'What is Lorem Ipsum?',
                        answer: [
                            'Lorem Ipsum is a dummy text used in printing and typesetting industry.',
                            'It is often used as a placeholder text for layout design.',
                        ],
                        children: [
                            {
                                title: 'Why do we use it?',
                                answer: [
                                    'We use Lorem Ipsum because it allows us to focus on the design without getting distracted by the content.',
                                    'It helps us to visualize how the final product will look like with text.',
                                ],
                                children: [
                                    {
                                        answer: [
                                            "Lorem Ipsum has been used as the industry's standard dummy text since the 1500s.",
                                            'It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

function ChatWindowChildren({ handleMoveChatOnline, name }) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const [optionChat, setOptionChat] = useState(select);
    const [movies, setMovies] = useState([]);
    const [onSearch, setOnSearch] = useState(false);
    // const [chatUser, setChatUser] = useState('');

    const handleSearchMovie = (searchInput) => {
        setOnSearch(true);
        const fetchApi = async (searchInput) => {
            const result = await searchService(searchInput);
            setMovies(result.results);
        };
        fetchApi(searchInput);
    };
    return (
        <Fragment>
            <div className="p-[30px] pt-[16px] min-h-[320px] max-h-[320px] overflow-y-auto">
                <div>
                    <div className="my-[10px]">
                        <span className="text-[1rem] block text-center my-[12px]">
                            Chat started at {hours}:{minutes}:{seconds}
                        </span>
                        <div className="relative  mt-[5px] flex  ">
                            <img
                                className="w-[40px] h-[40px] rounded-[50%] mt-[auto]"
                                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/307874360_1427033874453040_2021416674074107398_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=wCtfeqk-FgYAX9xEiul&_nc_oc=AQlnDImlzXKNBkaY23IqU6f6g2n48Am9pFNeRW1dED55ZbtIEvgsNHI0X9qQAg0y8PJ6nmxHcpn2prLenZbHVU8y&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBi-dVFM2cjiXzq1EwIngrg1XWuim4Fe2Woa5q9eDeGhg&oe=6441C608"
                                alt=""
                            />
                            {movies.length > 0 ? (
                                <div>
                                    <div className="ml-[12px] grid grid-cols-2 gap-[5px]">
                                        {movies.map((movie, index) => (
                                            <ItemMovie key={index} data={movie} />
                                        ))}
                                    </div>
                                    <h2 className="inline-block p-4 text-[#fff] max-w-max w-full text-[1.3rem] rounded-[10px] ml-[12px] mt-[12px] bg-blue-500">
                                        Here are the movies you might be looking for
                                    </h2>
                                </div>
                            ) : null}
                            <div
                                className={
                                    movies.length > 0
                                        ? 'hidden flex-col ml-[6px] gap-[8px] w-[70%] '
                                        : 'inline-flex flex-col ml-[6px] gap-[8px] w-[70%] '
                                }
                            >
                                {!optionChat[0].answer ? (
                                    <Fragment>
                                        <p className="capitalize inline-block p-4 text-[#fff] max-w-max  text-[1.3rem] rounded-[10px]  bg-blue-500">
                                            Hi {name} !
                                        </p>
                                        <p className="inline-block p-4 text-[#fff] max-w-max text-[1.3rem] rounded-[10px]  bg-blue-500">
                                            What would you like to do ?
                                        </p>
                                    </Fragment>
                                ) : (
                                    optionChat[0].answer.map((answer, index) => (
                                        <p
                                            key={index}
                                            className="inline-block p-4 text-[#fff] max-w-max text-[1.3rem] rounded-[10px]  bg-blue-500"
                                        >
                                            {answer}
                                        </p>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            movies.length > 0
                                ? 'hidden flex-col items-center gap-y-[14px] mt-[30px]'
                                : 'flex flex-col items-center gap-y-[14px] mt-[30px]'
                        }
                    >
                        {optionChat[0].title ? (
                            optionChat.map((option, index) => (
                                <p
                                    key={index}
                                    onClick={() => {
                                        // setChatUser(option.title);
                                        option.children ? setOptionChat(option.children) : setOptionChat([]);
                                    }}
                                    className="py-[4px] text-center px-[14px] border-[1px] rounded-[999px] border-gray-600 flex"
                                >
                                    {option.title}
                                </p>
                            ))
                        ) : (
                            <h2 className="w-[100%] text-center text-gray-700 text-[1.5rem]">
                                Thank you for answering the questions. Have fun watching movies!
                            </h2>
                        )}
                    </div>
                </div>
            </div>

            <ChatSearchMovie handleSearchMovie={handleSearchMovie} movies={movies} />
        </Fragment>
    );
}

export default ChatWindowChildren;
