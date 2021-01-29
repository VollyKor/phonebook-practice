import React, { useState, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import AddContactForm from './Components/Forms/AddContactForm/AddContactForm';
import NavBar from './Components/NavBar/NavBar';
import Modal from './Components/Modal/Modal';
import Phonebook from './Components/Phonebook/Phonebook';
import Todos from './Components/Todos/Todos';
import Notes from './Components/Notes/Notes';
import HeroView from 'Components/HeroView/HeroView';

// const Notes = lazy(() => './Components/Notes/Notes');

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route path="/phonebook">
            {isModalVisible && (
              <Modal onClose={() => setIsModalVisible(false)}>
                <AddContactForm />
              </Modal>
            )}
            <div className="container">
              <Phonebook handleCLick={() => setIsModalVisible(true)} />
            </div>
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/" exact>
            <HeroView />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
