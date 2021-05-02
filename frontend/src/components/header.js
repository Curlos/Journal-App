import { Nav, Navbar, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="white" variant="">
            <Nav className="container-fluid">
                <Nav.Item id="journal-title">
                    <Navbar.Brand to="/">Digital Journal | Create a Note</Navbar.Brand>
                </Nav.Item>
                <Nav.Item className="ml-auto">
                    <Nav.Link>Log In</Nav.Link>
                </Nav.Item>
                <Nav.Item className="justify-content-end">
                    <Nav.Link>Sign Up</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default Header;