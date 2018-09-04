import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// const propTypes = {};

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: 'Fred Smith',
    email: 'test@test.fr',
    phone: '777-777-7777'
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-4">
        <div className="card-header">
          Create New Contact
          <div className="card-body">
            <form onSubmit={this.onSubmit} className="form-inline">
              <div className="form-group mr-3">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter name"
                  defaultValue={name}
                  ref={this.nameInput}
                />
              </div>
              <div className="form-group mr-3">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  defaultValue={email}
                  ref={this.emailInput}
                />
              </div>
              <div className="form-group mr-3">
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Enter phone"
                  defaultValue={phone}
                  ref={this.phoneInput}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add contact
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// AddContact.propTypes = propTypes;

export default AddContact;
