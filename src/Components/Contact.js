import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faCopyright } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <>
    <section id='Contact'>
    <Container flulid-md className='p-5'>
        <h1 className='text-center'>CONTACT</h1>
        <Row>
            <Col lg={6} md={12} sm={12} className='align-content-center'>
                <h5>Drop Me a Message</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quo est. Doloribus obcaecati aut odio in iste odit necessitatibus vel!</p>
                <Stack className='border rounded-3' style={{backgroundColor:'var(--text-color)',color:'var(--background-color)'}}>
                    <Row className='p-2 m-2'>
                    <Col xs={1}><FontAwesomeIcon icon={faPhone} /></Col>
                    <Col>+91 9867542310</Col>
                    </Row>
                    <Row className='p-2 m-2'><Col xs={1}><FontAwesomeIcon icon={faEnvelope} /></Col>
                    <Col>www.makeshlg6@gmail.com</Col>
                    </Row>
                    <Row className='p-2 m-2'><Col xs={1}><FontAwesomeIcon icon={faLocationDot} /></Col>
                    <Col>Kalligudi Chathiram, Madurai main road, Kalligudi-625701</Col>
                    </Row>
                </Stack>             
            </Col>
            <Col lg={6} md={12} sm={12}>
            <Form className='p-5 my-2 rounded-3' style={{backgroundColor:'var(--text-color)'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="Text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Message" />
                </Form.Group>
                <Stack className="col-md-5 mx-auto">
                <Button style={{backgroundColor:'var(--text-color)',color:'var(--background-color)'}}>Send</Button>
                </Stack>
            </Form>
            </Col>
        </Row>
    </Container>
    <div>
      
    <p className='text-center'>
        <FontAwesomeIcon icon={faCopyright} /> 2024 MAKESHKUMAR, All rights reserved
        </p>
    </div>
    </section>
    </>
  )
}

export default Contact