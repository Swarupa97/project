import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ListAdmin from '../components/ListAdmin';
import AddAdmin from '../components/AddAdmin';
import ViewAdmin from '../components/ViewAdmin';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Navbar from './Navbar';

 class AdminComponent extends Component {
  render() {
    return (
      <div className="admindetails">
          <Navbar />
      <Router>
      {/* <HeaderComponent /> */}
        <div className="container">
              <Router>
                   <Switch> 
                          <Route exact path  = "/"  component = {ListAdmin}></Route>
                          <Route path = "/admins" component = {ListAdmin}></Route>
                          <Route path = "/add-admindetails/:id" component = {AddAdmin}></Route>
                          <Route path = "/view-admindetails/:id" component = {ViewAdmin}></Route> 
                 </Switch>
                 </Router>
        </div>
      <FooterComponent />
</Router>
</div>
      
    );
  }
}

export default AdminComponent;