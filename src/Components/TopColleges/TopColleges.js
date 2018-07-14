import React from 'react';
import TopCollege from './TopCollege/TopCollege';
import './TopColleges.css';
import { Col,Row } from 'react-bootstrap';

import CMU from '../../assets/Carnegie Mellon University.png';
import ISB from '../../assets/isb.JPG';
import Stanford from '../../assets/stanfordu.jpg';
import GT from '../../assets/Georgia Tech University.png';
import YIF from '../../assets/YIF.jpeg';
import HEC from '../../assets/HEC.png'; 


const TopColleges = () => {
    return (
        <div className="container-fluid TopCollegesOuterDiv">
            <Row>
                    <Col xs={2} md={2}>
                    <Row>
                        <div className="col-xs-2 col-md-2 col-xl-2">
                        </div>
                        <div className="col-xs-8 col-md-8 col-xl-8">
                            <Row>
                                <center>
                                <img src={CMU} class="img-fluid img-thumbnail" />
                                </center>
                            </Row>
                            <Row>
                                <center>
                                <p className="collegeName">
                                    
                                </p>
                                </center>
                            </Row>
                        </div>
                    </Row>
                    </Col>
                    <Col xs={2} md={2}>
                    <Row>
                        <div className="col-xs-2 col-md-2 col-xl-2">
                        </div>
                        <div className="col-xs-8 col-md-8 col-xl-8">
                            <Row>
                                <center>
                                <img src={ISB} class="img-fluid img-thumbnail" />
                                </center>
                            </Row>
                            <Row>
                                <center>
                                <p className="collegeName">
                                    College Logo
                                </p>
                                </center>
                            </Row>
                        </div>
                    </Row>
                    </Col>
                    <Col xs={2} md={2}>
                    <Row>
                        <div className="col-xs-2 col-md-2 col-xl-2">
                        </div>
                        <div className="col-xs-8 col-md-8 col-xl-8">
                            <Row>
                                <center>
                                <img src={ISB} class="img-fluid img-thumbnail" />
                                </center>
                            </Row>
                            <Row>
                                <center>
                                <p className="collegeName">
                                    College Logo
                                </p>
                                </center>
                            </Row>
                        </div>
                    </Row>
                    </Col>
                    <Col xs={2} md={2}>
                    <Row>
                        <div className="col-xs-2 col-md-2 col-xl-2">
                        </div>
                        <div className="col-xs-8 col-md-8 col-xl-8">
                            <Row>
                                <center>
                                <img src={ISB} class="img-fluid img-thumbnail" />
                                </center>
                            </Row>
                            <Row>
                                <center>
                                <p className="collegeName">
                                    College Logo
                                </p>
                                </center>
                            </Row>
                        </div>
                    </Row>
                    </Col>
                    <Col xs={2} md={2}>
                    <Row>
                        <div className="col-xs-2 col-md-2 col-xl-2">
                        </div>
                        <div className="col-xs-8 col-md-8 col-xl-8">
                            <Row>
                                <center>
                                <img src={ISB} class="img-fluid img-thumbnail" />
                                </center>
                            </Row>
                            <Row>
                                <center>
                                <p className="collegeName">
                                    College Logo
                                </p>
                                </center>
                            </Row>
                        </div>
                    </Row>
                    </Col>
                    <Col xs={2} md={2}>
                    <Row>
                        <div className="col-xs-2 col-md-2 col-xl-2">
                        </div>
                        <div className="col-xs-8 col-md-8 col-xl-8">
                            <Row>
                                <center>
                                <img src={ISB} class="img-fluid img-thumbnail" />
                                </center>
                            </Row>
                            <Row>
                                <center>
                                <p className="collegeName">
                                    College Logo
                                </p>
                                </center>
                            </Row>
                        </div>
                    </Row>
                    </Col>
            </Row>
        </div>  
    );
};

export default TopColleges;