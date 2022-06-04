import React from "react"
import { Form, Button } from "react-bootstrap"

function Signin() {
    const signIn = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <Form className="border p-4 rounded" onSubmit={signIn}>
            <h1 className="w-100 mb-4 fs-4 border-bottom text-uppercase opacity-75">
                Registration
            </h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your usename"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3 d-flex">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group
                    className="mb-3 ms-1"
                    controlId="formBasicPasswordConfirmation"
                >
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign in
            </Button>

            <a href="/" className="badge badge-primary text-primary text-hover ms-3">
                Login
            </a>
        </Form>
    )
}

export default Signin
