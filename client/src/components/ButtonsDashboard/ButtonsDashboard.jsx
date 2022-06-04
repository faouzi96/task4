import React from "react"
import { Button, ButtonGroup } from "react-bootstrap"

function ButtonsDashboard({ setButtonsState }) {
    return (
        <ButtonGroup aria-label="Basic example" className="mb-4">
            <Button
                variant="danger"
                className="ms-2"
                onClick={() => setButtonsState("block")}
            >
                Block
            </Button>
            <Button
                variant="primary"
                className="ms-2"
                onClick={() => setButtonsState("unblock")}
            >
                Unblock
            </Button>
            <Button
                variant="danger"
                className="ms-2"
                onClick={() => setButtonsState("delete")}
            >
                Delete
            </Button>
        </ButtonGroup>
    )
}

export default ButtonsDashboard
