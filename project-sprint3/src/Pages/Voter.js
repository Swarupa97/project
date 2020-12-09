import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ListVoterComponent from '../components/ListVoterComponent';
import CreateVoterComponent from '../components/CreateVoterComponent';
import ViewVoterComponent from '../components/ViewVoterComponent';
import FooterComponent from '../components/FooterComponent';
import Navbar from '../components/Navbar';



 class Voter extends Component {
  render() {
    return (
      <div className='voters'>
      <Navbar/>
      <Router>
      
        <div className="container">
            <Switch> 
            <Route exact path = "/"  component = {ListVoterComponent}></Route>
            <Route path = "/voters" component = {ListVoterComponent}></Route>
            <Route path = "/add-reg_society/:voterId" component = {CreateVoterComponent}></Route>
            <Route path = "/view-reg_society/:voerId" component = {ViewVoterComponent}></Route> 
            </Switch>
        </div>
      <FooterComponent/>
</Router>
</div>
      
    );
  }
}

export default Voter;