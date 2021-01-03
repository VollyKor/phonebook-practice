import './App.module.css';
import React, { useState, useEffect } from 'react';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import NavBar from './Components/NavBar/NavBar';
import { Switch, Route } from 'react-router-dom';

// For id gen
// import { v4 as uuidv4 } from 'uuid';
// uuidv4();

const testContacts = [
  { id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => [...testContacts]);
  const [filterQuery, setFilter] = useState('');

  // get items from ls on first render
  useEffect(() => {
    if (localStorage.getItem('contacts') !== null) {
      const data = JSON.parse(localStorage.getItem('contacts'));
      setContacts(data);
    }
  }, []);

  // add items to ls
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.some(({ name }) => {
        return name.includes(newContact.name);
      })
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, newContact]);
  };

  const visibleContacts = () => {
    const filtered = filterQuery.toLowerCase();
    const filteredArr = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filtered),
    );
    return filteredArr;
  };

  const removeContact = idToRemove => {
    console.log('remove Contact');
    const newContactsArray = contacts.filter(({ id }) => id !== idToRemove);
    setContacts(newContactsArray);
  };

  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/phonebook">
            <h1>Phone Book</h1>
            <Form onSubmit={addContact} />
            <h2>Contact List</h2>
            <Filter data={{ contacts, filterQuery }} setFilter={setFilter} />
            <ContactList
              ContactList={visibleContacts()}
              removeContact={removeContact}
            />
          </Route>
          <Route path="/notes">notes</Route>
          <Route path="/" exact />
        </Switch>
      </main>
    </>
  );
}

export default App;
