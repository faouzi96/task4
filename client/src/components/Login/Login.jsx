import React from "react"
import { useNavigate } from "react-router-dom"

import { Form, Button } from "react-bootstrap"

function Login() {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const navigate = useNavigate()

    const handleChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const handleChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const logIn = (e) => {
        e.preventDefault()

        const data = {
            username: username,
            password: password,
        }

        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        }

        fetch("/api/login", option).then((response) => {
            response.json().then((data) => {
                if (data.msg === "successed") {
                    navigate("/dashboard", {
                        state: { username: username, id: data.id },
                    })
                } else {
                    alert(data.msg)
                }
            })
        })
    }

    return (
        <Form className="border p-4 rounded" onSubmit={logIn}>
            <h1 className="w-100 mb-4 fs-4 border-bottom text-uppercase opacity-75">
                Login
            </h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your usename"
                    required
                    value={username}
                    onChange={handleChangeUsername}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={handleChangePassword}
                />
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
