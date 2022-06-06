import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

import Login from "./components/Login/Login"
import Signin from "./components/Signin/Signin"
import Dashboard from "./components/Dashboard/Dashboard"

function App() {
    return (
        <Container className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </Container>
    )
}

export default App
