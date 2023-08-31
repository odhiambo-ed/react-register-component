import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

const AddForm = () => {
  return (
    <>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
              <Col md={8} lg={6} sm={12}>
                  <div className='border border-2 border-primary'></div>
                  <Card className='shadow px-4'>
                      <Card.Body>
                          <div className="mb-3 mt-md-4">
                              <h2 className="fw-bold mb-2 text-center text-uppercase">Ed Form</h2>
                              <div className="mb-3">
                                  <Form>
                                      <Form.Group className='mb-3'>
                                          <Form.Label>Username</Form.Label>
                                          <Form.Control
                                              placeholder='Enter Your Username'
                                              type='text'
                                          />
                                      </Form.Group>
                                      <Form.Group className='mb-3'>
                                          <Form.Label>Email</Form.Label>
                                          <Form.Control
                                            placeholder='Enter Your Email'
                                            type='email'
                                          />
                                      </Form.Group>
                                      <Form.Group className='mb-3'>
                                          <Form.Label>Date Of Birth</Form.Label>
                                          <Form.Control
                                              placeholder='Enter Your DOB'
                                              type='date'
                                          />
                                      </Form.Group>
                                      <Form.Group className='mb-3'>
                                          <Form.Label>Password</Form.Label>
                                          <Form.Control
                                              placeholder='Password'
                                              type='password'
                                          />
                                      </Form.Group>
                                      <Form.Group className='mb-3'>
                                          <Form.Label>Confirm Password</Form.Label>
                                          <Form.Control
                                              placeholder='Confirm Password'
                                              type='password'
                                          />
                                      </Form.Group>
                                      <div className="d-grid">
                                          <Button variant='primary' type='submit'>Create Account</Button>
                                      </div>
                                  </Form>
                                  <div className="mt-3">
                                      <p className="mb-0  text-center">
                                          Already have an account??{" "}
                                          <a href="{''}" className="text-primary fw-bold">
                                              Sign In
                                          </a>
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </Card.Body>
                  </Card>
              </Col>
        </Row>  
    </>
  )
}

export default AddForm
