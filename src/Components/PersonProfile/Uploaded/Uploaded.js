import React, { Component } from 'react';
import ViewSOPs from '../../ViewSOPs/ViewSOPs';

class Uploaded extends Component {
    state = {
        Users : [{
            Type: "Inteviews",
            Course: "Job",
            IsClicked : true,
            University: "Google",
            Content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        },
        {
            Type: "Fellowship",
            Course: "PHD",
            IsClicked : false,
            University: "Florida State",
            Content : "2222222 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        },
        {
            Type: "Interview",
            Course: "MBA",
            IsClicked : false,
            University: "MIT",
            Content : "33333333 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        }
        ]
            
    }
    

    changeClickedHandler = (props) => {
        console.log(this.props);
        console.log(this.state);
        let updatedUsers = [];
        updatedUsers = {...this.state};
        console.log({updatedUsers});
        updatedUsers.Users.map(User => 
            User.IsClicked = false
        );
        updatedUsers.Users.map(User => 
            User.Course == this.props.Course ? /*User.setState({IsClicked : true})*/ console.log(User) : null );
        console.log({updatedUsers});
        this.setState(...updatedUsers);
        console.log(this.state);
    };

    render() {
        return (
            <div className="container">
                <ViewSOPs 
                Users={this.state.Users}
                onClick = {this.changeClickedHandler}/>
                
            </div>
        );
    }
}

export default Uploaded;