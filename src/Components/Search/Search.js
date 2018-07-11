import React from 'react';
import './Search.css';
import Auxil from '../../hoc/Auxil/Auxil';
import {Modal , Popover, OverlayTrigger,Grid,Row,Col } from 'react-bootstrap';


const Search = () => {
    return (
        <Auxil>
            <Row className="SearchDiv">
                <Col md={1} lg={1} className="SearchIcon">
                    <i className="fas fa-search fa-2x"></i>
                </Col> 
                <Col  md={9} lg={9} className="search">
                    <input type="text" id="searchInput" name="search" class="search" placeholder="Try Harvard SOP..." />
                </Col>
                <Col  md={2} lg={2} className="searchButton">
                    <p className="searchButtonText">Search</p>
                </Col> 
            </Row>
        </Auxil>
    );
};

export default Search;