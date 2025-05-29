import "./Header.css";

import { useState } from "react";
import { useTranslation } from 'react-i18next'

export default function Header() {
    const [linkVisible, setLinkVisible] = useState(false)
    const [hamburger, setHamburger] = useState("hamburger.svg")

    const {t, i18n} = useTranslation()

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
                <a href="/#">{t("header.home")}</a>
                <a href="/#/create">{t("header.create")}</a>
                <a href="/#/list">{t("header.list")}</a>
            </div>
         ) : null }
         </>
    );
}