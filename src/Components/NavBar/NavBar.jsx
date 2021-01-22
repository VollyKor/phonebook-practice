import { NavLink } from 'react-router-dom';
import s from './NavBar.module.scss';

export default function NavBar() {
  return (
    <header className={s.header}>
      <nav className={`container ${s.navBar}`}>
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
            <NavLink to="/notes" className={s.link} activeClassName={s.active}>
              Notes
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/" className={s.link} activeClassName={s.active} exact>
              Todos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
