import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCopyright, faDisplay } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/roboto';
const Services = () => {
  return (
  <>
  <section id='Services'>
   <Container fluid-md>
   <h1 className='text-center' font-family='roboto'>Explore Premium Features</h1>
   <p className='text-center'>With our app Explore Premium Features you can acces a range of unique feature and discover something new.</p>
   <Container className='text-center mb-5'>
   <Row lg={3}>
    <Col className='my-3 text-center'>
      <Card style={{ width: '18rem' }} className='m-auto'>
    <Card.Body>
      <Card.Title><FontAwesomeIcon icon={faGithub} /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Git Version Control</Card.Subtitle>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable content of a page when locking at its layout.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col className='my-3 text-center'>
    <Card style={{ width: '18rem' }} className='m-auto'>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={faPinterest} /> 
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">App Design</Card.Subtitle>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable content of a page when 
        locking at its layout.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col className='my-3 text-center'>
     <Card style={{ width: '18rem' }} className='m-auto'>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={faCopyright} /> 
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Front-end Development</Card.Subtitle>
        <Card.Text>
          It is a long established fact that a reader will be distracted by the readable content of a page when locking at its layout.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
     <Col className='my-3 text-center'>
      <Card style={{ width: '18rem' }} className='m-auto'>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={faDisplay} /> 
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Front-end Development</Card.Subtitle>
        <Card.Text>It is a long established fact that a reader will be distracted by the readable content of a page whenlocking at its layout.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col> 
    <Col className='my-3 text-center'>
     <Card style={{ width: '18rem' }} className='m-auto'>
      <Card.Body>
        <Card.Title>      <FontAwesomeIcon icon={faPinterest} /> 
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">App Design</Card.Subtitle>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable content of a page when 
        locking at its layout.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col className='my-3 text-center'>
     <Card style={{ width: '18rem' }} className='m-auto'>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={faCode} /> 
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Front-end Development</Card.Subtitle>
        <Card.Text>
          It is a long established fact that a reader will be distracted by the readable content of a page when locking at its layout.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col> 
   
    </Row>     
    </Container>    
    </Container>
    {/* <Container fluid-md >
        <h1 className='text-center'>Work faster with powerful tools.</h1>
        <Row>
            <Col>
                <Image src='./image/18.png' className='image-center'></Image>
            </Col>
            <Col>            
              <p>• Easily managed to log in and log out using the ESA TRACKING app</p>
              <p>• 99% accuracy in spotting the field executives to collaborate promptly</p>
              <p>• ESA APP helps maintain and manage the work records of the employees</p>
              <p>• Attendance handling is the most difficult but our top-notch app helps you handle it effortlessly</p>
              <p>• Managing payroll tasks and other collaboration are much easier with our technology built</p>
            </Col>
            
            <Row>
           
        </Row>
        </Row>
        
    
    </Container> */}
    </section>    
    </>   

  )
}

export default Services