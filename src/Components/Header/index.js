import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function Header() {
    return (
        <header>
            <ul>
                <li> <Link className="style" to="/">Home</Link></li>
                <li> <Link className="style" to="/about">About</Link></li>
                <li> <Link className="style" to="/project">Project</Link></li>
                <li> <Link className="style" to="/login">Login</Link></li>
            </ul>
        </header>
    )
}
