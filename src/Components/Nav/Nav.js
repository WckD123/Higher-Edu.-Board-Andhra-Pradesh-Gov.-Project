import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Nav.css';
import Logo from './Logo.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    return (
        <div>
            <header className="NavHeader">
                <nav class="navbar navbar-light bg-light justify-content-between sticky-top">
                    <a className="navbar-brand"><NavLink to="/" exact>
                        <img src={Logo} alt="GettInn" height="38" width="114"></img></NavLink>
                    </a>
                    <ul class="navbar-nav ml-auto justify-content-end">
                        <li>
                        <a className="Upload-SOP"><NavLink exact to="/profile">Upload SOP</NavLink></a>
                        </li>
                        <li>
                        <a className="Sign-In"><NavLink exact to={{
                            pathname: '/login'
                            }}>Login</NavLink></a>
                        </li>
                    </ul>
                </nav>
            </header>



            {/*<header className="NavHeader">
                <nav>
                    <ul className="navbar">
                        <li className="logo"><NavLink to="/" exact><img src={Logo} alt="GettInn" height="38" width="114"></img></NavLink></li>
                        <li className="Upload-SOP"><NavLink exact to="/profile">Upload SOP</NavLink></li>
                        <li className="Sign-In"><NavLink exact to={{
                                pathname: '/login'
                            }}>Login</NavLink></li>
                    </ul>    
                </nav> 
            </header> */}
        </div>   
    );
};

export default Nav;