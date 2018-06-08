import React from 'react';
import Search from '../../Components/Search/Search';
import TopColleges from '../../Components/TopColleges/TopColleges';
import Cards from '../../Components/Cards/Cards';
import './Home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div class="body-container">
            <center>
                <div class="row">
                    <div class="col-md-1 col-xs-0"></div>
                    <div class="col-md-10 col-xs-12 Refer-admission-SOPs">
                        Refer Admission SOPs, Interviews Logs from verified people.
                    </div>
                </div>
                <Search />
                <TopColleges />
                <Cards /> 
                {/*<div className="row">
                    <div className="col">1</div>
                    <div className="col">2</div>
                    <div className="col">3</div>
                    <div className="col">4</div>
                </div>*/}
            </center>   
        </div>
    );
};

export default Home;