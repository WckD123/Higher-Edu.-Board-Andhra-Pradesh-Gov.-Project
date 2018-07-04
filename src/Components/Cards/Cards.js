import React, { Component } from 'react';
import Card from './Card/Card';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';

class Cards extends Component {

    state={
        Users : null
    }

    //Get Users Array from DB

    componentDidMount(){
        axios.get('http://localhost:4000/users/getAllData').then(
            response => {
                this.setState({Users : response.data});
                console.log(this.state);
            }
        );
    }

    getFunc = axios.get('http://localhost:4000/users/getAllData').then(response => {
            this.setState({Users : response.data})})


    num=6;

    increaseNum = () => {
        this.num=this.num+6;
        this.setState(this.state);
        return(this.num);
    }

    render() {

        

        let cardslist = <Spinner />;

        if(this.state.Users){
            cardslist = (this.state.Users.map(User => {
                return(
                    <div class="col-md-4 col-xs-12">
                    {/*console.log(User.BoughtDocs)*/}
                    <Card
                    getFunc = {this.getFunc}
                    earnings = {User.total_earnings}
                    id = {User.id}
                    uploadedDocs = {User.UploadedDocs}
                    showModal = {User.ShowModal}
                    linkedIn = {User.linkedin_profile_link}
                    experience = {User.linkedin_experience}
                    firstName={User.name}
                    /></div>
            )}).splice(0,this.num)
            
            
            
            );
        }

        return (
            <div>
                <div class="row">
                    {cardslist}
                </div>
                <div class="row">
                    <div class="col-md-12 col-xs-12">
                        <center>
                            <button onClick={this.increaseNum} className="btn">See more...</button>
                        </center><br/>
                    </div>
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