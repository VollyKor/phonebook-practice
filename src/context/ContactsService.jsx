import { useState, createContext } from 'react';

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

const ContactCtx = createContext();

function ContactService({ children }) {
  const [contacts, setContacts] = useState(testContacts);

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
    setContacts(prevState => [...prevState, newContact]);
  };

  //  change Contact
  // ========================================
  const changeContact = (contactObj, id) => {
    const changedContactsArray = contacts.reduce((acc, e) => {
      if (e.id === id) {
        contactObj.id = id;
        acc.push(contactObj);
        return acc;
      }
      acc.push(e);
      return acc;
    }, []);
    setContacts(changedContactsArray);
  };

  //  remove Contact
  // =====================================
  const removeContact = idToRemove => {
    console.log('remove Contact');
    const newContactsArray = contacts.filter(({ id }) => id !== idToRemove);
    setContacts(newContactsArray);
  };

  return (
    <ContactCtx.Provider
      value={{
        setContacts,
        addContact,
        removeContact,
        changeContact,
        contacts,
      }}
    >
      {children}
    </ContactCtx.Provider>
  );
}

export { ContactCtx, ContactService };
