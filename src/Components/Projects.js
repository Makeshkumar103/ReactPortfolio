import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Analytics from './Analaytics';

// import Image from 'react-bootstrap/Image';

const Projects = () => {
  return (
  <>
  <section id='Projects'>
   <Container fluid-md>
   <h1 className='text-center'>WEB DEVELOPEMENT</h1>
   <Row className='p-3'>
    {/* <Col className='my-3'>
   <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Zomato Clone</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Git Version Control</Card.Subtitle>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable content of a page when locking at its layout.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col> */}
    <Col className='my-3'>
   <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Zomato Clone</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Git Version Control</Card.Subtitle>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable content of a page when locking at its layout.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col className='my-3'>
   <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Personal Portfolio</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Git Version Control</Card.Subtitle>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable content of a page when locking at its layout.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col className='my-3'>
   <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>React Dahsboard</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Git Version Control</Card.Subtitle>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable content of a page when locking at its layout.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>     
    </Container> 
    <Analytics />
    </section>    
    </>   

  )
}

export default Projects