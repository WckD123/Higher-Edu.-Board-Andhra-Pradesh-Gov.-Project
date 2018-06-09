import React from 'react';
import Modal from '../../hoc/Modal/Modal';

const AddSOP = (props) => {
    return (
        <div>
            <Modal  show={props.show} hideModal={props.hideModal} >
                <h1>Testing the Add SOP Modal</h1>
            </Modal>
        </div>
    );
};

export default AddSOP;