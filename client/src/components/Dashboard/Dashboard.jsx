import React from "react"
import { Container } from "react-bootstrap"
import ButtonsDashboard from "../ButtonsDashboard/ButtonsDashboard"
import TableDashboard from "../Table_Dashboard/Table_Dashboard"

function Dashboard() {
    return (
        <Container className="d-flex flex-column align-center">
            <ButtonsDashboard />
            <TableDashboard />
            <a href="#sss" className="badge badge-primary text-primary text-hover mt-5">
                Logout
            </a>
        </Container>
    )
}

export default Dashboard
