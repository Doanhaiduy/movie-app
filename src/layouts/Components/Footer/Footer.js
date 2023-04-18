import { Link } from 'react-router-dom';

import Image from '~/components/Image';

import { useContext } from 'react';
import { MovieContext } from '~/store';

function Footer() {
    const [state, dispatch] = useContext(MovieContext);
    const isDarkMode = state.isDarkMode;
    return (
        <footer
            className={` flex justify-center items-center flex-col py-[30px] ${
                isDarkMode ? 'bg-slate-500 text-slate-900 ' : 'bg-slate-700 text-slate-300'
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
                    <Link
                        to="https://www.facebook.com/DoanHaiDuy.Profile/"
                        target="_blank"
                        className={isDarkMode ? 'text-slate-900' : 'text-slate-300'}
                    >
                        Doan Hai Duy
                    </Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
