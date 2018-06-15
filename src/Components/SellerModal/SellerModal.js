import React from 'react';
import Modal from '../../hoc/Modal/Modal';

const SellerModal = (props) => {
    return (
        <div>
           <Modal  show={props.show} hideModal={props.hideModal}>
               <div className='Container'>
                    <div className='row'>
                        <div className= 'col-md-2 col-xs-12'>
                        </div>
                        <div className= 'col-md-10 col-xs-12'>
                            <h3>Neeraj Kumar</h3>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row'>
                            <div className= 'col-md-3 col-xs-12'>
                                <h4>Experience</h4>
                                <p>Description</p>
                            </div>
                            <div className= 'col-md-3 col-xs-0'>
                            </div>
                            <div className= 'col-md-3 col-xs-0'>
                            </div>
                            <div className= 'col-md-3 col-xs-12'>
                                <h4>Education</h4>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className='row'>
                            <center>
                                <h5>View Detailed Profile</h5>
                            </center>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row'>
                            <h4>Uploaded Documents</h4>
                        </div>
                        <div className='row'>
                            <div className= 'col-md-2 col-xs-12'>
                                <p>Havard University SOP</p>
                            </div>
                            <div className= 'col-md-2 col-xs-0'>
                            </div>
                            <div className= 'col-md-2 col-xs-12'>
                                <p>MBA</p>
                            </div>
                            <div className= 'col-md-2 col-xs-0'>
                            </div>
                            <div className= 'col-md-2 col-xs-12'>
                                <p>$2.99</p>
                            </div>
                            <div className= 'col-md-2 col-xs-0'>
                                <div className= 'col-md-6 col-xs-12'>
                                </div>
                                <div className= 'col-md-6 col-xs-12'>
                                <input type="checkbox" />
                                </div>
                            </div>
                            
                        </div>
                        <div className='row'>
                        <div className= 'col-md-2 col-xs-12'>
                                <p>Stanford University SOP</p>
                            </div>
                            <div className= 'col-md-2 col-xs-0'>
                            </div>
                            <div className= 'col-md-2 col-xs-12'>
                                <p>M.E.d</p>
                            </div>
                            <div className= 'col-md-2 col-xs-0'>
                            </div>
                            <div className= 'col-md-2 col-xs-12'>
                                <p>$2.99</p>
                            </div>
                            <div className= 'col-md-2 col-xs-0'>
                                <div className= 'col-md-6 col-xs-12'>
                                </div>
                                <div className= 'col-md-6 col-xs-12'>
                                <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className= 'col-md-2 col-xs-12'>
                                    <p>IIM A Interview Log</p>
                                </div>
                                <div className= 'col-md-2 col-xs-0'>
                                </div>
                                <div className= 'col-md-2 col-xs-12'>
                                    <p>MBA</p>
                                </div>
                                <div className= 'col-md-2 col-xs-0'>
                                </div>
                                <div className= 'col-md-2 col-xs-12'>
                                    <p>Free</p>
                                </div>
                                <div className= 'col-md-2 col-xs-0'>
                                    <div className= 'col-md-6 col-xs-12'>
                                    </div>
                                    <div className= 'col-md-6 col-xs-12'>
                                    <input type="checkbox" />
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='row'>
                        <div className= 'col-md-2 col-xs-0'>
                        </div>
                        <div className= 'col-md-2 col-xs-0'>
                            <h4>Pay</h4>
                        </div>
                        <div className= 'col-md-2 col-xs-0'>
                        </div>
                        <div className= 'col-md-2 col-xs-0'>
                        </div>
                        <div className= 'col-md-2 col-xs-0'>
                            <h4>Cancel</h4>
                        </div>
                        <div className= 'col-md-2 col-xs-0'>
                        </div>


                    </div>
               </div>
            </Modal> 
        </div>
    );
};

export default SellerModal;