import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [buttonName, setButtonName] = useState("Log In");

    useEffect(()=>{
    }, [buttonName]);

    const onlineStatus = useOnlineStatus();


    return (
        <div className="flex justify-between bg-pink-100 shadow-2xl mt-2 h-40">
        <div className="logo-container">
            <img className="ml-4 mt-4 w-40 shadow-2xl" src={LOGO_URL}>
            </img>
        </div>
        <div className="flex item-center px-8">
            <ul className="flex p-14 m-4 justify-between">
                <li className="px-4">
                    Online Status : {onlineStatus ? '🟢' : '🔴'}
                </li>
                <li className="px-4">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="px-4">
                    <Link to="/grocery">
                        Grocery
                    </Link>
                </li>
                <li className="px-4">
                    <Link to="/about">
                        About Us
                    </Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">
                        Contact Us
                    </Link>
                </li>
                <li className="px-4">
                    <Link to="/">
                        Cart
                    </Link>
                </li>
                <button className="px-4 border-solid black" onClick={()=>{
                        buttonName==="Log In" 
                        ? setButtonName("Log Out") 
                        : setButtonName("Log In");
                    }}
                >
                {buttonName}
                </button>
            </ul>
        </div>
        </div>
    );
};

export default Header;