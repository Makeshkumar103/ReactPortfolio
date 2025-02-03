import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';
// import { Box } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faBootstrap, faJs} from '@fortawesome/free-brands-svg-icons';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import './About.css';
import Stack from 'react-bootstrap/esm/Stack';

const About = () => {
  return (
<>
<section id='About'>
<Container flulid-md className='p-5'>
  <h1 className='text-center'>WHO AM I</h1>
  <Row className='m-5 justify-content-md-center align-items-center'> 
      <Col className='text-center mb-5'>
      {/* height={300} width={200}   in image tag*/} 
      <Image src='./image/IMG_1.jpg' className='image-center box' ></Image>
      </Col>
      <Col className='text-center'>
      <Stack >
      <h3 className='cal'>I am Daynamic and Creative</h3>
      <p>I am a Front-end developer, It is a long time fact that a reader will be distracted by the readable content of the page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
      <h5 className='text-center'>Skills</h5>
      <Container fluid>
        <FontAwesomeIcon icon={faHtml5} color='orange' size='2x' className='rdd text-center'/>
        <FontAwesomeIcon icon={faCss3} color='blue' size='2x' className='rdd'/>
        <FontAwesomeIcon icon={faJs} color='yellow' size='2x' className='rdd'/>
        <FontAwesomeIcon icon={faReact} color='blue' size='2x'  className='rdd'/>
        <FontAwesomeIcon icon={faBootstrap} color='violet' size='2x' className='rdd'/>
        </Container>
      </Stack>
      </Col>
  </Row>

  </Container>
</section>
</>
  )
}

export default About
 {/*
      <Col className='icons'>
       <Row>
        <Col> <FontAwesomeIcon icon={faHtml5} color='orange' size='2x'/></Col>
        <Col> <ProgressBar animated striped variant="warning" now={50} label={`${50}%`} /></Col>
        </Row>
      <Row>
        <Col> <FontAwesomeIcon icon={faCss3} color='blue' size='2x'/></Col>
        <Col> <ProgressBar animated striped variant="blue" now={50} label={`${50}%`} /></Col>
        </Row>
      <Row>
        <Col> <FontAwesomeIcon icon={faJs} color='yellow' size='2x'/></Col>
        <Col> <ProgressBar animated striped variant="warning" now={50} label={`${50}%`} /></Col>
        </Row>
        <Row>
        <Col> <FontAwesomeIcon icon={faReact} color='blue' size='2x' /></Col>
        <Col> <ProgressBar animated striped variant="info" now={50} label={`${50}%`} /></Col>
        </Row>
        <Row>
        <Col> <FontAwesomeIcon icon={faBootstrap} color='violet' size='2x'/></Col>
        <Col> <ProgressBar animated striped variant="violet" now={50} label={`${50}%`} /></Col>
        </Row>
        </Col> */}