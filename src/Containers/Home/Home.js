import React from 'react';
import Search from '../../Components/Search/Search';
import TopColleges from '../../Components/TopColleges/TopColleges';
import Cards from '../../Components/Cards/Cards';
import './Home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="body-container">
            <center>
                <div className="Refer-admission-SOPs">Refer Admission SOPs, Interviews Logs from verified people.</div>
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