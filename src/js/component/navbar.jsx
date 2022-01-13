import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

const NavBar = () => {
	return (
		<>
			<Navbar bg="dark" expand="lg">
				<Container>
					<Navbar.Brand href="#home"> Start Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
