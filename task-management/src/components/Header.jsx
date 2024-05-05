import React from 'react'

function Header() {
    return (
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
            <div className="theme-container">
                <span>โหมดกลางคืน</span>
                <span className="icon">สลับ</span>
            </div>
        </header>
    )
}

export default Header