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

class ViewSOPs extends Component {

    componentDidMount = () => {
        return(
            this.props.Users.map(User => 
                User.IsClicked ? User.Content : <div></div>
            )
        );
    }

    showContent = () => {

        return(
                this.props.Users.map(User => 
                    "abcd" + console.log(User.IsClicked)
                    //User.IsClicked ? User.Content : <div></div>
                )
        );
    }
    
    
    render() {
        return (
            <div>
            <div className="row">
                <div className="col-xs-12 col-md-2">
                    <div className="row LeftRow">
                        {this.props.Users.map(User => 
                            <div className="col-xs-12 col-md-12" 
                            onClick={this.props.onClick}
                            >
                                <div className="row SOPNames LeftRow">{User.Type}</div>
                                <div className="row SOPNames">{User.Course}</div>
                                <div className="row SOPNames">{User.University}</div>
                                <hr></hr>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-xs-12 col-md-10">
                    {this.componentDidMount}
                </div>
            </div>
        </div>
        );
    }
}

export default ViewSOPs;