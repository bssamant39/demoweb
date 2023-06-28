import React from 'react'
import { NavLink } from 'react-router-dom'

const SubHeader = () => {
    return (
        <>
            <a href="#" className="nav-toggle">Toggle Navigation</a>
            <nav className="cmn-tile-nav">
                <ul className="clearfix">
                    <li className="colour-1"><NavLink to="/">Home</NavLink></li>
                    <li className="colour-2"><NavLink to="/menu">Menu</NavLink></li>
                    <li className="colour-3"><NavLink to="/location">Location</NavLink></li>
                    <li className="colour-4"><NavLink to ="/blog">Blog</NavLink></li>
                    <li className="colour-5"><NavLink to="/reservation">Reservation</NavLink></li>
                    <li className="colour-6"><NavLink to="staff">Our Staff</NavLink></li>
                    <li className="colour-7"><NavLink to="/news">News</NavLink></li>
                    <li className="colour-8"><NavLink to="/gallery">Gallery</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default SubHeader