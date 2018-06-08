import React from 'react';
import Modal from '../../hoc/Modal/Modal';
import './LoginModal.css';

const LoginModal = () => {
    return (
        <div>
            <Modal> 
                <div className = "container">
                    <div className = "row">
                          <h3>Why Upload on Gettin</h3>                                 
                    </div>
                    <div className = "row">
                        <div className = "col-md-4 col-xs-12"> 
                            <div className = "row">
                            <div className="LoginModalSquare" />
                            </div> 
                            <div className = "row">
                                <h4> A </h4>
                            </div> 
                        </div>  
                        <div className = "col-md-4 col-xs-12">  
                            <div className = "row">
                            <div className="LoginModalSquare" />
                            </div> 
                            <div className = "row">
                                <h4> B </h4>
                            </div> 
                        </div> 
                        <div className = "col-md-4 col-xs-12">  
                            <div className = "row">
                            <div className="LoginModalSquare" />
                            </div> 
                            <div className = "row">
                                <h4> C </h4>
                            </div> 
                        </div>                                
                    </div>
                    <div className = "row">
                           <div className ="LoginModalRectangle">
                                <div>
                                    <h4> Login via linkedIn </h4>
                                </div>
                           </div>                                
                    </div>
                </div>
                
            </Modal>
        </div>
    );
};

export default LoginModal;