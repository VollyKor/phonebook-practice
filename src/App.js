import './App.module.css';
import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import NavBar from './Components/NavBar/NavBar';
import AddContact from './Components/AddContact/AddContact';
import Modal from './Components/Modal/Modal';
import CloseButton from './Components/CloseButton/CloseButton';

import { ContactCtx } from './context/ContactsService';

// For id gen
// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); / generate id

function App() {
  const [filterQuery, setFilter] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    contacts,
    setContacts,
    removeContact,
    addContact,
    changeContact,
  } = useContext(ContactCtx);

  // get items from local storage on first render
  // =====================================
  useEffect(() => {
    if (localStorage.getItem('contacts') !== null) {
      const data = JSON.parse(localStorage.getItem('contacts'));
      setContacts(data);
    }
  }, []);

  // add items to local storage
  // =====================================
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = () => {
    const filtered = filterQuery.toLowerCase();
    const filteredArr = contacts.filter(e => {
      return e.firstName.toLowerCase().includes(filtered);
    });
    return filteredArr;
  };

  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/phonebook">
            {/* <h1>Phone Book</h1> */}

            {isModalVisible && (
              <Modal onClose={() => setIsModalVisible(false)}>
                <CloseButton onClose={() => setIsModalVisible(false)} />
                <Form addContact={addContact} />
              </Modal>
            )}

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Filter data={{ contacts, filterQuery }} setFilter={setFilter} />
              <AddContact handleClick={() => setIsModalVisible(true)} />
            </div>

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
