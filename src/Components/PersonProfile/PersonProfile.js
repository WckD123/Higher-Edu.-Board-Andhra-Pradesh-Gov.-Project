import React from 'react';
import ViewSOPs from '../ViewSOPs/ViewSOPs';
import './PersonProfile.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Bought from './Bought/Bought';
import Uploaded from './Uploaded/Uploaded';

const PersonProfile = () => {
    return (
        <div>
            <div className="PersonProfileMain">
                <div className="row UploadedDocDiv">
                    <div className="col-xs-12 col-md-2">
                        <div className="UserPic"></div>
                    </div>
                    <div className="col-xs-12 col-md-8">
                        <div className="row PersonProfileUserName">
                            Name
                        </div>
                        <div className="row PersonProfileWorksAt">
                            Currently works at Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla...
                        </div>
                        <div className="row">
                            <p>LinkedIn Profile</p>
                        </div>
                        
                    </div>
                    <div className="col-xs-12 col-md-2">
                        <div className="row">
                            <div className="Total-Earnings-till">Total Earnings (till date)</div>
                        </div>
                        <div className="row">
                            <div className="Earnings">$0.0</div>
                        </div>
                    </div>
                </div>
                <div className="container UploadedDocDiv">
                    <div className="row">
                        <div className="col-xs-4 col-md-4 col-xl-4 PersonProfileButtons">Add Admission SOP</div>
                        <div className="col-xs-4 col-md-4 col-xl-4 PersonProfileButtons">Add Fellowship SOP</div>
                        <div className="col-xs-4 col-md-4 col-xl-4 PersonProfileButtons">Add Interview Log</div>
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
    );
};

export default PersonProfile;