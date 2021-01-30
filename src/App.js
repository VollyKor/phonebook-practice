import React, { useState, useEffect, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { authSelectors, authOperations } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import LogInForm from './Components/Forms/LogInForm/LogInForm';
import SignUpForm from './Components/Forms/SignUpForm/SIgnUpForm';
import AddContactForm from './Components/Forms/AddContactForm/AddContactForm';
import NavBar from './Components/NavBar/NavBar';
import Modal from './Components/Modal/Modal';
import Phonebook from './Components/Phonebook/Phonebook';
import Todos from './Components/Todos/Todos';
import Notes from './Components/Notes/Notes';
import HeroView from 'Components/HeroView/HeroView';
import PrivateRoute from 'Components/Routes/PrivateRoute';
import PublicRoute from 'Components/Routes/PublickRoute';

// const Notes = lazy(() => './Components/Notes/Notes');

function App() {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    if (token !== '') {
      dispatch(authOperations.getUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <PublicRoute path="/" exact>
            <HeroView />
          </PublicRoute>

          <PrivateRoute path="/phonebook">
            {isModalVisible && (
              <Modal onClose={() => setIsModalVisible(false)}>
                <AddContactForm />
              </Modal>
            )}
            <div className="container">
              <Phonebook handleCLick={() => setIsModalVisible(true)} />
            </div>
          </PrivateRoute>
          <PrivateRoute path="/todos">
            <Todos />
          </PrivateRoute>

          <PublicRoute path="/notes">
            <Notes />
          </PublicRoute>

          <PublicRoute path="/register" restricted>
            <Modal onClose={() => history.goBack()}>
              <SignUpForm />
            </Modal>
          </PublicRoute>

          <PublicRoute path="/login" restricted>
            <Modal onClose={() => history.goBack()}>
              <LogInForm />
            </Modal>
          </PublicRoute>
        </Switch>
      </main>
    </>
  );
}

export default App;
