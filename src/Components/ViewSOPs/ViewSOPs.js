import React from 'react';
import './ViewSOP.css';

const ViewSOPs = (props) => {

    {/*const showSOPList = () => {
        return(
            props.Users.map(user => 
                <div className="col-xs-12 col-md-12">
                    <div className="row SOPNames">{user.Type}</div>
                    <div className="row SOPNames">{user.Course}</div>
                    <div className="row SOPNames">{user.University}</div>
                </div>
            )
        )
    }; */}

    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-md-2">
                    <div className="row LeftRow">
                        {props.Users.map(User => 
                            <div className="col-xs-12 col-md-12">
                                <div className="row SOPNames LeftRow">{User.Type}</div>
                                <div className="row SOPNames">{User.Course}</div>
                                <div className="row SOPNames">{User.University}</div>
                                <hr></hr>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewSOPs;