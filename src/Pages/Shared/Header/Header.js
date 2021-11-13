import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Button from "react-bootstrap/Button";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">Jdm Lighting</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#reviews">
                Reviews
              </Nav.Link>
              {user?.email ? (
                <Nav.Link
                  as={HashLink}
                  className="text-white"
                  to="/manageallorders#manage-allorders"
                >
                  Manage AllOrders
                </Nav.Link>
              ) : (
                <></>
              )}
              {user?.email ? (
                <Nav.Link
                  as={HashLink}
                  className="text-white"
                  to="/myorders#my-orders"
                >
                  My Orders
                </Nav.Link>
              ) : (
                <></>
              )}
              {user?.email ? (
                <Nav.Link
                  as={HashLink}
                  className="text-white"
                  to="/addservice#add-service"
                >
                  Add Service
                </Nav.Link>
              ) : (
                <></>
              )}
              {user?.email ? (
                <Nav.Link
                  as={HashLink}
                  className="text-white"
                  to="/review#review"
                >
                  Add Review
                </Nav.Link>
              ) : (
                <></>
              )}
              {user?.email ? (
                <Button onClick={logOut} variant="light">
                  Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>

            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
