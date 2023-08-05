import { Link } from "react-router-dom";
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const items = [
        {
            key: '1',
            label: (
                <Link to={'/profile'}>
                    <p>Profile</p>
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <p>Logout</p>
            ),
        },
    ];
    return (
        <div className="w-full h-[60px] shadow-md md:px-24 sm:px-12 px-6 z-[18]  fixed top-0 bg-gradient-to-b from-purple-800 to-gray-900">
            <div className="flex justify-between items-center h-full">
                <Link to={"/"}>
                    <div className="flex items-center justify-center cursor-pointer">
                        <BiMenuAltLeft
                            className="md:hidden text-white block text-3xl mr-4"
                            onClick={() => setMenuOpen(true)}
                        />
                        {/* <img src={logo} alt="" /> */}
                        <h2 className="text-white ml-3 font-bold text-xl mb-0">Naari</h2>
                    </div>
                </Link>
                <ul
                    className={`flex md:items-center md:justify-center transition ease-linear duration-500 md:flex-row md:static absolute top-[0] md:py-0 py-20 bg-white ${menuOpen ? "left-0" : "sm:left-[-320px] left-[-280px]"
                        } z-20 sm:w-[320px] w-[280px] md:h-[0] h-[100vh] flex-col mb-0`}
                >
                    {menuOpen && (
                        <AiOutlineClose
                            className="md:hidden absolute top-3 right-3 text-3xl font-bold cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        />
                    )}
                    <Link to={"/landingPage"}>
                        <li className="text-white mb-0 md:my-0 my-7 md:mx-10 md:ml-0 ml-12 font-semibold text-lg mx-4">
                            Home
                        </li>
                    </Link>
                    <Link to={"/about"}>
                        <li className="text-white mb-0 md:my-0 my-7 md:mx-10 md:ml-0 ml-12  font-semibold text-lg mx-4">
                            About
                        </li>
                    </Link>
                    <Link to={"/Testimonials"}>
                        <li className="text-white mb-0 md:my-0 my-7 md:mx-10 md:ml-0 ml-12  font-semibold text-lg mx-4">
                        Testimonials
                        </li>
                    </Link>
                    <Link to={"/contact"}>
                        <li className="text-white mb-0 md:my-0 my-7 md:mx-10 md:ml-0 ml-12  font-semibold text-lg mx-4">
                            Contact
                        </li>
                    </Link>

                </ul>
                <div className="flex items-center">
                    {/* <AiOutlineSearch className="text-2xl " /> */}

                    {/* <Link to={"/"}>
                        <button className=" px-4 py-[6px] rounded-lg bg-[#D14095] text-white transition duration-300">
                           Log Out
                        </button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};
export default Navbar;