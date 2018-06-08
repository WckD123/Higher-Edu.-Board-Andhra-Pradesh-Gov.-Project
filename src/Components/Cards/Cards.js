import React from 'react';
import Card from './Card/Card';

const Cards = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-xs-12"><Card /></div>
                <div class="col-md-4 col-xs-12"><Card /></div>
                <div class="col-md-4 col-xs-12"><Card /></div>
                <div class="col-md-4 col-xs-12"><Card /></div>
                <div class="col-md-4 col-xs-12"><Card /></div>
                <div class="col-md-4 col-xs-12"><Card /></div>
            </div>
        </div>
    );
};

export default Cards;