import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Header = () => {
  
  return (
    <Navbar fixed="top" expand="lg" className={styles.navBarContainer}>
      <Container fluid className={styles.contentContainer}>
        <Navbar.Brand as={Link} to="/" className={styles.logo}>
          <div className={styles.logoContainer}>
            <img
              src="/assets/img/logo/logo.svg"
              alt="logo"
              className={styles.logoImg}
            />
            <span className={styles.title}>The Spanish Toolbox</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-lg`}
          className={styles.btnToggle}
        >
          <div className={styles.barsContainer}>
            <div className={styles.bars}></div>
            <div className={styles.bars}></div>
            <div className={styles.bars}></div>
          </div>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabelexpand-lg`}
          placement="end"
          className={styles.canvasContainer}
          style={{'backgroundColor':'#f9c640', width:'100vw'}}
        >
          <Offcanvas.Header closeButton className={styles.canvasHeader}>
            <Offcanvas.Title
              id={`offcanvasNavbarLabelexpand-lg`}
              className={styles.canvasTitle}
            >
                <img
                  src="/assets/img/logo/logo.svg"
                  alt="logo"
                  className={styles.canvasLogoImg}
                  style={styles['.canvasLogoImg']}
                />
                <span 
                  className={styles.canvasLogotitle}
                  style={styles['.canvasLogotitle']}
                >
                  The Spanish Toolbox
                </span>

            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={styles.canvasBody} >
            <Nav
              className={`justify-content-end flex-grow-1 pe-3 ${styles.linksContainer}`}
              style={styles['.linksContainer']}
            >
              <Nav.Link as={Link} to="/language" eventKey="1" className={styles.links} style={styles['.links']} >
                Language Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/" eventKey="2" className={styles.links} style={styles['.links']}>
                Special Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/" eventKey="3" className={styles.links} style={styles['.links']}>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/" eventKey="4" className={styles.links} style={styles['.links']}>
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
        <button className={styles.contactButton}>Contact Us</button>
    </Navbar>
  );
};
