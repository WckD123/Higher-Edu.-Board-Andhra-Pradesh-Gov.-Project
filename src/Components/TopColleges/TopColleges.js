import React from 'react';
import TopCollege from './TopCollege/TopCollege';
import './TopColleges.css'

const TopColleges = () => {
    return (
        <div className="container-fluid TopCollegesOuterDiv">
            <div className="row">
                <div className="col-xs-3 col-md-3 col-xl-3"><TopCollege /></div>
                <div className="col-xs-3 col-md-3 col-xl-3"><TopCollege /></div>
                <div className="col-xs-3 col-md-3 col-xl-3"><TopCollege /></div>
                <div className="col-xs-3 col-md-3 col-xl-3"><TopCollege /></div>
            </div>
        </div>  
    );
};

export default TopColleges;