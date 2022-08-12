import React, { useState } from 'react';
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './login.scss';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handelSubmit = () => {

  };
  return (
    <Container>
      <Row>
        <Col md={6} className="login__form--container">
          <Form style={{ width: '100%' }} onSubmit={handelSubmit}>
            <h1>Login to our account </h1>
            <FormGroup>
              <FormLabel>Email address</FormLabel>
              <FormControl type='email' placeholder='Enter your Email' value={email} required onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup className='mb-3'>
              <FormLabel>PassWord</FormLabel>
              <FormControl type='password' placeholder='password' value={password} required onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>

            <FormGroup>
              <Button type='submit'>Login</Button>
            </FormGroup>
            <p>don't have an account?<Link to='/signup'>create account</Link></p>
          </Form>
        </Col>
        <Col md={6} className='login__image--container'></Col>
      </Row>
    </Container>
  );
};

export default Login;