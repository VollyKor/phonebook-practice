import './App.module.css';
import React, { useState, useEffect } from 'react';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import NavBar from './Components/NavBar/NavBar';
import { Switch, Route } from 'react-router-dom';
import AddContact from './Components/AddContact/AddContact';
import Modal from './Components/Modal/Modal';
import CloseButton from './Components/CloseButton/CloseButton';

// For id gen
// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); / generate id

const testContacts = [
  {
    id: 'id-1',
    firstName: 'Simpson',
    lastName: 'Rosie',
    phoneNumber: '459-12-56',
    isChosen: true,
    email: '123@gmail.com',
  },
  {
    id: 'id-2',
    firstName: 'Kline',
    lastName: 'Hermione',
    phoneNumber: '443-89-12',
    isChosen: true,
    email: '123@gmail.com',
  },
  {
    id: 'id-3',
    firstName: 'Clements',
    lastName: 'Eden',
    phoneNumber: '645-17-79',
    isChosen: true,
    email: '123@gmail.com',
  },
  {
    id: 'id-4',
    firstName: 'Copeland',
    lastName: 'Annie',
    phoneNumber: '227-91-26',
    isChosen: true,
    email: '123@gmail.com',
  },
];

function App() {
  const [contacts, setContacts] = useState(() => [...testContacts]);
  const [filterQuery, setFilter] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  // get items from local storage on first render
  useEffect(() => {
    if (localStorage.getItem('contacts') !== null) {
      const data = JSON.parse(localStorage.getItem('contacts'));
      setContacts(data);
    }
  }, []);

  // add items to local storage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // add contact to Contact List
  const addContact = newContact => {
    if (
      contacts.some(({ firstName }) => {
        return firstName.includes(newContact.firstName);
      })
    ) {
      alert(`${newContact.firstName} is already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, newContact]);
  };

  const visibleContacts = () => {
    const filtered = filterQuery.toLowerCase();
    const filteredArr = contacts.filter(({ firstName }) =>
      firstName.toLowerCase().includes(filtered),
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
