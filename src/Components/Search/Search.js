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
                    <h2 className="SearchQuery">Try Harvard SOP</h2>
                </div> 
            </div>
        </Auxil>
    );
};

export default Search;