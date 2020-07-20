import React, { Component } from 'react';
import NavBar from './Navbar'

class About extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container">
                Welcome to About
                </div>
            </>
        );
    }
}

export default About;