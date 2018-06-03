import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Nav.css';
import Profile from '../PersonProfile/PersonProfile';
import Home from '../../Containers/Home/Home';
import LoginModal from '../LoginModal/LoginModal';


const Nav = () => {
    return (
        <div>
            <header className="NavHeader">
                <nav>
                    <ul>
                        <li><NavLink to="/" exact>GettInn</NavLink></li>
                        <li><NavLink to="/profile">Upload SOP</NavLink></li>
                        <li><NavLink to={{
                                pathname: '/',
                                hash: '#Login'
                            }}>Login</NavLink></li>
                    </ul>    
                </nav> 
            </header>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/profile" component={Profile} />
                <Route path="/" component={LoginModal} />
            </Switch>
        </div>   
    );
};

export default Nav;