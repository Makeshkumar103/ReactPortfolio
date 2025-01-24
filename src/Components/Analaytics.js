import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// import Image from 'react-bootstrap/Image';

const Analytics = () => {
  return (
  <>
  <section id='Projects'>
   <Container fluid-md>
   <h1 className='text-center'>Data Analyst Projcets</h1>
   <Row className='p-3'>
    <Col className='my-3'>
   <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Excel Project</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Personal Expence Tracker</Card.Subtitle>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable content of a page when locking at its layout.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col className='my-3'>
   <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Resume Analyzer NLP</Card.Title>
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
      <Card.Title>Road Accident Data</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Git Version Control</Card.Subtitle>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable content of a page when locking at its layout.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>     
    </Container> 
    </section>    
    </>   

  )
}

export default Analytics