import React from "react"
import { useNavigate } from "react-router-dom"

import { Form, Button } from "react-bootstrap"

function controlField(username, email, password, password2) {
    if (!username.match("^[A-Za-z][A-Za-z0-9_]{2,15}$")) {
        alert("Username invalid")
        return false
    }
    if (password !== password2) {
        alert("Password confimation incorrect")
        return false
    }
    if (
        !email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
        alert("Email Address not valid")
        return false
    }
    return true
}

function Signin() {
    const navigate = useNavigate()
    const [username, setUsername] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [passwordConfirm, setPasswordConfirm] = React.useState("")

    const handleChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const handleChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const handleChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const handleChangePasswordConfirm = (e) => {
        const value = e.target.value
        setPasswordConfirm(value)
    }

    const signIn = (e) => {
        e.preventDefault()

        if (controlField(username, email, password, passwordConfirm)) {
            const data = {
                username: username,
                email: email,
                password: password,
            }

            const option = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }

            fetch("/api/signin", option).then((response) => {
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
    }

    return (
        <Form className="border p-4 rounded" onSubmit={signIn}>
            <h1 className="w-100 mb-4 fs-4 border-bottom text-uppercase opacity-75">
                Registration
            </h1>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your usename"
                    required
                    value={username}
                    onChange={handleChangeUsername}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={handleChangeEmail}
                />
            </Form.Group>

            <Form.Group className="mb-3 d-flex">
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
                <Form.Group
                    className="mb-3 ms-1"
                    controlId="formBasicPasswordConfirmation"
                >
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                        value={passwordConfirm}
                        onChange={handleChangePasswordConfirm}
                    />
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
