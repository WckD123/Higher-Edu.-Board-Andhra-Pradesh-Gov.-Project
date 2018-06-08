import React, { Component } from 'react';
import ViewSOPs from '../../ViewSOPs/ViewSOPs';

class Uploaded extends Component {
    state = {
        Users : [{
            Type: "Inteviews",
            Course: "Job",
            University: "Google"
        },
        {
            Type: "Fellowship",
            Course: "PHD",
            University: "Florida State"
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
                <ViewSOPs Users={this.state.Users}/>
            </div>
        );
    }
}

export default Uploaded;