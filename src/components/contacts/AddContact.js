import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// const propTypes = {};
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

import axios from 'axios';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  // Bad Use
  // onNameChange = e => this.setState({ name: e.target.value });
  // onEmailChange = e => this.setState({ email: e.target.value });
  // onPhoneChange = e => this.setState({ phone: e.target.value });

  // Better
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check for Errors
    if (name === '') {
      this.setState({
        errors: { name: 'Name is required' }
      });
      console.log(this.state);
      return;
    }
    if (email === '') {
      this.setState({
        errors: { email: 'Email is required' }
      });
      return;
    }
    if (phone === '') {
      this.setState({
        errors: { phone: 'Phone is required' }
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );

    dispatch({ type: 'ADD_CONTACT', payload: res.data });

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    console.log(this.state);

    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-4">
              <div className="card-header">
                Create New Contact
                <div className="card-body">
                  <form
                    onSubmit={this.onSubmit.bind(this, dispatch)}
                    className="form-inline"
                  >
                    <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputGroup
                      label="Phone"
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                    <TextInputGroup
                      label="Phone"
                      name="phone"
                      placeholder="Enter phone"
                      value={phone}
                      onChange={this.onChange}
                      error={errors.phone}
                    />
                    <button type="submit" className="btn btn-primary">
                      Add contact
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// AddContact.propTypes = propTypes;

export default AddContact;
