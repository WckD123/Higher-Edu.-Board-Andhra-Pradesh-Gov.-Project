import React, { Component } from 'react';
import './Modal.css';
import Aux from '../Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.hideModal} />
                <div
                    className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                <div className="row">
                    <div className="col-xs-11 col-md-11" />
                    <div className="col-xs-1 col-md-1" onClick={this.props.hideModal}>X</div>
                </div>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;