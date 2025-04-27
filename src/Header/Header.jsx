import "./Header.css";

import { useState } from "react";

export default function Header() {
    const [linkVisible, setLinkVisible] = useState(false)
    const [hamburger, setHamburger] = useState("hamburger.svg")


    function toggleLinkIsVisible() {
        if (linkVisible) {
            setHamburger("hamburger.svg")
        } else {
            setHamburger("hamburger_vertical.svg")
        }
        setLinkVisible(!linkVisible)
    }

    return (
        <>
        <div className="header">
            <img src={hamburger} onClick={toggleLinkIsVisible}></img>
        <div class="headerText">PolCompass </div>
        </div>
        { linkVisible ? ( 
            <div className="headerLinks">
                <a href="/">Home</a>
                <a href="/create">Create</a>
                <a href="/list">List</a>
            </div>
         ) : null }
         </>
    );
}