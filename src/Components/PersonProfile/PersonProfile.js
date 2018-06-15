import React, { Component } from 'react';
import ViewSOPs from '../ViewSOPs/ViewSOPs';
import './PersonProfile.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Bought from './Bought/Bought';
import Uploaded from './Uploaded/Uploaded';
import { connect } from 'react-redux';
import AddSOP from '../../Components/AddSOPModal/AddSOP';


class PersonProfile extends Component {

    state = {
        showAddSOPModal : false
    }

    hideAddSOPHandler = () => {
        this.setState( { showAddSOPModal : false } );
    }

    showAddSOPHandler = () => {
        this.setState( { showAddSOPModal : true } );
    }


    render(){
    return (
        <div>
            <div className="PersonProfileMain">
                <div className="row UploadedDocDiv">
                    <div className="col-xs-12 col-md-2">
                        <div className="UserPic"></div>
                    </div>
                    <div className="col-xs-12 col-md-8">
                        <div className="row PersonProfileUserName">
                            {this.props.firstName} {this.props.lastName}
                        </div>
                        <div className="row PersonProfileWorksAt">
                            Currently works as {this.props.Experience}
                        </div>
                        <div className="row">
                            <a href={this.props.LinkedInLink}><i class="fab fa-linkedin fa-2x"> LinkedIn</i></a>
                        </div>
                        
                    </div>
                    <div className="col-xs-12 col-md-2">
                        <div className="row">
                            <div className="Total-Earnings-till">Total Earnings (till date)</div>
                        </div>
                        <div className="row">
                            <div className="Earnings">{this.props.TotalEarnings}</div>
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
                            <div className="col-xs-10 col-md-10 col-xl-10 PersonProfileButtons">Add Fellowship SOP</div>
                        </div>
                        </div>
                        <div className="col-xs-4 col-md-4 col-xl-4">
                        <div className="row">
                            <div className="col-xs-1 col-md-1 col-xl-1" />
                            <div className="col-xs-10 col-md-10 col-xl-10 PersonProfileButtons">Add Interview Log</div>
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
            {this.state.showAddSOPModal ? <AddSOP 
                    show={this.state.showAddSOPModal} 
                    showModal={this.showAddSOPHandler}
                    hideModal={this.hideAddSOPHandler}
            /> : null}
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
        firstName : state.personProfile.FirstName,
        lastName : state.personProfile.LastName,
        Experience : state.personProfile.Experience,
        TotalEarnings : state.personProfile.TotalEarnings,
        BoughtDocs : state.personProfile.BoughtDocs,
        UploadedDocs : state.personProfile.UploadedDocs,
        LinkedInLink : state.personProfile.LinkedInLink
    };
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps)(PersonProfile);