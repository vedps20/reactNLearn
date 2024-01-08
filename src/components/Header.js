import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [buttonName, setButtonName] = useState("Log In");

    useEffect(()=>{
    }, [buttonName]);


    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}>
            </img>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Cart
                    </Link>
                </li>
            <button className="login" onClick={()=>{
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