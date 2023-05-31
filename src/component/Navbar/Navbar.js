import React from 'react'
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#">Rent</a></li>
                    <li><a href="#">Buy</a></li>
                    <li><a href="#">Sell</a></li>
                    <li><a href="#">Manage Property</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
                
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar