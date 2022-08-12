import React, { useState } from 'react';
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './signup.scss';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handelSubmit = () => {

  };
  return (
    <Container>
      <Row>
        <Col md={6} className="signup__form--container">
          <Form style={{ width: '100%' }} onSubmit={handelSubmit}>
            <h1>Create new Account </h1>
            <FormGroup>
              <FormLabel>Email address</FormLabel>
              <FormControl type='email' placeholder='Enter your Email' value={email} required onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <FormLabel>PassWord</FormLabel>
              <FormControl type='password' placeholder='password' value={password} required onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Confirm PassWord</FormLabel>
              <FormControl type='password' placeholder='Confirm your Password' value={password} required onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Button type='submit'>SignUp</Button>
            </FormGroup>
            <p>have an account?<Link to='/login'>LogIn</Link></p>
          </Form>
        </Col>
        <Col md={6} className='signup__image--container'></Col>
      </Row>
    </Container>
  );
};

export default Signup;