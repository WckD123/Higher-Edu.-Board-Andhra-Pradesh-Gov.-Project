import React, { Component } from 'react';
import {Modal , Popover, Tooltip, Button, OverlayTrigger,Grid,Row,Col } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class SellerModal extends Component{

    state={
        Earnings : this.props.earnings
    }

    pay = () =>{
        let el = document.getElementById('toppings');

        let tops = el.getElementsByTagName('input');
        console.log(this.state.Earnings);
        let tempPrice = parseFloat(this.state.Earnings);
        console.log(tempPrice);
        for (var i=0, len=tops.length; i<len; i++) {
            if ( tops[i].type === 'checkbox' && tops[i].checked== true) {
                console.log(tops[i].value);
                tempPrice += parseFloat(tops[i].value);
                console.log(tempPrice);
            }
        }
        const tempconst = {...this.state, Earnings : tempPrice};
        this.setState({tempconst});
        
    //let address =  ;

    console.log(this.state.Earnings);

    axios.patch('https://gettin-4d3a5.firebaseio.com/Users/'+ parseInt(this.props.id-1) +'.json',{TotalEarnings : tempPrice}).then(response =>
            console.log(response)
        );
    {this.props.getFunc}
    }
 
    render(){
        return (
            <div>
               <Modal
                        animation={false}
                        show={this.props.show} 
                        onHide={this.props.hideModal}
                        backdropClassName="Backdrop"
                        bsSize="large"
                        >
                <Modal.Body>
                   <Grid>
                        <Row>
                            <Col md={2} xs={12}></Col>
                            <Col md={10} xs={12}>
                                <h3>{this.props.firstName} {this.props.lastName}</h3>
                                <p>{this.props.experience}</p>
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
                        <Row id="toppings">
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
                            
                        {this.props.uploadedDocs.map(uploadedDoc => (
                                <Col xs={12} lg={12}>
                                    <Row>
                                        <Col md={4} xs={10}>
                                            <p>{uploadedDoc.University}</p>
                                        </Col>
                                        <Col md={2} xs={10}>
                                            <p>{uploadedDoc.Course}</p>
                                        </Col>
                                        <Col md={2} xs={0}>
                                        </Col>
                                        <Col md={2} xs={10}>
                                            <p>$ {uploadedDoc.Price}</p>
                                        </Col>
                                        <Col md={2} xs={0}>
                                            <Col md={6} xs={12}>
                                            </Col>
                                            <Col md={6} xs={12}>
                                            <input type="checkbox" value={uploadedDoc.Price} onClick={this.attachCheckboxHandlers}/>
                                            </Col>
                                        </Col>
                                        
                                    </Row>
                                </Col>
                        ))}
    
                            
    
    
                        </Row>
                        <Row>
                            <Col md={2} xs={0}>
                            </Col>
                            <Col md={2} xs={12} className="btn btn-success" onClick={this.pay}>
                            Pay
                            </Col>
                            <Col md={2} xs={0}>
                            </Col>
                            <Col md={2} xs={0}>
                            </Col>
                            <Col md={2} xs={12} className="btn btn-danger"  onClick={this.props.hideModal}>
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
    }
    
};

export default SellerModal;