import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ListUserComponent from '../components/ListUserComponent';
import CreateUserComponent from '../components/CreateUserComponent';
import ViewUserComponent from '../components/ViewUserComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Navbar from '../components/Navbar';



 class User extends Component {
  render() {
    return (
      <div className='users'>
      <Navbar/>
      <Router>
      {/* <HeaderComponent /> */}
        <div className="container">
            <Switch> 
            <Route exact path = "/"  component = {ListUserComponent}></Route>
            <Route path = "/users" component = {ListUserComponent}></Route>
            <Route path = "/add-userdetails/:userId" component = {CreateUserComponent}></Route>
            <Route path = "/view-userdetails/:userId" component = {ViewUserComponent}></Route> 
            </Switch>
        </div>
      <FooterComponent/>
</Router>
</div>
      
    );
  }
}

export default User;