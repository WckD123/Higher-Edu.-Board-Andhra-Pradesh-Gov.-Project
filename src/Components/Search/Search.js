import React from 'react';
import './Search.css';
import Auxil from '../../hoc/Auxil/Auxil';

const Search = () => {
    return (
        <Auxil>
            <div className="SearchDiv">
                <div className="SearchIcon">
                    <i className="fas fa-search fa-2x"></i>
                </div> 
                <div>
                    <input type="text" id="searchInput" name="search" placeholder="Try Harvard SOP..." />
                </div> 
            </div>
        </Auxil>
    );
};

export default Search;