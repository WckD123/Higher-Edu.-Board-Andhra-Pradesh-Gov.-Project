import React from 'react';
import './TopCollege.css'

const TopCollege = () => {
    return (
        <div className="row">
            <div className="col-xs-2 col-md-2 col-xl-2">
            </div>
            <div className="col-xs-8 col-md-8 col-xl-8">
                <div className="row">
                    <center>
                    <p className="collegeName">
                        College Logo
                    </p>
                    </center>
                </div>
                <div className="row">
                    <center>
                    <p className="collegeName">
                        College Logo
                    </p>
                    </center>
                </div>
                <div className="row">
                    <center>
                    <p className="SOPandInterview">
                        No. of SOPs
                    </p>
                    </center>
                </div>
                <div className="row">
                    <center>
                    <p className="SOPandInterview">
                        No. Of Interview Logs
                    </p>
                    </center>
                </div>
            </div>
            <div className="col-xs-2 col-md-2 col-xl-2">
                <div className="Line" />
            </div>
        </div>
    );
};

export default TopCollege;