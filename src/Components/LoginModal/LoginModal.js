import React , { Component } from 'react';
import {Modal } from 'react-bootstrap';
import './LoginModal.css';
import linkedIn from '../../assets/images/linkedinButton.png';





class LoginModal extends Component{
    

    render() {
        return (
            <div>
                {console.log(this.props.show)}
                <Modal
                    animation={false}
                    show={this.props.show} 
                    onHide={this.props.hideModal}
                    backdropClassName="Backdrop"
                    >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title">
                    Why Upload on Gettin
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="container">
                           <div className="row">
                                                             
                           </div>
                           <div className="row">
                               <div className="col-md-4 col-xs-12"> 
                                   <div className="row">
                                   <div className="LoginModalSquare" />
                                   </div> 
                                   <div className="row">
                                       <h4> A </h4>
                                   </div> 
                               </div>  
                               <div className="col-md-4 col-xs-12">  
                                   <div className="row">
                                   <div className="LoginModalSquare" />
                                   </div> 
                                   <div className="row">
                                       <h4> B </h4>
                                   </div> 
                               </div> 
                               <div className="col-md-4 col-xs-12">  
                                   <div className="row">
                                   <div className="LoginModalSquare" />
                                   </div> 
                                   <div className ="row">
                                       <h4> C </h4>
                                   </div> 
                                </div>                                
                            </div>
                            <div className = "row">
                                <div className="col-md-2 col-xl-2" />
                                <div className="col-md-8 col-xl-8" >
                                    <a href="#"><img alt="linkedIn" src={linkedIn} onClick={this.props.auth.login} height="60%" width="80%" className="img-rounded img-responsive"/></a>
                                </div>                               
                            </div>
                        </div>
                </Modal.Body>
                </Modal>
            </div>
        );
      }  
};

export default LoginModal;








/*
        render(){
        return (
               <div>
                   <Modal show={this.props.show} hideModal={this.props.hideModal} >
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                       
                   </Modal>
               </div>
           );
    }





                        */