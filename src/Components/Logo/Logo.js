import React from 'react';
import { Col, Row} from 'reactstrap';
import { FaBible } from 'react-icons/fa';

const Logo = () => {
  return (
    <>
      <Row className='align-items-center justify-content-center'>
        <Col className='text-center pt-5'>
          <FaBible className='text-white hover-text-primary' size={150} />
        </Col>
      </Row>
      <Row>
        <Col className='text-center pt-3 text-white hover-text-primary'>EBC Virtual</Col>
      </Row>
    </>
  );
};

export default Logo;