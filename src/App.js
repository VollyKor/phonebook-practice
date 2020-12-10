import './App.module.css';
import React, { Component } from 'react';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

// For id gen
// import { v4 as uuidv4 } from 'uuid';
// uuidv4();

const testContacts = [
  { id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: [...testContacts],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    if (
      contacts.some(({ name }) => {
        return name.includes(newContact.name);
      })
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  filterValue = value => {
    this.setState({ filter: value });
  };

  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const filtered = filter.toLowerCase();
    const filteredArr = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filtered),
    );
    return filteredArr;
  };

  removeContact = idToRemove => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idToRemove),
    }));
  };

  render() {
    return (
      <main className="container">
        <h1>Phone Book</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contact List</h2>
        <Filter data={this.state} setFilter={this.filterValue} />
        <ContactList
          ContactList={this.visibleContacts()}
          removeContact={this.removeContact}
        />
      </main>
    );
  }
}

export default App;
