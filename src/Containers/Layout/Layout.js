import React, { Component } from 'react';
// import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Auxil from '../../hoc/Auxil/Auxil';
import Footer from '../../Components/Footer/Footer';
import { Route,  Switch } from 'react-router-dom';
import Profile from '../../Components/PersonProfile/PersonProfile';
import Home from '../Home/Home';
import LoginModal from '../../Components/LoginModal/LoginModal';
// import { Connect } from 'react-redux';
// import AddSOP from '../../Components/AddSOPModal/AddSOP';


class Layout extends Component {

//Defining the State here

    state = {
        showLoginModal : false
    }

    hideModalHandler = () => {
        this.setState( { showLoginModal : false } );
    }

    showModalHandler = () => {
        this.setState( { showLoginModal : true } );
    }

    
    render() {
        return(
            <Auxil>
                {console.log(this.props)}
                {/*Navigation is always fixed in the layout*/}
                <Nav
                    showModal={this.showModalHandler}
                    auth = {this.props.auth}
                />

                {/*when showlogin modal is true then show modal*/}

                <LoginModal 
                    show={this.state.showLoginModal} 
                    showModal={this.showModalHandler}
                    hideModal={this.hideModalHandler}
                    auth = {this.props.auth}
                />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path='/callback' render={props => this.props.callback(props)}/>
                    {this.props.auth.isAuthenticated() ? <Route path="/profile" component={Profile} /> : null}
                </Switch>
                {/*<Route path="/login" component={LoginModal} exact />
                Footer is always fixed in the layout*/}
                <Footer />
            </Auxil>
        ); 
    }
}

export default Layout;