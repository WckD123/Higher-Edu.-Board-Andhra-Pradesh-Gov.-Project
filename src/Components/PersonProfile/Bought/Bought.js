import React, { Component } from 'react';
import ViewSOPs from '../../ViewSOPs/ViewSOPs';
import { connect } from 'react-redux';


class Bought extends Component {
    

    render() {
        return (
            <div className="container">
                {console.log(this.props)}
                <ViewSOPs 
                Users={this.props.BoughtDocs}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        BoughtDocs : state.personProfile.BoughtDocs
    };
}

export default connect(mapStateToProps)(Bought);