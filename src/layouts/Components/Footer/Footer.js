import { Link } from 'react-router-dom';
import { useContext } from 'react';

import Image from '~/components/Image';
import { MovieContext } from '~/store';

function Footer() {
    const [state, dispatch] = useContext(MovieContext);
    const isDarkMode = state.isDarkMode;
    return (
        <footer
            className={`transition-colors duration-500 flex justify-center items-center flex-col py-[30px] ${
                isDarkMode ? 'text-slate-300 bg-gray-950 ' : 'bg-gray-200 text-slate-900'
            }  gap-y-[20px] text-[1.2rem] sm:mb-0 mb-[65px]`}
        >
            <div className="">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt=""
                    width={90}
                    height={90}
                />
            </div>
            <div className="flex flex-wrap justify-center gap-5 ">
                <Link>Write For Us</Link>
                <Link>Home</Link>
                <Link>Contact Us</Link>
                <Link>Terms</Link>
                <Link>Privacy</Link>
                <Link>About Us</Link>
                <Link>Fact Checking Policy</Link>
                <Link>Connections Policy</Link>
                <Link>Write For Us</Link>
            </div>
            <div className="text-center">
                <p className="">
                    &copy; Copyright -{' '}
                    <Link to="https://www.facebook.com/DoanHaiDuy.Profile/" target="_blank">
                        Doan Hai Duy
                    </Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
