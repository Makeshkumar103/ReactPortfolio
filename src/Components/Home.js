import React from 'react';
import useTheme from './useTheme';

import './home.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/esm/Stack';
// import Resumebutton from './Resumebutton';
// import {Makesh_Resumepdf} from './photo';cd
// import { ArrowBarLeft, ArrowRight } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faGithub, faXTwitter, faPinterest} from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons';



const Home = () => { 
  const [theme, toggleTheme] = useTheme();
  const pinterest = () => {
    window.open("www.pinterest.com");
  };
  const linkedIn = () => {
    window.open("www.linkedin.com");
  };
  const gitHub = () => {
    window.location.href = "www.github.com";
  };
  const twitter = () => {
    window.location.href = "www.x.com";
  };
  return (
    <>
    <section id = 'Home'>
    <Navbar expand="lg" className="bg-body-tertiary Navebar" fixed='top'>
    {/* <Navbar expand="lg" className="Navebar" fixed='top'> */}
    <Container>
      
      <Navbar.Brand href="#Home"> MAKESHKUMAR </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
        <Nav>
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Services">Services</Nav.Link>
          <Nav.Link href="#Projects">Projects</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>         
        </Nav>
      </Navbar.Collapse> 
      <button onClick={toggleTheme} style={{borderRadius:'50%',border:'1px solid gray',cursor:'pointer'}}>
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun}  />
      </button>
      
    </Container>
  </Navbar>
  <Container flulid-md className='mt-5 p-5' >
    <Row className="justify-content-md-center align-items-center ">
    {/*  <Col xs={12} md={8} className='justify-content-center ' >*/}
      <Col className='mb-3'>
        <Stack>
        <h5 className='text-center'>Hi there! I'm</h5>
        <h3 className='text text-center'>MAKESHKUMAR</h3>
        <h5 className='text-center'>Front-end Developer 
          & Designer</h5>
          <Stack direction='horizontal' gap={2} className=' justify-content-center mb-3'>
          
          <Button variant="outline-secondary" > Hire Me</Button>
          {/* style={{background:'blue',cursor:'pointer',color:'white',borderRadius:'15px',padding:'5px'}} */}
          <a href='www.google.com'><Button variant="outline-secondary" > Download Resume</Button></a>          
        </Stack>
        <Stack direction='horizontal' gap={5} className='justify-content-center'>
        <button onClick={gitHub} style={{background:'none',border:'none',cursor:'pointer',color:'var(--text-color)'}}><FontAwesomeIcon icon={faGithub} animation="glow"/></button>
        <button onClick={linkedIn} style={{background:'none',border:'none',cursor:'pointer',color:'var(--text-color)'}}><FontAwesomeIcon icon={faLinkedinIn} /></button>
        <button onClick={pinterest} style={{background:'none',border:'none',cursor:'pointer',color:'var(--text-color)'}}><FontAwesomeIcon icon={faPinterest} /></button>
        <FontAwesomeIcon icon={faXTwitter} onClick={twitter} color='var(--text-color)' />   

        </Stack>
        
        </Stack>
       
        </Col>
        {/* <Col md={4} className='justify-content-center'> */}
        <Col xs={12} md={4}>
        <Image src='./image/Rimage.jpg' roundedCircle fluid  className='mt-5'/>
        {/* style={{borderRadius:"200px", boxShadow:" 50px -40px var(--text-color)"}} */}
      </Col>
      {/* <Col md={4}>
        <Image src='./image/Rimage.jpg' roundedCircle fluid/>
      </Col> */}
      {/* <Col md={4} className=' justify-content-center position-relative '>
        *** <Image src='./image/Rimage.jpg' className='img-fluid rounded shadow-lg position-relative' roundedCircle fluid/> ***
        <div className='position-absolute top-10 start-50 translate-middle p-3 bg-dark text-white rounded' style={{ boxShadow: "50px -40px rgba(0, 0, 0, 0.2", borderRadius:"50%" }}><Image src='./image/Rimage.jpg'fluid/> </div>
      </Col> */}
    </Row>

  </Container>
 
  </section>
  
  </>
  )
}

export default Home