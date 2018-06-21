import React, { Component } from 'react';
import ViewSOPs from '../../ViewSOPs/ViewSOPs';
import { connect } from 'react-redux';


class Uploaded extends Component {


            /* **** ChageClickedHandler function to change the Content shown 
            based  on the SOP name clicked on the left hand menu   ****  */
    

    changeClickedHandler = (props) => {
        console.log(this.props.UploadedDocs);
        let updatedUsers = {...this.props.UploadedDocs};
        console.log({updatedUsers});
        let updatedDocs = Object.keys(updatedUsers).map(function(key) {
            return updatedUsers[key];
          });
        console.log(updatedDocs)
        updatedDocs.map(UpdatedDoc => 
            UpdatedDoc.IsClicked = false
        );
        updatedDocs.map(UpdatedDoc => 
           UpdatedDoc.Course == this.props.Course ? this.props.IsClicked = true : null );
        console.log(updatedDocs);
        //this.setState(...updatedDocs);
        //console.log(this.state); */
    };

    render() {
        return (
            <div className="container">
                <ViewSOPs 
                Users={this.props.UploadedDocs}
                onClick = {this.changeClickedHandler}/>
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