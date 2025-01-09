import { useState } from "react";
import { Offcanvas, Button, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Button to Open Menu */}
      <Button
        variant='primary-ooutline-light'
        onClick={handleShow}
        style={{ border: "none", backgroundColor: "transparent" }}>
        <FaBars size={24} color='white' />
      </Button>

      {/* Full-Page Navigation */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement='start'
        className='fullpage-menu bg-dark'
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#343a40",
          color: "white",
        }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className='flex-column text-center'>
            <Link
              to={"/"}
              className='text-white fs-4 my-2'
              style={{ textDecoration: "none", fontWeight: "bold" }}
              onClick={handleClose}>
              Home
            </Link>
            <Link
              to={"about"}
              className='text-white fs-4 my-2'
              style={{ textDecoration: "none", fontWeight: "bold" }}
              onClick={handleClose}>
              About
            </Link>
            <Link
              to={"projects"}
              className='text-white fs-4 my-2'
              style={{ textDecoration: "none", fontWeight: "bold" }}
              onClick={handleClose}>
              Projects
            </Link>
            <Link
              to={"contact"}
              className='text-white fs-4 my-2'
              style={{
                textDecoration: "none",
                fontWeight: "bold",
              }}
              onClick={handleClose}>
              Contact
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menu;
