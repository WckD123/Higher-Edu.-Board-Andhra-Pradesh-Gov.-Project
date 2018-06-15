import React from 'react';
import Modal from '../../hoc/Modal/Modal';

const AddSOP = (props) => {
    return (
        <div>
            <Modal  show={props.show} hideModal={props.hideModal} >
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <center>
                                <h4>
                                    <strong> Admission SOP </strong>
                                </h4>
                            </center>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-xs-12 col-xl-3"><h6>Name of the University</h6></div>
                            <div className="col-md-3 col-xs-12 col-xl-3"></div>
                            <div className="col-md-3 col-xs-12 col-xl-3"></div>
                            <div className="col-md-3 col-xs-12 col-xl-3">
                            <input type = "text" name = "name" placeholder= "your name" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-xs-12 col-xl-3"><h6>Name of the University</h6></div>
                            <div className="col-md-3 col-xs-12 col-xl-3"></div>
                            <div className="col-md-3 col-xs-12 col-xl-3"></div>
                            <div className="col-md-3 col-xs-12 col-xl-3">
                            <input type = "text" name = "name" placeholder= "your name" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-xs-12 col-xl-3"><h6>Name of the University</h6></div>
                            <div className="col-md-3 col-xs-12 col-xl-3"></div>
                            <div className="col-md-3 col-xs-12 col-xl-3"></div>
                            <div className="col-md-3 col-xs-12 col-xl-3">
                            <input type = "text" name = "name" placeholder= "your name" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-xs-12 col-xl-3"><h6>Name of the University</h6></div>
                            <div className="col-md-3 col-xs-12 col-xl-3"></div>
                            <div className="col-md-3 col-xs-12 col-xl-3"></div>
                            <div className="col-md-3 col-xs-12 col-xl-3">
                            <input type = "text" name = "name" placeholder= "your name" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-xs-12 col-xl-3"><h6>Name of the University</h6></div>
                            <div className="col-md-3 col-xs-12 col-xl-3"></div>
                            <div className="col-md-3 col-xs-12 col-xl-3"></div>
                            <div className="col-md-3 col-xs-12 col-xl-3">
                            <input type = "text" name = "name" placeholder= "your name" />

                            </div>
                        </div>
                        
                    </div>
                    <div className="row"></div>
                    <div className="row"></div>
                    
                    
                </div>

            </Modal>
        </div>
    );
};

export default AddSOP;
