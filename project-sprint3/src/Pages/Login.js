
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import RegisterUser from '../components/RegisterUser';
import LoginUser from '../components/LoginUser'

class Login extends Component {
  render() {
    return (
      <div className='login'>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/user" className="navbar-brand">
            Online Voting System
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Register
              </Link>
            </li>
          </div>
        </nav>

        <div className="container">
          <Switch>
           
            <Route exact path="/add" component={RegisterUser} />
            <Route path="/user" component={LoginUser} />
          
          </Switch>
        </div>
      </div>
    );
  }
}

export default Login;

