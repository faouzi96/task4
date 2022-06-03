import React from "react";
import { Form, Button } from "react-bootstrap";

function Signin() {
  return (
    <Form className="w-50 border p-4 rounded">
      <h1 className="w-100 mb-4 fs-4 border-bottom text-uppercase">
        Registration
      </h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" placeholder="Enter your usename" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group className="mb-3 d-flex">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group
          className="mb-3 ms-1"
          controlId="formBasicPasswordConfirmation"
        >
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign in
      </Button>

      <a
        href="#sss"
        className="badge badge-primary text-primary text-hover ms-3"
      >
        Login
      </a>
    </Form>
  );
}

export default Signin;
