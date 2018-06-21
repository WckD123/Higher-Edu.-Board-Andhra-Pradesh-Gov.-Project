import React from 'react';
import Card from './Card/Card';

const Cards = (props) => {
    return (
        <div>
            <div class="row">
                <div class="col-md-4 col-xs-12"><Card showModal={props.showModal}/></div>
                <div class="col-md-4 col-xs-12"><Card showModal={props.showModal}/></div>
                <div class="col-md-4 col-xs-12"><Card showModal={props.showModal}/></div>
                <div class="col-md-4 col-xs-12"><Card showModal={props.showModal}/></div>
                <div class="col-md-4 col-xs-12"><Card showModal={props.showModal}/></div>
                <div class="col-md-4 col-xs-12"><Card showModal={props.showModal}/></div>
            </div>
        </div>
    );
};

export default Cards;