import React , { Component } from 'react';
import Search from '../../Components/Search/Search';
import TopColleges from '../../Components/TopColleges/TopColleges';
import Cards from '../../Components/Cards/Cards';
import './Home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SellerModal from '../../Components/SellerModal/SellerModal';

class Home extends Component {
    state = {
        showSellerModal : false
    }

    hideModalHandler = () => {
        this.setState( { showSellerModal : false } );
    }

    showModalHandler = () => {
        this.setState( { showSellerModal : true } );
    }

    

    render(){
        return (
            <div class="body-container">
                {this.state.showSellerModal ? <SellerModal 
                    show={this.state.showSellerModal} 
                    showModal={this.showModalHandler}
                    hideModal={this.hideModalHandler}
                /> : null}
                <center>
                    <div class="row">
                        <div class="col-md-1 col-xs-0"></div>
                        <div class="col-md-10 col-xs-12 Refer-admission-SOPs">
                            Refer Admission SOPs, Interviews Logs from verified people.
                        </div>
                    </div>
    
                        {/* **** Adding the Search, Top Colleges and User Cards components.  ****  */}
                        {/* **** Their JS files can be found in the components folder respectively  ****  */}
    
                    <Search />
                    <TopColleges />
                    <Cards showModal={this.showModalHandler} />
                </center>   
            </div>
        );
    }
    
};

export default Home;