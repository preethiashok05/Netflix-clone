import React, { useEffect, useState } from 'react';
import "../styles/Nav.css";
import logo from "../Netflixlogo.png"


const Nav = () => {

    const [show , handleShow] = useState(false);
    useEffect(() => {

        window.addEventListener("scroll" , () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    } , []);


  
    return (
        <div className={`nav ${show && "nav__black"}`} >
            <img  src ={logo}
                alt ="logo"
                className="nav_logo"
             />

               <img  src ="https://tse2.mm.bing.net/th?id=OIP.Fn_JfIeC12rS1weLLJxdyQHaHa&pid=Api&P=0&w=300&h=300"
                alt ="logo"
                className="nav_avatar"
             />
           
        </div>
    );
};

export default Nav;