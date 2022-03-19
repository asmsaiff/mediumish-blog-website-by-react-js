import React from 'react';
import Logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
import SearchIcon from "../icons/SearchIcon";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={Logo} alt="logo"/>
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/author">Author</NavLink>
                            </li>
                        </ul>
                                                                                
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                            <span className="search-icon">
                                <SearchIcon />
                            </span>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;