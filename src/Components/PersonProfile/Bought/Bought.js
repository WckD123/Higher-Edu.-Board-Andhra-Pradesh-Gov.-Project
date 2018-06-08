import React, { Component } from 'react';
import ViewSOPs from '../../ViewSOPs/ViewSOPs';


class Bought extends Component {
    state = {
        text: "This is Bought"
    }

    render() {
        return (
            <div className="container">
                <ViewSOPs text={this.state.text}/>
            </div>
        );
    }
}

export default Bought;