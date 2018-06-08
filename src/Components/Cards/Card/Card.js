import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Aux from '../../../hoc/Aux';
import './Card.css';
import SellerModal from '../../SellerModal/SellerModal';

const Card = () => {
    return (
        <Aux>
        <div className="Card">
            <div className="row">
                <div className="col-xs-4 col-md-4">
                    <div className="avatar"></div>
                </div>
                <div className="col-xs-8 col-md-8">
                    <div className="row">
                        <h4>Name</h4>
                    </div>
                    <div className="row">
                        <h5>Works At</h5>
                    </div>
                    <div className="row">
                        <h5>LinkedIn profile Link</h5>
                    </div>                                        
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-xs-2"></div>
                <div className="col-md-6 col-xs-8">
                    <hr></hr>
                    <center><Link to='/profile/#UserID123'><h4>View Profile</h4></Link></center>
                </div>
            </div>
        </div>
        </Aux>
    );
};

export default Card;