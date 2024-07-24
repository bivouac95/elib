import React from 'react'
import ReactDOM from 'react-dom/client'
import './header.css'

export default function Header() {
    return (
        <>
        <nav>
            <button>домик</button>
            <div className="search">
                <input type="text" placeholder="Поиск"/>
                <button>найти</button>
            </div>
            <button>навигация</button>
        </nav>
        </>
    )
}