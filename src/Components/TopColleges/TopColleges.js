import React from 'react';
import TopCollege from './TopCollege/TopCollege';
import './TopColleges.css';
import { Col } from 'react-bootstrap';


const TopColleges = () => {
    return (
        <div className="container-fluid TopCollegesOuterDiv">
            <div className="row">
                    <Col xs={3} md={3}><TopCollege /></Col>
                    <Col xs={3} md={3}><TopCollege /></Col>
                    <Col xs={3} md={3}><TopCollege /></Col>
                    <Col xs={3} md={3}><TopCollege /></Col>
            </div>
        </div>  
    );
};

export default TopColleges;