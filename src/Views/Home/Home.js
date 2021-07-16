import React from 'react';
import { Button, Col, Container, Input, Row, Form, FormGroup, Label } from 'reactstrap';
import { FaBible } from 'react-icons/fa';

const Home = () => {
  return (
    <Container fluid className='m-auto w-50 pb-5 bg-primary rounded-lg shadow'>
      <Row className='align-items-center justify-content-center'>
        <Col className='text-center pt-5'>
          <FaBible className='text-white hover-text-primary' size={150} />
        </Col>
      </Row>
      <Row>
        <Col className='text-center pt-3 text-white hover-text-primary'>EBC Virtual</Col>
      </Row>
      <Form className='pt-5'>
        <FormGroup className='d-flex flex-column text-white'>
          <Label for='email'>Correo Electronico</Label>
          <Input className='p-0 form-control-white-line' placeholder='juanperez@dominio.com' />
        </FormGroup>
      </Form>
      <Row className='align-items-center justify-content-center'>
        <Col className='text-center pt-5'>
          <Button className='hover-text-primary' color='white' outline block size='lg'>Iniciar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;