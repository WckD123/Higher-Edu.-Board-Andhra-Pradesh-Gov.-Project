import React from 'react';
import {Modal , Popover, Tooltip, Button, OverlayTrigger,Grid,Row,Col } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const SellerModal = (props) => {
    return (
        <div>
           <Modal
                    animation={false}
                    show={props.show} 
                    onHide={props.hideModal}
                    backdropClassName="Backdrop"
                    bsSize="large"
                    >
            <Modal.Body>
               <Grid>
                    <Row>
                        <Col md={2} xs={12}></Col>
                        <Col md={10} xs={12}>
                            <h3>Neeraj Kumar</h3>
                            <p>Description</p>
                        </Col>
                    </Row>
                    
                        <Row>
                            <Col md={3} xs={12}>
                                <h4>Experience</h4>
                                <p><b>Description</b></p>
                                <p>Description Details</p>
                                <p>Description Details</p>
                            </Col>
                            <Col md={3} xs={0}>
                            </Col>
                            <Col md={3} xs={0}>
                            </Col>
                            <Col md={3} xs={12}>
                                <h4>Education</h4>
                                <p><b>Description</b></p>
                                <p>Description Details</p>
                                <p>Description Details</p>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <OverlayTrigger 
                            overlay={
                            <Popover id="modal-popover" title="popover">
                            Opens LinkedIn Profile!
                            </Popover>
                            }
                          > 
                            <Col xs={12} md={12}>
                                <a href="#"><center><h5>View Detailed Profile</h5></center></a>
                            </Col>
                            </OverlayTrigger>
                        </Row>
                        <hr />
                    <Row>
                        <Col xs={12} lg={12}>
                            <Row>
                                <Col md={3} xs={3} xl={3}></Col>
                                <Col md={6} xs={6} xl={6}>
                                <center><h3>Uploaded Documents</h3></center>
                                <br />
                                </Col>
                                <Col md={3} xs={3} xl={3}></Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg={12}>
                            <Row>
                                <Col md={4} xs={10}>
                                    <p>Havard University SOP</p>
                                </Col>
                                <Col md={2} xs={10}>
                                    <p>MBA</p>
                                </Col>
                                <Col md={2} xs={0}>
                                </Col>
                                <Col md={2} xs={10}>
                                    <p>$2.99</p>
                                </Col>
                                <Col md={2} xs={0}>
                                    <Col md={6} xs={12}>
                                    </Col>
                                    <Col md={6} xs={12}>
                                    <input type="checkbox" />
                                    </Col>
                                </Col>
                                
                            </Row>
                        </Col>
                        <Col xs={12} lg={12}>
                            <Row>
                                <Col md={4} xs={10}>
                                    <p>Havard University SOP</p>
                                </Col>
                                <Col md={2} xs={10}>
                                    <p>MBA</p>
                                </Col>
                                <Col md={2} xs={0}>
                                </Col>
                                <Col md={2} xs={10}>
                                    <p>$2.99</p>
                                </Col>
                                <Col md={2} xs={0}>
                                    <Col md={6} xs={12}>
                                    </Col>
                                    <Col md={6} xs={12}>
                                    <input type="checkbox" />
                                    </Col>
                                </Col>
                                
                            </Row>
                        </Col>
                        <Col xs={12} lg={12}>
                            <Row>
                                <Col md={4} xs={10}>
                                    <p>Havard University SOP</p>
                                </Col>
                                <Col md={2} xs={10}>
                                    <p>MBA</p>
                                </Col>
                                <Col md={2} xs={0}>
                                </Col>
                                <Col md={2} xs={10}>
                                    <p>$2.99</p>
                                </Col>
                                <Col md={2} xs={0}>
                                    <Col md={6} xs={12}>
                                    </Col>
                                    <Col md={6} xs={12}>
                                    <input type="checkbox" />
                                    </Col>
                                </Col>
                                
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} xs={0}>
                        </Col>
                        <Col md={2} xs={12} className="btn btn-success" onClick={props.hideModal}>
                        Pay
                        </Col>
                        <Col md={2} xs={0}>
                        </Col>
                        <Col md={2} xs={0}>
                        </Col>
                        <Col md={2} xs={12} className="btn btn-danger"  onClick={props.hideModal}>
                            Cancel
                        </Col>
                        <Col md={2} xs={0}>
                        </Col>


                    </Row>
               </Grid>
               </Modal.Body>
            </Modal> 
        </div>
    );
};

export default SellerModal;