import React, { Component } from 'react';
import NavBar from './Navbar';
import './Home.css';
import Footer from './Footer';
class Home extends Component {
    render() {
        return (
            <>
            <NavBar />
            <div className='cover'>
                <div>
                    <img className="coverimage" src="https://static.wixstatic.com/media/1e3496_167679c3858f416b8858dcf4abe102f2.jpg/v1/fill/w_1956,h_800,al_c,q_85,usm_0.66_1.00_0.01/1e3496_167679c3858f416b8858dcf4abe102f2.webp" alt="coverimage"></img>
                </div>
                <div className="covertext row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <button className='coverbutton'> Contact Us </button>
                    </div>
                </div>

            </div>
            <div className="container">
                <h1 className="titlehome">
                    What we are
                </h1>
                <div className="row">
                <div className="col-6"> SEAsiaConnect is a consultancy company focusing on providing international FMCG companies with the local expertise to establish distribution structures for their brands in South East Asian markets. Using our local market knowledge plus international FMCG expertise we assist clients to develop the right marketing and sales strategy for launching or growing their brands in the region. Equally as important, we execute the strategy on behalf of our clients. We offer a deeply customized approach tailoring solutions according to the needs of our clients. Solutions range from devising a single country / single category market entry strategy to executing a multi-brand regional business expansion to ongoing brand and distributor management. 
                We focus on SEA , namely Singapore, Malaysia, Thailand, Indonesia, Philippines, Vietnam, and India. 
                </div>
                <div className="col-6">
                    As a company we specialize in;
                    Distribution Concept Development, Local Partner Search, Set Up / Legal / Product Registration Service, General Management / Marketing Services for Local and Regional Organizations.
                </div>
                </div>
            </div>
            <Footer />
            
        </>
        );
    }
}

export default Home;