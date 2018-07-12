import React , { Component } from 'react';
import Search from '../../Components/Search/Search';
import TopColleges from '../../Components/TopColleges/TopColleges';
import Cards from '../../Components/Cards/Cards';
import './Home.css';
//import {Modal, Button } from 'react-bootstrap';
//import SellerModal from '../../Components/SellerModal/SellerModal';

class Home extends Component {
    
    

    

    render(){
        return (
            <div class="body-container">
                <center>
                {this.props.auth.isAuthenticated() ?null: <div class="row">
                        <div class="col-md-6 col-xs-6 block1">
                            <span class="textBlock1">Help someone by sharing your SOP <br /> 
                            get paid for it.<br />
                            Login to upload your SOP</span><br /><br />
                            <div class="LoginButton">Login with LinkedIn</div>
                        </div>
                        <div class="col-md-6 col-xs-6 block2">
                        <span class="textBlock2">Refer admission SOPs of students <br /> 
                            admitted to top universities and fellowships<br />
                            Login to access SOPs</span><br /><br />
                            <div class="LoginButton">Login with LinkedIn</div>
                        </div>                    
                    </div>}
                    <div class="row">
                        <div class="col-md-1 col-xs-0"></div>
                        <div class="col-md-10 col-xs-12 Refer-admission-SOPs">
                            Refer 100s of SOPs from top universities and fellowships
                        </div>
                    </div>
    
                        {/* **** Adding the Search, Top Colleges and User Cards components.  ****  */}
                        {/* **** Their JS files can be found in the components folder respectively  ****  */}
    
                    
                    <TopColleges />
                    <Search />
                    <Cards showModal={this.showModalHandler} />

                    
                    {/*
this.props.auth.isAuthenticated() ? null:<div class="row">
                        <div class="SuccessStoriesCardOuter col-md-4 col-xs-12">
                            <div class="row SuccessStoriesCard">
                                <div class="col-md-2 col-xs-2 SuccessStoriesPics">

                                </div>
                                <div class="col-md-10 col-xs-10">
                                    <div class="row">
                                    
                                    </div>
                                    <div class="row">
                                    
                                    </div>
                                </div>
                            </div>
                            <div class="row SuccessStoriesCard">
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                            </div>
                        </div>
                    </div>*/}
                </center>   
            </div>
        );
    }
    
};

export default Home;