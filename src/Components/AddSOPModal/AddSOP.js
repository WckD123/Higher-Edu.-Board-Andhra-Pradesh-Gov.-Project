import React from 'react';
import Modal from '../../hoc/Modal/Modal';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


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
                        <div className = "row">
                            <div className = "col-md-3 col-xs-12 col-xl-3">
                                <h6>Name of the University</h6>
                            </div>
                            <div className = "col-md-3 col-xs-12 col-xl-3">
                            </div>
                            <div className = "col-md-3 col-xs-12 col-xl-3">
                            </div>
                            <div className = "col-md-3 col-xs-12 col-xl-3">
                                <input type = "text" name = "name" placeholder= "your name" />
                            </div>

                        </div>
                        <div className = "row">
                            <div className = "col-md-3 col-xs-12 col-xl-3">
                                <h6>Country</h6>
                            </div>
                            <div className = "col-md-3 col-xs-12 col-xl-3">
                            </div>
                            <div className = "col-md-3 col-xs-12 col-xl-3">
                            </div>
                            <div className = "col-md-3 col-xs-12 col-xl-3">
                                <input type = "text" name = "name" placeholder= "your Country" />
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-md-3 col-xs-12">
                                <h6>Department</h6>
                            </div>
                            <div className = "col-md-3 col-xs-12">
                            </div>
                            <div className = "col-md-3 col-xs-12">
                            </div>
                            <div className = "col-md-3 col-xs-12">
                                <input type = "text" name = "name" placeholder= "Department" />
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-md-3 col-xs-12">
                                <h6>Degree</h6>
                            </div>
                            <div className = "col-md-3 col-xs-12">
                            </div>
                            <div className = "col-md-3 col-xs-12">
                            </div>
                            <div className = "col-md-3 col-xs-12">
                                <input type = "text" name = "name" placeholder= "enter Degree" />
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-md-3 col-xs-12">
                                <h6>Price Band</h6>
                            </div>
                            <div className = "col-md-3 col-xs-12">
                            </div>
                            <div className = "col-md-3 col-xs-12">
                            </div>
                            <div className = "col-md-3 col-xs-12">
                                <input type = "text" name = "name" placeholder= "expected price" />
                            </div>

                        </div>

                    </div>
                    <div className = "row">
                        <div className = "row">
                        </div>
                        <div className = "row">
                            <div className = "col-md-2 col-xs-12">
                                <h5>SOP question </h5>
                            </div>  
                            <div className = "col-md-3 col-xs-12">
                            </div>
                            <div className = "col-md-7 col-xs-12">
                                <input type = "text" name = "name" placeholder= "expected price" /> 
                            </div> 
                        </div>
                        <div className = "row">
                        </div>
                        <div className = "row">
                        <div className = "col-md-2 col-xs-12">
                                <h5>SOP Answer </h5>
                            </div>  
                            <div className = "col-md-3 col-xs-12">
                            </div>
                            <div className = "col-md-7 col-xs-12">
                                <input type = "text" name = "name" placeholder= "expected price" /> 
                            </div>  
                        </div>
                        <div className = "row">
                            <center> 
                                <button>
                                    Add question
                                </button>
                            </center>
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-md-6 col-xs-12">
                            <button>Submit</button>
                        </div>
                        <div className = "col-md-6 col-xs-12">
                            <button>Cancel</button>
                        </div>
                    </div>

                </div>
            </Modal>
        </div>
    );
};

export default AddSOP;