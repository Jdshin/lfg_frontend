import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

function NavComp(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="align-items-center">
                <Navbar.Brand href="/">LookingForGroup</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/games">Find Games</Nav.Link>
                    <Nav.Link href='/events'>Events</Nav.Link>
                    <Nav.Link href='/account/create'>Signup</Nav.Link>
                    <Nav.Link href='/account/login'>Login</Nav.Link>
                    {/* <Nav.Link href="/proview/">Protected View test</Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavComp;