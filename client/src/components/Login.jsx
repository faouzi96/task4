import React from "react";
import { Form, Button } from "react-bootstrap";
function Login() {
  return (
    <Form className="w-25 border p-4 rounded">
      <h1 className="w-100 mb-4 fs-4 border-bottom text-uppercase">Login</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" placeholder="Enter your usename" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>

      <a
        href="#sss"
        className="badge badge-primary text-primary text-hover ms-3"
      >
        Sign in
      </a>
    </Form>
  );
}

export default Login;
