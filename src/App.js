import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/phonebook';

import Form from './Components/Form/Form';
import NavBar from './Components/NavBar/NavBar';
import Modal from './Components/Modal/Modal';
import Phonebook from './Components/Phonebook/Phonebook';
import Todos from './Components/Todos/Todos';
import Notes from './Components/Notes/Notes';

// For id gen
// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); / generate id

const {
  addContact,
  changeContact,
  setContacts,
  deleteContact,
} = contactsOperations;

function App() {
  console.log(contactsOperations);
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(() => [...testContacts]);

  const [filterQuery, setFilter] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  // get items from local storage on first render
  // =====================================
  // useEffect(() => {
  //   if (localStorage.getItem('contacts') !== null) {
  //     const data = JSON.parse(localStorage.getItem('contacts'));
  //     setContacts(data);
  //   }
  // }, []);

  useEffect(() => {
    dispatch(setContacts());
  }, [dispatch]);

  // add items to local storage
  // =====================================
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // add contact to Contact List
  // =====================================
  const addContact = newContact => {
    if (
      contacts.some(({ firstName }) => {
        return firstName.includes(newContact.firstName);
      })
    ) {
      alert(`${newContact.firstName} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
  };

  //  remove Contact
  // =====================================
  // const removeContact = idToRemove => {
  //   console.log('remove Contact');
  //   const newContactsArray = contacts.filter(({ id }) => id !== idToRemove);
  //   setContacts(newContactsArray);
  // };

  //  change Contact
  // ========================================
  // const changeContact = (contactObj, id) => {
  //   console.log('contactObj', contactObj);
  //   const changeContactsArray = contacts.reduce((acc, e) => {
  //     if (e.id === id) {
  //       contactObj.id = id;
  //       acc.push(contactObj);
  //       return acc;
  //     }
  //     acc.push(e);
  //     return acc;
  //   }, []);
  //   console.log('changeContactsArray', changeContactsArray);
  //   setContacts(changeContactsArray);
  // };

  const visibleContacts = () => {
    const filtered = filterQuery.toLowerCase();
    const filteredArr = contacts.filter(({ firstName }) =>
      firstName.toLowerCase().includes(filtered),
    );
    return filteredArr;
  };

  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route path="/phonebook">
            {isModalVisible && (
              <Modal onClose={() => setIsModalVisible(false)}>
                <Form />
              </Modal>
            )}
            <div className="container">
              <Phonebook
                data={{ contacts, filterQuery }}
                setFilter={setFilter}
                handleCLick={() => setIsModalVisible(true)}
                contactList={visibleContacts()}
                removeContact={() => dispatch(deleteContact())}
              />
            </div>
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/" exact>
            <Todos />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
