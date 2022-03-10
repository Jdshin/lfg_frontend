import {Link} from 'react-router-dom'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

function NavComp(props) {
    return (
        <header>
            <Navbar bg="light" expand="true">
                <Container>
                    <Navbar.Brand href="/">Looking For Group</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div>
                            <Link to="/">
                                <div>Home</div>
                            </Link>
                            <Link to="/games">
                                <div>Games</div>
                            </Link>
                        </div>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavComp;