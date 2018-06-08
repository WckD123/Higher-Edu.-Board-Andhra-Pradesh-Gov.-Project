import React, { Component } from 'react';
import ViewSOPs from '../../ViewSOPs/ViewSOPs';


class Bought extends Component {
    state = {
        Users : [{
            Type: "SOP",
            Course: "MBA",
            University: "Harvard",
            IsClicked : true,
            Content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            Type: "SOP",
            Course: "M.S.",
            University: "Stanford",
            IsClicked : false,
            Content : " 222222222 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        },
        {
            Type: "Interview",
            Course: "Job",
            University: "MIT",
            IsClicked : false,
            Content : " 333333333 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

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