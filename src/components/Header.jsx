import React from 'react';
import { Link, useNavigate} from "react-router-dom";
import {useSetContents} from "../hooks/useSetContents";
import styles from "./header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { animateScroll as scroll} from 'react-scroll';


export const Header = () => {

  const {screen} = useSetContents();

 const onClickUp = () => {
    setTimeout(() => {
      scroll.scrollToTop();      
    }, 0);

 }

 const navigate = useNavigate();
 const handleToContact = () => {
  navigate('/contact')
 }


  return (
    <>
    <Navbar collapseOnSelect fixed="top" expand="lg" className={styles.navBarContainer}>
      <Container  fluid className={styles.contentContainer}>
        <Navbar.Brand as={Link} to="/home" className={styles.logo}>
          <div onClick={onClickUp} className={styles.logoContainer}>
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
              <Nav.Link as={Link} to="/language"  smooth='true' duration={100} onClick={onClickUp} eventKey="1" className={ screen === 'language' ? `${styles.linksActive}` : `${styles.links}`}>
                Language Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/ondemand" smooth='true' duration={100} onClick={onClickUp} eventKey="2" className={ screen === 'ondemand' ? `${styles.linksActive}` : `${styles.links}`}>
                On-Demand Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/about" smooth='true' duration={100} onClick={onClickUp} eventKey="3" className={ screen === 'about' ? `${styles.linksActive}` : `${styles.links}`}>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" smooth='true' duration={100} onClick={onClickUp} eventKey="4" className={`${styles.links} ${styles.linksContact}`} >
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
        <button onClick={handleToContact} className={styles.contactButton}>Contact Us</button>
    </Navbar>
    </>
    );
};
