import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <>
        <nav className='header__main'>
            <Link to="/">
                <button>
                    <img src="./header/home.svg" alt="" />
                </button>
            </Link>
            <div className="search">
                <input type="text" placeholder="Поиск"/>
                <button>
                    <img src="./header/loopa.svg" alt="" />
                </button>
            </div>
            <button>
                <img src="./header/burger.svg" alt="" />
            </button>
        </nav>
        </>
    )
}