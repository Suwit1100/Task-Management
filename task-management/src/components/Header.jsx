import React from 'react'
import '../css/Header.css'
import { FaSun } from "react-icons/fa";
import { MdNightsStay } from "react-icons/md";
function Header(props) {
    const { theme, setTheme } = props;
    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    return (
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
            <div className="theme-container">
                <span>{theme === 'light' ? 'โหมดกลางวัน' : 'โหมดกลางคืน'}</span>
                <span className="icon" role='button' onClick={toggleTheme}>{theme === 'light' ? <FaSun /> : <MdNightsStay />}</span>
            </div>
        </header>
    )
}

export default Header