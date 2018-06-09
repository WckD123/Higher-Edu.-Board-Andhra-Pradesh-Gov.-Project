import React, { Component } from 'react';
import ViewSOPs from '../../ViewSOPs/ViewSOPs';
import { connect } from 'react-redux';


class Uploaded extends Component {


            /* **** ChageClickedHandler function to change the Content shown 
            based  on the SOP name clicked on the left hand menu   ****  */

    
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
                Users={this.props.UploadedDocs}
                onClick = {this.changeClickedHandler} />

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        UploadedDocs : state.UploadedDocs
    };
}

export default connect(mapStateToProps)(Uploaded);