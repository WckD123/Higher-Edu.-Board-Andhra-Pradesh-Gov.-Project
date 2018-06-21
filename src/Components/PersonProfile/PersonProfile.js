import React, { Component } from 'react';
import ViewSOPs from '../ViewSOPs/ViewSOPs';
import './PersonProfile.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Bought from './Bought/Bought';
import Uploaded from './Uploaded/Uploaded';
import { connect } from 'react-redux';
import AddSOP from '../../Components/AddSOPModal/AddSOP';
import axios from 'axios';
import AddFellowship from '../AddSOPModal/AddFellowshipModal';
import AddInterview from '../AddSOPModal/AddInterviewModal';

class PersonProfile extends Component {

    
    state = {
        showAddSOPModal : false,
        showFellowshipModal : false,
        showInterviewModal : false,
        Users:{
            Id : "",
            FirstName : "",
            LastName : "",
            Email : "",
            Education : "",
            Experience : "",
            LinkedInLink : "",
            BoughtDocs : [],
            UploadedDocs : [],
            TotalEarnings : "$0.0",
            AuthToken : "RandomAuthToken", 
            TokenExpiry : "ExpiredDate"

        },
        
    }


    componentDidMount () {
        axios.get( 'https://gettin-4d3a5.firebaseio.com/Users.json' )
            .then( response => {


                const Users = response.data;
                const updatedUsers = {
                        ...Users
                    }
                this.setState({Users: updatedUsers});
                console.log(this.state);
            } );
            
    }


    hideAddSOPHandler = () => {
        this.setState( { showAddSOPModal : false } );
    }

    showAddSOPHandler = () => {
        this.setState( { showAddSOPModal : true } );
    }

    hideFellowshipHandler = () => {
        this.setState( { showFellowshipModal : false } );
    }

    showFellowshipHandler = () => {
        this.setState( { showFellowshipModal : true } );
    }

    hideInterviewHandler = () => {
        this.setState( { showInterviewModal : false } );
    }

    showInterviewHandler = () => {
        this.setState( { showInterviewModal : true } );
    }


    render(){
    return (
        <div>
            <AddSOP 
                    show={this.state.showAddSOPModal} 
                    showModal={this.showAddSOPHandler}
                    hideModal={this.hideAddSOPHandler}
            />
            <AddFellowship 
                    show={this.state.showFellowshipModal} 
                    showModal={this.showFellowshipHandler}
                    hideModal={this.hideFellowshipHandler}
            />
            <AddInterview 
                    show={this.state.showInterviewModal} 
                    showModal={this.showInterviewHandler}
                    hideModal={this.hideInterviewHandler}
            />
            <div className="PersonProfileMain">
                <div className="row UploadedDocDiv">
                    <div className="col-xs-12 col-md-2">
                        <div className="UserPic"></div>
                    </div>
                    <div className="col-xs-12 col-md-8">
                        <div className="row PersonProfileUserName">
                            {this.state.Users.FirstName} {this.state.Users.LastName}
                        </div>
                        <div className="row PersonProfileWorksAt">
                            Currently works as {this.state.Users.Experience}
                        </div>
                        <div className="row">
                            <a href={this.state.Users.LinkedInLink}><i class="fab fa-linkedin fa-2x"> LinkedIn</i></a>
                        </div>
                        
                    </div>
                    <div className="col-xs-12 col-md-2">
                        <div className="row">
                            <div className="Total-Earnings-till">Total Earnings (till date)</div>
                        </div>
                        <div className="row">
                            <div className="Earnings">{this.state.Users.TotalEarning}</div>
                        </div>
                    </div>
                </div>
                <div className="container UploadedDocDiv">
                    <div className="row">
                        <div className="col-xs-4 col-md-4 col-xl-4">
                        <div className="row">
                            <div className="col-xs-1 col-md-1 col-xl-1" />
                            <div onClick={this.showAddSOPHandler} className="col-xs-10 col-md-10 col-xl-10 PersonProfileButtons">Add Admission SOP</div>
                        </div>
                        
                        
                        </div>
                        <div className="col-xs-4 col-md-4 col-xl-4">
                        <div className="row">
                            <div className="col-xs-1 col-md-1 col-xl-1" />
                            <div onClick={this.showFellowshipHandler}  className="col-xs-10 col-md-10 col-xl-10 PersonProfileButtons">Add Fellowship SOP</div>
                        </div>
                        </div>
                        <div className="col-xs-4 col-md-4 col-xl-4">
                        <div className="row">
                            <div className="col-xs-1 col-md-1 col-xl-1" />
                            <div  onClick={this.showInterviewHandler} className="col-xs-10 col-md-10 col-xl-10 PersonProfileButtons">Add Interview Log</div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row UploadedDocDiv">
                    <div className="col-xs-0 col-md-2 col-xl-2"></div>
                    <div className="col-xs-6 col-md-4 col-xl-4 UploadedBoughtDocuments">
                        <center><a><NavLink to="/profile/UploadedProfiles" exact>Uploaded Documents</NavLink></a></center>
                    </div>
                    <div className="col-xs-6 col-md-4 col-xl-4 UploadedBoughtDocuments">
                        <center><a><NavLink to="/profile/BoughtProfiles" exact>Bought Documents</NavLink></a></center>
                    </div>
                    <div className="col-xs-0 col-md-2 col-xl-2 "></div>
                </div>
            </div>
            <center>
                <div className="row">
                
                    {/* **** Switch Part of the screen based on routes  ****  */}

                    <Switch>
                        <Route path="/profile/BoughtProfiles" component={Bought} exact></Route>
                        <Route path="/profile/UploadedProfiles"  component={Uploaded} exact></Route>
                    </Switch>
                </div>
            </center>
        </div>
    );}
};

const mapStateToProps = state => {
    return {
        //firstName : state.FirstName,
        //lastName : state.LastName,
        //Experience : state.Experience,
        //TotalEarnings : state.TotalEarnings,
        //BoughtDocs : state.BoughtDocs,
        //UploadedDocs : state.UploadedDocs,
        //LinkedInLink : state.LinkedInLink
    };
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps)(PersonProfile);