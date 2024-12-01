import { Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Navbar.Brand className="mx-auto">📝 My To-Do App</Navbar.Brand>
    </Navbar>
  );
}
export default Header;
