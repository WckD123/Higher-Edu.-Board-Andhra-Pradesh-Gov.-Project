import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Nav.css';
import Logo from './Logo.jpg'


const Nav = () => {
    return (
        <div>
            <header className="NavHeader">
                <nav>
                    <ul className="navbar">
                        <li className="logo"><NavLink to="/" exact><img src={Logo} alt="GettInn" height="38" width="114"></img></NavLink></li>
                        <li className="Upload-SOP"><NavLink exact to="/profile">Upload SOP</NavLink></li>
                        <li className="Sign-In"><NavLink exact to={{
                                pathname: '/login'
                            }}>Login</NavLink></li>
                    </ul>    
                </nav> 
            </header>
        </div>   
    );
};

export default Nav;