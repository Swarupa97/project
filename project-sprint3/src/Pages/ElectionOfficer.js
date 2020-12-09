import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ListEOfficerComponent from '../components/ListEOfficerComponent';
import CreateEOfficerComponent from '../components/CreateEOfficerComponent';
import ViewEOfficerComponent from '../components/ViewEOfficerComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Navbar from '../components/Navbar';



 class ElectionOfficer extends Component {
  render() {
    return (
      <div className='officers'>
       <Navbar/> 
      <Router>
      {/* <HeaderComponent /> */}
        <div className="container">
            <Switch> 
                  <Route path = "/" exact component = {ListEOfficerComponent}></Route>
                  <Route path = "/officers" component = {ListEOfficerComponent}></Route>
                  <Route path = "/add-officer/:officerId" component = {CreateEOfficerComponent}></Route>
                  <Route path = "/view-officer/:officerId" component = {ViewEOfficerComponent}></Route>
            </Switch>
        </div>
      <FooterComponent />
</Router>
</div>
      
    );
  }
}

export default ElectionOfficer;