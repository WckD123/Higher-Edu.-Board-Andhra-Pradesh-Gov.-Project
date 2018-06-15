import React from 'react';
import Modal from '../../hoc/Modal/Modal';

const SellerModal = (props) => {
    return (
        <div>
            <Modal show={props.show} hideModal={props.hideModal}>
                    Test
            </Modal>
            
        </div>
    );
};

export default SellerModal;