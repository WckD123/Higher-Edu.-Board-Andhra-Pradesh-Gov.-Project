import React from 'react';
import {Button} from 'react-bootstrap';

const Logout = props =>(
    <button onClick={props.auth.logout}>Log Out </button>
);


export default Logout;
