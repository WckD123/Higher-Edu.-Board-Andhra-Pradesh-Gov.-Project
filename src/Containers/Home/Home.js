import React from 'react';
import Search from '../../Components/Search/Search';
import TopColleges from '../../Components/TopColleges/TopColleges';
import Cards from '../../Components/Cards/Cards';
import './Home.css'

const Home = () => {
    return (
        <div className="body-container">
            <center>
                <div className="Refer-admission-SOPs">Refer Admission SOPs, Interviews Logs from verified people.</div>
                <Search />
                <TopColleges />
                <Cards /> 
            </center>   
        </div>
    );
};

export default Home;