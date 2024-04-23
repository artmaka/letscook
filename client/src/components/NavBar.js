import { useState } from "react"
import Sidebar from "./Sidebar"

import {faHome, faUser, faList, faCog } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: "Главная",
            path: "/",
            icon: faHome
        },
        {
            name: "Категории",
            path: "/categories",
            icon: faList
        },
        {
            name: "Профиль",
            path: "/profile",
            icon: faUser
        },
        {
            name: "Настройки",
            path: "/settings",
            icon: faCog
        },
    ]

    function closeSidebar() {
        setShowSidebar(false);
    }

    return (
        <>
        <div className="navbar container">
            <a href="#!" className="logo">Let's c<span>oo</span>k!</a>
            <input type="text" placeholder="Поиск..." className="search-bar" />
            <div className="nav-links">
                { links.map(link => (
                    <a href="#!" key={link.className}>{link.name}</a>
                )) }
            </div>
            <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
        </>
    )
}