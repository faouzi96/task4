import React from "react"
import { Form, Button } from "react-bootstrap"
function Login() {
    const logIn = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <Form className="border p-4 rounded" onSubmit={logIn}>
            <h1 className="w-100 mb-4 fs-4 border-bottom text-uppercase opacity-75">
                Login
            </h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your usename"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>

            <a
                href="/signin"
                className="badge badge-primary text-primary text-hover ms-3"
            >
                Sign in
            </a>
        </Form>
    )
}

export default Login
