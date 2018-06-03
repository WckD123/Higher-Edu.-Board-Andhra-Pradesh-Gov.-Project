import React, { Component } from 'react';
// import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Aux from '../../hoc/Aux';
import Footer from '../../Components/Footer/Footer';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';


class Layout extends Component {

//Defining the State here

    state = {
        User : {
            ID : 123,
            Name : 'Mehul',
            Email : 'email@email.com',
            College : 'BITS'
        }
    }

    render() {
        return(
            <Aux>
                {/*Navigation is always fixed in the layout*/}
                <Nav />
                
                {/*Navigation is always fixed in the layout*/}
                <Footer />
            </Aux>
        ); 
    }
}

export default Layout;