import React, { Component } from 'react';
import './Modal.css';
import Auxil from '../Auxil/Auxil';
import Backdrop from '../Backdrop/Backdrop';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }

    render () {
        return (
            <Auxil>
                <Backdrop show={this.props.show} clicked={this.props.hideModal} />
                <div
                    className="Modal Container"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxil>
        )
    }
}

export default Modal;