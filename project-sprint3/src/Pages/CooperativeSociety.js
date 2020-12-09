import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ListCooperativeSocietyComponent from '../components/ListCooperativeSocietyComponent';
import CreateCooperativeSocietyComponent from '../components/CreateCooperativeSocietyComponent';
import ViewCooperativeSocietyComponent from '../components/ViewCooperativeSocietyComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Navbar from '../components/Navbar';




 class CooperativeSociety extends Component {
  render() {
    return (
      <div className='societies'>
      <Navbar/>  
      <Router>
      {/* <HeaderComponent /> */}
        <div className="container">
            <Switch> 
            <Route path = "/" exact component = {ListCooperativeSocietyComponent}></Route>
                          <Route path = "/societies" component = {ListCooperativeSocietyComponent}></Route>
                          <Route path = "/add-society/:societyId" component = {CreateCooperativeSocietyComponent}></Route>
                          <Route path = "/view-society/:societyId" component = {ViewCooperativeSocietyComponent}></Route>  
            </Switch>
        </div>
      <FooterComponent />
</Router>
</div>
      
    );
  }
}

export default CooperativeSociety;