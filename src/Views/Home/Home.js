import React from 'react';
import { Button, Col, Container, Input, Row, Form, FormGroup, Label, Spinner } from 'reactstrap';
import { If, Then, Else } from 'react-if';
import useHome from './useHome';
import Logo from '../../Components/Logo/Logo';

const Home = () => {
  const { onLogin, email, code, isFinished, isLoading, onEnter } = useHome();

  return (
    <Container fluid className='m-auto w-50 pb-5 bg-primary rounded-lg shadow'>
      <Logo />
      <If condition={isFinished}>
        <Then>
          <Form className='pt-5'>
            <FormGroup className='d-flex flex-column text-white'>
              <Label for='email'>Codigo en tu correo, puede estar en el SPAM</Label>
              <Input {...code} className='p-0 form-control-white-line' placeholder='Codigo...' />
              <Row className='align-items-center justify-content-center'>
                <Col className='text-center pt-5'>
                  <Button onClick={onEnter} className='hover-text-primary' color='white' outline block size='lg'>
                    { isLoading ? <Spinner size='sm' /> : 'Verificar'}
                  </Button>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </Then>
        <Else>
          <Form className='pt-5'>
            <FormGroup className='d-flex flex-column text-white'>
              <Label for='email'>Correo Electronico</Label>
              <Input {...email} type='email' className='p-0 form-control-white-line' placeholder='juanperez@dominio.com' />
            </FormGroup>
          </Form>
          <Row className='align-items-center justify-content-center'>
            <Col className='text-center pt-5'>
              <Button onClick={onLogin} className='hover-text-primary' color='white' outline block size='lg'>
                { isLoading ? <Spinner size='sm' /> : 'Iniciar'}
              </Button>
            </Col>
          </Row>
        </Else>
      </If>
    </Container>
  );
};

export default Home;