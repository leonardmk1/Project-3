import React, { Component } from 'react';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import API from '../../lib/API';
import { FaLessThanEqual } from 'react-icons/fa';
import {Redirect} from "react-router-dom";
class Register extends Component {
  state = {
    error: "",
    redirect: false,
  }

  handleSubmit = (email, password, confirm) => {
    if (password !== confirm) {
      return this.setState({ error: "Passwords do not match." });
    }

    API.Users.create(email, password)
      .then(response => response.data)
      .then(user => {this.setState({redirect:true})})
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    return (
      <div className='Register'>
        <div className='row'>
          <div className='col'>
            <h1 className="mt-3">Register</h1>
          </div>
        </div>
        {this.state.error &&
          <div className='row'>
            <div className='col'>
              <div className='alert alert-danger mb-3' role='alert'>
                {this.state.error}
              </div>
            </div>
          </div>}
        <div className='row'>
          <div className='col'>
            <RegistrationForm onSubmit={this.handleSubmit} />
          </div>
        </div>
        {this.state.redirect?<Redirect to="/login"></Redirect> : ""}
      </div>
    );
  }
}

export default Register;
