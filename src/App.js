import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Services from './Services';
import "./NavLink.css";


class App extends Component {
  constructor (props){
    super(props);
    this.state = {};
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>  
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="/about" >
                    <About />
                  </Route>
                  <Route path="/services" >
                    <Services />
                  </Route>
                </Switch>
           </BrowserRouter>        
        );
    }
}

export default App;