    /*const showSOPList = () => {
        return(
            props.Users.map(user => 
                <div className="col-xs-12 col-md-12">
                    <div className="row SOPNames">{user.Type}</div>
                    <div className="row SOPNames">{user.Course}</div>
                    <div className="row SOPNames">{user.University}</div>
                </div>
            )
        )
    }; */



import React, { Component } from 'react';
import './ViewSOP.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class ViewSOPs extends Component {

    shouldComponentUpdate(){
        return true;
    }


    showContent = () => {

        return(
                this.props.uploadedDocuments.map(uploadedDocument => 
                    //"abcd" + console.log(User.IsClicked)
                    uploadedDocument.IsClicked ? uploadedDocument.Content : <div></div>
                )
        );
    }
    
    
    render() {
        return (
            <div>
            <div className="row">
                <div className="col-xs-12 col-md-2">
                    <div className="row LeftRow">
                        {this.props.uploadedDocuments.map(uploadedDocument => 
                            <div className="col-xs-12 col-md-12" 
                            onClick={this.props.onClick}
                            >
                                <div className="row SOPNames LeftRow">{uploadedDocument.Type}</div>
                                <div className="row SOPNames">{uploadedDocument.Course}</div>
                                <div className="row SOPNames">{uploadedDocument.University}</div>
                                <hr></hr>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-xs-12 col-md-10">
                    {this.props.uploadedDocuments.map(uploadedDocument => 
                        //"abcd" + console.log(User.IsClicked)
                        uploadedDocument.IsClicked ? uploadedDocument.Content : <div></div>
                    )}
                </div>
            </div>
        </div>
        );
    }
}

export default ViewSOPs;