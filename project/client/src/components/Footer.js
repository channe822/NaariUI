import { Link } from "react-router-dom";
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";

const Footer = () => {

    //     return (

    //     //     <footer>
    //     //     {/* <div className="w-full h-[60px] shadow-md md:px-24 sm:px-12 px-6 z-[18]  bg-gradient-to-b from-purple-800 to-gray-900">
    //     //         <div className="flex  items-center h-5">

    //     // <p>copyright @Naari 2023</p>
    //     //         </div> */}
    //     //     </div></footer>


    //     );
    // };

    return (
        <footer>
            <div className="w-full flex h-8 shadow-md md:px-24 sm:px-12   bg-gradient-to-b from-gray-900 to-purple-800">
                <div className=" mr-auto ml-auto my-auto ">

                    <p className=" text-center  text-white font-mono ">&copy; 2023 Naari | All rights reserved.</p>       
                     </div>
                     </div>
        </footer>
    );
};

export default Footer;


