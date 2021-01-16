import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container">
          <ul className="navbar-nav mb-2 mb-lg-0 justify-content-start">
            <li className=" ">
              <NavLink
                to="/phonebook"
                className="nav-link link-dark"
                activeClassName="active"
              >
                Телефонная книга
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/notes"
                className="nav-link link-primary"
                activeClassName="active"
              >
                Заметки
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/"
                className="nav-link link-primary"
                activeClassName="active"
                exact
              >
                Что-то еще
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
