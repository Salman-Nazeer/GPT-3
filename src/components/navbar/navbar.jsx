import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = ({setToggleMenu, toggleMenu }) => {
    return (
        <>
            <p>
                <a href="#home" onClick={() => setToggleMenu(!toggleMenu)}>Home</a>
            </p>
            <p>
                <a href="#wgpt3" onClick={() => setToggleMenu(!toggleMenu)}>What is GPT3?</a>
            </p>
            <p>
                <a href="#features" onClick={() => setToggleMenu(!toggleMenu)}>Case Studies</a>
            </p>
            <p>
                <a href="#possibility" onClick={() => setToggleMenu(!toggleMenu)}>Open AI</a>
            </p>
            <p>
                <a href="#blog" onClick={() => setToggleMenu(!toggleMenu)}>Library</a>
            </p>
        </>
    );
};
    
    const navbar = () => {
        const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
            <div className="gpt3__navbar">
                <div className="gpt3__navbar-links">
                    <div className="gpt3__navbar-links_logo">
                        <img src={logo} alt="GPT-3" />
                    </div>
                    <div className="gpt3__navbar-links_container">
                        <Menu/>
                    </div>
                </div>
                <div className="gpt3__navbar-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                </div>
                <div className="gpt3__navbar-menu">
                    {toggleMenu ? (
                        <RiCloseLine
                            color="#fff"
                            size={27}
                            onClick={() => setToggleMenu(false)}
                        />
                    ) : (
                        <RiMenu3Line
                            color="#fff"
                            size={27}
                            onClick={() => setToggleMenu(true)}
                        />
                    )}
                    {toggleMenu && (
                        <div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu_container-links">
                                <Menu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu}/>
                            </div>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    )}
                </div>
                {/* <button >click ME</button> */}
            </div>
        </>
    );
};

export default navbar;
