import React, { Component } from 'react';
import Card from './Card/Card';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';

class Cards extends Component {

    state={
        Users : null
    }

    componentDidMount(){
         axios.get('https://gettin-4d3a5.firebaseio.com/Users.json').then(
             response => {
                this.setState({Users : response.data});
             }
         );
    }

    render() {

        let cardslist = <Spinner />;

        let num=6;

        if(this.state.Users){
            cardslist = (this.state.Users.map(User => {
                return(
                    <div class="col-md-4 col-xs-12">
                    {console.log(User)}
                    <Card
                    linkedIn = {User.LinkedInLink}
                    experience = {User.Experience}
                    firstName={User.FirstName} 
                    lastName={User.LastName} 
                    showModal={this.props.showModal}
                    /></div>
            )}).splice(0,num)
            
            
            
            );
        }

        return (
            <div>
                <div class="row">
                    {cardslist}
                </div>
            </div>
        );
    }
}

export default Cards;

/*<div class="row">
                            
                            <div class="col-md-4 col-xs-12"><Card showModal={this.props.showModal}/></div>
                            <div class="col-md-4 col-xs-12"><Card showModal={this.props.showModal}/></div>
                            <div class="col-md-4 col-xs-12"><Card showModal={this.props.showModal}/></div>
                            <div class="col-md-4 col-xs-12"><Card showModal={this.props.showModal}/></div>
                            <div class="col-md-4 col-xs-12"><Card showModal={this.props.showModal}/></div>
                        </div>

                        */