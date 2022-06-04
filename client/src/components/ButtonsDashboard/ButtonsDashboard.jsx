import React from "react"
import { Button, ButtonGroup } from "react-bootstrap"

function ButtonsDashboard() {
    return (
        <ButtonGroup aria-label="Basic example" className="mb-4">
            <Button variant="danger" className="ms-2">
                Block
            </Button>
            <Button variant="primary" className="ms-2">
                Unblock
            </Button>
            <Button variant="danger" className="ms-2">
                Delete
            </Button>
        </ButtonGroup>
    )
}

export default ButtonsDashboard
