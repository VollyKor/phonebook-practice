import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default function NavBar() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Nav className="mr-auto">
          <NavItem className="nav-list-item">
            <NavLink to="/phonebook">Телефонная книга</NavLink>
          </NavItem>
          <NavItem className="nav-list-item">
            <NavLink to="/notes">Заметки</NavLink>
          </NavItem>
          <NavItem className="nav-list-item">
            <NavLink to="/">Что-то еще</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
}

<Nav className="mr-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#link">Link</Nav.Link>
</Nav>;
