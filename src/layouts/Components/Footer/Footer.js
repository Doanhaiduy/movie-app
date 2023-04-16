import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="flex justify-center items-center flex-col py-[30px] bg-slate-500  gap-y-[20px] text-gray-300 text-[1.2rem]">
            <div className="">
                <img
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
                    <Link to="https://www.facebook.com/DoanHaiDuy.Profile/" target="_blank" className="text-[#fff]">
                        Doan Hai Duy
                    </Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
