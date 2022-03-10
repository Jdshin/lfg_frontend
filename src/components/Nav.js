import {Link} from 'react-router-dom'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

function NavComp(props) {
    return (
            // <Navbar bg="light" expand="lg">
            //     <Container class="align-items-center" >
            //         <Navbar.Brand href="/">Looking For Group</Navbar.Brand>
            //         <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav className="me-auto">
            //             <div class="container">
            //                 <Link to="/games">
            //                     <div>Games</div>
            //                 </Link>
            //             </div>
            //             <div class="container">
            //                 <Link to="/events">
            //                     <div>Events</div>    
            //                 </Link>
            //             </div>
            //         </Nav>
            //         </Navbar.Collapse>
            //     </Container>
            // </Navbar>

        <Navbar bg="light" expand="lg">
            <Container class="align-items-center">
                <Navbar.Brand href="/">LookingForGroup</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/games">Find Games</Nav.Link>
                    <Nav.Link href='/events'>Events</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavComp;