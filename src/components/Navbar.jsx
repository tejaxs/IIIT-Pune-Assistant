import { BiHandicap , BiChalkboard, BiText  } from "react-icons/bi";
import {BsSearch} from "react-icons/bs";
import React, { useState } from 'react'; // Import useState hook
import Popup from './Popup'; // Import the Popup component
import { useNavigate  } from 'react-router-dom'; // Import useHistory hook

export const Navbar = () => {
    let navigate = useNavigate(); 
    const toggleBot = () => {
        navigate("/bot")
    };
 
    return (
        <div className='nav'>
            <div className='upper-nav'>
                <img src="https://www.iiitp.ac.in/sites/default/files/logo-new.png" alt="" className='clg-img'/>
                <img src="https://www.iiitp.ac.in/sites/default/files/inline-images/gover-logo.jpg" alt="" className='india-img'/>
                <div className='panel-container'>
                    <div>
                        <img src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg" alt="" className='panel-img'/>
                        <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1319243779.1708732800&semt=ais" alt="" className='panel-img'/> 
                        <img src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png" alt="" className='panel-img'/>  
                    </div>
                    <div>
                        <BiHandicap/>
                        <BiChalkboard />
                        <BiText />
                    </div>
                </div>
            </div>
            <nav className="lower-nav">
                <ul className="nav-elements">
                    <li className="nav-element">
                        <a href="#">About</a>
                    </li>
                    <li className="nav-element">
                        <a href="#">Administration</a>
                    </li>
                    <li className="nav-element">
                        <a href="#">Academics</a>
                    </li>
                    <li className="nav-element">
                        <a href="#">Research</a>
                    </li>
                    <li className="nav-element">
                        <a href="#">People</a>
                    </li>
                    <li className="nav-element">
                        <a href="#">Life@IIITP</a>
                    </li>
                    <li className="nav-element">
                        <a href="#">Placement</a>
                    </li>
                    <li className="nav-element">
                        <a href="#">Notice</a>
                    </li>
                    <li className="nav-element">
                        <a href="#">Careers</a>
                    </li>
                    <li className="nav-element">
                        <a href="#">Contact Us</a>
                    </li>
                    <li className='nav-btn-container'>
                        <button className='nav-btn' onClick={toggleBot}><BsSearch /></button>
                    </li>
                </ul>
            </nav>
            <div className='hr-line'></div>
        </div>
    );
};
