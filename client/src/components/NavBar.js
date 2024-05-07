import { Link } from "react-router-dom";

import { useState } from "react"
import Sidebar from "./Sidebar"

import {faHome, faUser, faList } from "@fortawesome/free-solid-svg-icons"

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
    ]

    function closeSidebar() {
        setShowSidebar(false);
    }

    return (
        <>
        <div className="navbar container">
            <a href="/" className="logo">Let's c<span>oo</span>k!</a>
            <div className="nav-links">
                { links.map(link => (
                    <Link to={link.path} key={link.className}>{link.name}</Link>
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