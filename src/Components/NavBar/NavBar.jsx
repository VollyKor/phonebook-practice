import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex' }}>
          <li className="nav-list-item">
            <NavLink to="/phonebook">Телефонная книга</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/notes">Заметки</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/">Что-то еще</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
