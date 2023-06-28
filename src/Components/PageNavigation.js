import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = () => {
    return (
        <div className="crumbs">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
            </ul>
        </div>
    )
}

export default PageNavigation