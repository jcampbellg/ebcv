import React from 'react';
import { Button, Col, Container, Input, Row, Form, FormGroup, Label, Spinner } from 'reactstrap';
import Logo from '../../../Components/Logo/Logo';
import useJoin from './useJoin';

const Join = () => {
  const { code, onJoin, isLoading } = useJoin();
  return (
    <Container fluid className='m-auto w-50 pb-5 bg-accent rounded-lg shadow'>
      <Logo />
      <Form className='pt-5'>
        <FormGroup className='d-flex flex-column text-white'>
          <Label for='email'>Codigo de la Clase</Label>
          <Input {...code} className='p-0 form-control-white-line' placeholder='Codigo...' />
          <Row className='align-items-center justify-content-center'>
            <Col className='text-center pt-5'>
              <Button onClick={onJoin} className='hover-text-accent' color='white' outline block size='lg'>
                { isLoading ? <Spinner size='sm' /> : 'Unirse'}
              </Button>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Join;