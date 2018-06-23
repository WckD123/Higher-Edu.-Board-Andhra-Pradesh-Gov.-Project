import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Auxil from '../../../hoc/Auxil/Auxil';
import './Card.css';
import SellerModal from '../../SellerModal/SellerModal';

const Card = (props) => {
    return (
        <Auxil>
        <div className="Card">
            <div className="row">
                <div className="col-xs-4 col-md-4">
                    <div className="avatar"></div>
                </div>
                <div className="col-xs-8 col-md-8">
                    <div className="row">
                        <h4>{props.firstName} {props.lastName}</h4>
                    </div>
                    <div className="row">
                        <h8>{props.experience}</h8>
                    </div>
                    <div className="row">
                        <h5><a href={props.linkedIn}>LinkedIn profile Link</a></h5>
                    </div>                                        
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-xs-2"></div>
                <div className="col-md-6 col-xs-8">
                    <hr></hr>
                    <a href="#"><center><h4 onClick={props.showModal}>View Profile</h4></center></a>
                </div>
            </div>
        </div>
        </Auxil>
    );
};

export default Card;