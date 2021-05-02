import { Nav, Navbar, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Digital Journal | Create A Note</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Button variant="link">Log In</Button>
            <Button variant="link">Sign Up</Button>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;