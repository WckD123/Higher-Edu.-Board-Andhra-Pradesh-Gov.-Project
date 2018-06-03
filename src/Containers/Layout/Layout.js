import React, { Component } from 'react';
// import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Aux from '../../hoc/Aux';
import Footer from '../../Components/Footer/Footer';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Profile from '../../Components/PersonProfile/PersonProfile';
import Home from '../Home/Home';
import LoginModal from '../../Components/LoginModal/LoginModal';


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
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/profile" component={Profile} />
                    <Route path="/login" component={LoginModal} exact />
                </Switch>
                {/*Navigation is always fixed in the layout*/}
                <Footer />
            </Aux>
        ); 
    }
}

export default Layout;