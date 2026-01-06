import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';
import { motion } from 'framer-motion';
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
<Container flulid-md className='mt-3 pt-5'>
  <motion.h1 className='text-center'
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  >WHO AM I</motion.h1>
  <Row className='m-5'> 
      <Col className='mb-5 text-center' lg={4} md={6} sm={12}>
      <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      >
      {/* height={300} width={200}   in image tag*/} 
      <Image src='./image/IMG_1.jpg' className='text-center box mb-4' ></Image>
      </motion.div>
      </Col>
      <Col className='text-center align-content-center' lg={8} md={6} sm={12}>
      <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      delay={0.6}
      viewport={{ once: true }}
      >
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
      </motion.div>
      
      </Col>
  </Row>

  </Container>
</section>
</>
  )
}

export default About