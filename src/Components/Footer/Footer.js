import React from 'react';
//import pic1 from './pic1.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const footer = () => {
    return (
        <div className = {["container","footerContainer"].join(' ')}>
            <div className ="row">
                <div className = {['col-md-4','col-xs-12'].join(' ')}>
                    <div className="row">
                        <div className = {['col-md-3','col-xs-4','col-xs-offset-2'].join(' ')}>
                        <i class="fa fa-bars fa-4x" aria-hidden="true"></i>
                        </div>
                        <div className = {['col-md-9','col-xs-12'].join(' ')}>
                            <h6>Verified college admission & fellowship SOP's </h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className = {['col-md-3','col-xs-0'].join(' ')}></div>
                        <div className = {['col-md-9','col-xs-12'].join(' ')}>
                            <p>We verify LinkedIn profile of all uploaders to gurantee real & authentic
                            SOP's
                            </p>
                        </div>
                    </div>
                    
                    
                </div>
                <div className = {['col-md-4','col-xs-12'].join(' ')}>
                    <div className="row">
                        <div className = {['col-md-3','col-xs-4','col-xs-offset-4'].join(' ')}>
                        <i class="fa fa-align-left fa-4x" aria-hidden="true"></i>
                        </div>
                        <div className = {['col-md-9','col-xs-12'].join(' ')}>
                            <h6>Verified admission, fellowship & visa interview scripts </h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className = {['col-md-3','col-xs-0'].join(' ')}></div>
                        <div className = {['col-md-9','col-xs-12'].join(' ')}>
                            <p>We verify LinkedIn profile of all uploaders to gurantee authentic interview scripts.
                            </p>
                        </div>
                    </div>
                    
                    
                </div>
                <div className = {['col-md-4','col-xs-12'].join(' ')}>
                    <div className="row">
                        <div className = {['col-md-3','col-xs-4','col-xs-offset-4'].join(' ')}>
                        <i class="fa fa-phone fa-4x" aria-hidden="true"></i>
                        </div>
                        <div className = {['col-md-9','col-xs-12'].join(' ')}>
                            <h6>24/7 support for customer queries.</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className = {['col-md-3','col-xs-0'].join(' ')}></div>
                        <div className = {['col-md-9','col-xs-12'].join(' ')}>
                            <p>If you need help for admissions or have any queries related to 
                                our service, call +91 7022359474
                            </p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    );
};

export default footer;
