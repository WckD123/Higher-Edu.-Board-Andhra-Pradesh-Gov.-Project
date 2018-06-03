import React from 'react';
import './Search.css';
import Aux from '../../hoc/Aux';

const Search = () => {
    return (
        <Aux>
            <div className="SearchDiv">
                <div className="SearchIcon">
                    <i className="fas fa-search fa-2x"></i>
                </div> 
                <div>
                    <h2 className="SearchQuery">Try Harvard SOP</h2>
                </div> 
            </div>
        </Aux>
    );
};

export default Search;