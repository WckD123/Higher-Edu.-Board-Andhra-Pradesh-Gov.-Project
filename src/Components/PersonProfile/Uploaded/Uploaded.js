import React, { Component } from 'react';
import ViewSOPs from '../../ViewSOPs/ViewSOPs';

class Uploaded extends Component {
    state = {
        text: "This is Uploaded"
    }

    render() {
        return (
            <div className="container">
                <ViewSOPs text={this.state.text}/>
            </div>
        );
    }
}

export default Uploaded;