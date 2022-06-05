import React from "react"

import { useLocation, useNavigate } from "react-router-dom"
import { Container } from "react-bootstrap"

import ButtonsDashboard from "../ButtonsDashboard/ButtonsDashboard"
import TableDashboard from "../TableDashboard/TableDashboard"

function Dashboard() {
    const [buttonsState, setButtonsState] = React.useState("")
    const [selectedUsers, setSelectedUsers] = React.useState([])
    const [username, setUsername] = React.useState("")
    //const [users, setUsers] = React.useState([])
    const navigate = useNavigate()
    const dataURL = useLocation()

    React.useEffect(() => {
        if (dataURL.state) {
            setUsername(dataURL.state.username)
            const option = {
                method: "GET",
            }
            fetch("/api/recuperationData", option).then((response) => {
                response.json().then((data) => console.log(data))
            })
        } else navigate("/")
    }, [])

    React.useEffect(() => {
        if (buttonsState !== "" && selectedUsers.length !== 0) {
            const data = {
                usersId: selectedUsers,
                action: buttonsState,
            }
            const option = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
            fetch("/api/manipulationdata", option).then((response) => {
                response.json().then((data) => console.log(data))
            })
        }
        setTimeout(() => setButtonsState(""), 100)
    }, [buttonsState, selectedUsers])

    return (
        <Container className="d-flex flex-column align-center">
            <h3 className="position-absolute bottom-0 left-0">{username}</h3>
            <ButtonsDashboard setButtonsState={setButtonsState} />
            <TableDashboard users={USERS} setSelectedUsers={setSelectedUsers} />
            <a href="/" className={LINK_CLASSSNAME}>
                Logout
            </a>
        </Container>
    )
}

export default Dashboard

const LINK_CLASSSNAME =
    "badge badge-primary text-primary text-hover mt-5 fs-1 text-decoration-none "

const USERS = [
    {
        id: 1,
        username: "User 1",
        email: "user1@exqmple.com",
        registrationDate: "12-02-2022",
        lastConnection: "2 hours ago",
        status: "active",
    },
    {
        id: 2,
        username: "User 2",
        email: "user2@exqmple.com",
        registrationDate: "21-12-2021",
        lastConnection: "4 days ago",
        status: "blocked",
    },
    {
        id: 3,
        username: "User 3",
        email: "user3@exqmple.com",
        registrationDate: "02-05-2022",
        lastConnection: "43 min ago",
        status: "active",
    },
    {
        id: 4,
        username: "User 4",
        email: "user1@exqmple.com",
        registrationDate: "09-04-2022",
        lastConnection: "2 weeks ago",
        status: "blocked",
    },
    {
        id: 5,
        username: "User 5",
        email: "user5@exqmple.com",
        registrationDate: "02-02-2022",
        lastConnection: "2 months ago",
        status: "active",
    },
    {
        id: 6,
        username: "User 6",
        email: "user6@exqmple.com",
        registrationDate: "01-07-2021",
        lastConnection: "1 years ago",
        status: "active",
    },
]
