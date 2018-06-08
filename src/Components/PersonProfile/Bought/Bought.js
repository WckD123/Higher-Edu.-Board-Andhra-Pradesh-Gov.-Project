import React, { Component } from 'react';
import ViewSOPs from '../../ViewSOPs/ViewSOPs';


class Bought extends Component {
    state = {
        Users : [{
            Type: "SOP",
            Course: "MBA",
            University: "Harvard"
        },
        {
            Type: "SOP",
            Course: "M.S.",
            University: "Stanford"
        },
        {
            Type: "Interview",
            Course: "MBA",
            University: "MIT"
        }
        ]
            
    }
    

    render() {
        return (
            <div className="container">
                <ViewSOPs 
                Users={this.state.Users}
                />
            </div>
        );
    }
}

export default Bought;