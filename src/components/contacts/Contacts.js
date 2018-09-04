import React, { Component } from 'react';
import Contact from './Contact';

import { Consumer } from '../../context';
// import AddContact from './AddContact';

class Contacts extends Component {
  render() {
    return (
      <div>
        {/* <AddContact /> */}
        <Consumer>
          {value => {
            const { contacts } = value;
            return (
              <React.Fragment>
                <h1 className="display-4">Contact List</h1>
                {contacts.map(contact => (
                  <Contact key={contact.id} contact={contact} />
                ))}
              </React.Fragment>
            );
          }}
        </Consumer>
      </div>
    );
  }
}

export default Contacts;
