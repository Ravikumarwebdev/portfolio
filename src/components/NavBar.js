import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import '../styles/navbar.css'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1TyeGt8Xv6c-evG-n_sE5IBHbDcBdS4fh/view?usp=sharing" target='blank' className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ravi-kumar-97372b182" target='blank' style={{color:'white'}}><FaLinkedinIn /></a>
              <a href="https://github.com/Ravikumarwebdev" target='blank' style={{color:'white'}}><BsGithub /></a>
              <a href="https://wa.link/6bwz72" target='blank' style={{color:'white'}}><FaWhatsapp /></a>
            </div>
            <button className="vvd" ><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default NavBar