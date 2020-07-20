import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"



class Footer extends Component {
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                <div className="col-3">
                    <ul> 
                        <li>
                            <img src="" alt="" />
                        </li>
                        <li> 
                          <h3>About Us</h3>
                          <p> We are a </p>
                        </li> 
                    </ul>
                </div>
                <div className="col-3">
                <ul> 
                    <li>
                        <h3>Germany</h3>
                    </li>
                    <li> 
                        <p>Taunsblick 5 <br />
                        56112 Lahnstein  <br /> 
                        Germany</p>
                    </li>
                    <li> 
                        <p>+49-15259115242</p>
                    </li>
                    
                </ul>
                </div>
                <div className="col-3">
                <ul> 
                    <li>
                        <h3>Vietnam</h3>
                    </li>
                    <li> 
                        <p>Taunsblick 5 <br />
                        Phu My Hung,Q7  <br /> 
                        Ho Chi Minh City <br /> 
                        Vietnam </p>
                    </li>
                    <li> 
                        <p>+84-34482397</p>
                    </li>
                    
                </ul>
                </div>
                <div className="col-3">
                <ul> 
                    <li>
                    <Link to="/dashboard">
                        <button type="button">
                            Contact Us!
                        </button>
                    </Link>
                    </li>
                    <li> 
                        <a><strong>Telefone:</strong> 926017784</a>
                    </li>
                    
                </ul>
                </div>


                </div>
            </div>
        </>
        );
    }
}

export default Footer;