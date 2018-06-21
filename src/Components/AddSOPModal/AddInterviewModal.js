import React, {Component} from 'react';
import {Modal , Popover, Tooltip, Button, OverlayTrigger,Grid,Row,Col } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './AddSOP.css';


class AddSOP extends Component {

    state = {
        University: null,
        Country: null,
        Department: null,
        Degree: null,
        PriceBand : null,
        QuesAnswers: []
    }

    QuesAns = [<Row>
        <Col xs={12} lg={12} className="Top-margin">
            <Row>
                <Col md={2} xs={0}>
                </Col>  
                <Col md={3} xs={12}>
                <h5>Interview question </h5>
                </Col>
                <Col md={7} xs={12}>
                    <input type = "text" name = "name" placeholder= "SOP Question" /> 
                </Col> 
            </Row>
        </Col>
        <Col xs={12} lg={12} className="Top-margin">
            <Row>
                <Col md={2} xs={0}>
                    
                </Col>  
                <Col md={3} xs={12}>
                <h5>Answer </h5>
                </Col>
                <Col md={7} xs={12}>
                <textarea class="form-control" rows="5" id="Answer"></textarea> 
                </Col> 
            </Row>
        </Col>
    </Row>, null];

    QA = <Row>
                    <Col xs={12} lg={12} className="Top-margin">
                        <Row>
                            <Col md={2} xs={0}>
                            </Col>  
                            <Col md={3} xs={12}>
                            <h5>Interview question </h5>
                            </Col>
                            <Col md={7} xs={12}>
                                <input type = "text" name = "name" placeholder= "SOP Question" /> 
                            </Col> 
                        </Row>
                    </Col>
                    <Col xs={12} lg={12} className="Top-margin">
                        <Row>
                            <Col md={2} xs={0}>
                                
                            </Col>  
                            <Col md={3} xs={12}>
                            <h5>Answer </h5>
                            </Col>
                            <Col md={7} xs={12}>
                            <textarea class="form-control" rows="5" id="Answer"></textarea> 
                            </Col> 
                        </Row>
                    </Col>
                </Row>

    addNewDiv = () => {
        this.QuesAns.push(this.QA);
        console.log(this.QuesAns);
        this.setState(this.state);
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
                    <Modal.Header>
                        <center>
                        <Modal.Title>Admission Interview 
                        </Modal.Title>
                        </center>
                    </Modal.Header>
                    <Grid>
                        <Row>
                            <Col xs={12} md={12} className="Top-margin">
                                <Row>
                                    <Col md={5} xs={12} lg={6}>
                                        <center>
                                            <h6>Name of the University</h6>
                                        </center>
                                    </Col>
                                    <Col md={6} xs={12} lg={6}>
                                        <center>
                                            <input type = "text" name = "name" placeholder= "University..." />
                                        </center>
                                    </Col>
    
                                </Row>
                            </Col>
                            <Col xs={12} md={12} className="Top-margin">
                                <Row>
                                    <Col md={5} xs={12} lg={6}>
                                        <center>
                                            <h6>Country</h6>
                                        </center>
                                    </Col>
                                    <Col md={6} xs={12} lg={6}>
                                        <center>
                                            <input type = "text" name = "name" placeholder= "Country..." />
                                        </center>
                                    </Col>
    
                                </Row>
                            </Col>
                            <Col xs={12} md={12} className="Top-margin">
                                <Row>
                                    <Col md={5} xs={12} lg={6}>
                                        <center>
                                            <h6>Department</h6>
                                        </center>
                                    </Col>
                                    <Col md={6} xs={12} lg={6}>
                                        <center>
                                            <input type = "text" name = "name" placeholder= "Department..." />
                                        </center>
                                    </Col>
    
                                </Row>
                            </Col>
                            <Col xs={12} md={12} className="Top-margin">
                                <Row>
                                    <Col md={5} xs={12} lg={6}>
                                        <center>
                                            <h6>Degree</h6>
                                        </center>
                                    </Col>
                                    <Col md={6} xs={12} lg={6}>
                                        <center>
                                            <input type = "text" name = "name" placeholder= "Degree..." />
                                        </center>
                                    </Col>
    
                                </Row>
                            </Col>
                            <Col xs={12} md={12} className="Top-margin">
                                <Row>
                                    <Col md={5} xs={12} lg={6}>
                                        <center>
                                            <h6>Price Band</h6>
                                        </center>
                                    </Col>
                                    <Col md={6} xs={12} lg={6}>
                                        <center>
                                        <select>
                                            <option>$1.5</option>
                                            <option>$2</option>
                                            <option>$3</option>
                                            <option>$100</option>
                                        </select>
                                        </center>
                                    </Col>
    
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        {this.QuesAns.map(Q => Q)}
                        <hr />
                        <Row>
                            <Col xs={12} lg={12} className="Top-margin">
                                <center> 
                                    <button className="btn btn-primary" onClick={this.addNewDiv}>
                                        Add question
                                    </button>
                                </center>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2} xs={0}>
                            </Col>
                            <Col md={2} xs={12} className="btn btn-success" onClick={this.props.hideModal}>
                            Submit
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
                        <br />
                    </Grid>
                </Modal>
            </div>
        );
    }
    
};

export default AddSOP;