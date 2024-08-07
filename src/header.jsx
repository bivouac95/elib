import React from 'react'
import ReactDOM from 'react-dom/client'
import './header.css'

export default function Header() {
    return (
        <>
        <nav className='header__main'>
            <button>
                <img src="./public/header/home.svg" alt="" />
            </button>
            <div className="search">
                <input type="text" placeholder="Поиск"/>
                <button>
                    <img src="./public/header/loopa.svg" alt="" />
                </button>
            </div>
            <button>
                <img src="./public/header/burger.svg" alt="" />
            </button>
        </nav>
        </>
    )
}