import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';
function Navbar(){
    return(
        <>
        <div className="header">
            <div className="navbar">
                <ul>
                    <div className="nav">
                        <div className="head">
                            <a>DONATOO</a>
                        </div>
                    <li><Link to='/Home'>HOME</Link></li>
                    <li>ABOUT US</li>
                    <li>GALLERY</li>
                    <li>SERVICES</li>
                    <li>CONTACT</li>
                    </div>
                </ul>
            </div>
        </div>
        </>
    );
}
export default Navbar;