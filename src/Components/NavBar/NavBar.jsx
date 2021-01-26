import Button from 'Components/Button/Button';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.scss';
import icon from '../../images/owl.svg';
import Modal from 'Components/Modal/Modal';
import LogInForm from '../Forms/LogInForm/LogInForm';
import SignUpForm from '../Forms/SignUpForm/SIgnUpForm';

export default function NavBar() {
  const [isSignInFormVisible, setIsSignInFormVisible] = useState(false);
  const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className={s.header}>
      <div className={`${s.wrapper} container flex-box`}>
        <nav className={s.navBar}>
          <ul className={s.list}>
            <li className={s.item}>
              <NavLink
                to="/phonebook"
                className={s.link}
                activeClassName={s.active}
              >
                Phonebook
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink
                to="/notes"
                className={s.link}
                activeClassName={s.active}
              >
                Notes
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink
                to="/"
                className={s.link}
                activeClassName={s.active}
                exact
              >
                Todos
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={s.authWrapper}>
          {isLoggedIn ? (
            <div className="flex-box">
              <img className={s.icon} src={icon} alt="icon"></img>
              <span className={s.user}>hello {'user'}</span>
              <Button className={s.btnLogout}>Logout</Button>
            </div>
          ) : (
            <>
              <Button
                className={s.btnLogin}
                onClick={() => setIsSignInFormVisible(true)}
              >
                LOG IN
              </Button>
              <Button
                className={s.btnReg}
                onClick={() => setIsRegisterFormVisible(true)}
              >
                SIGN UP
              </Button>
            </>
          )}
        </div>
      </div>

      {isRegisterFormVisible && (
        <Modal onClose={() => setIsRegisterFormVisible(false)}>
          <SignUpForm />
        </Modal>
      )}

      {isSignInFormVisible && (
        <Modal onClose={() => setIsSignInFormVisible(false)}>
          <LogInForm />
        </Modal>
      )}
    </header>
  );
}
