import React from "react"

import { useLocation, useNavigate } from "react-router-dom"
import { Container } from "react-bootstrap"

import ButtonsDashboard from "../ButtonsDashboard/ButtonsDashboard"
import TableDashboard from "../TableDashboard/TableDashboard"

const LINK_CLASSSNAME =
    "badge badge-primary text-primary text-hover mt-5 fs-1 text-decoration-none "

function recuperationDataFromServer(
    dataURL,
    setId,
    setUsername,
    setUsers,
    navigate,
    setLoader
) {
    setUsername(dataURL.state.username)
    setId(dataURL.state.id)
    const option = {
        method: "GET",
    }

    fetch("/api/recuperationData", option).then((response) => {
        response.json().then((data) => {
            if (data.msg === "successed") setUsers(data.users)
            else if (data.msg === "empty") {
                setLoader(false)
                navigate("/")
            } else alert(data.msg)
            setLoader(false)
        })
    })
}

function Dashboard() {
    const [users, setUsers] = React.useState([])
    const [selectedUsers, setSelectedUsers] = React.useState([])
    const [buttonsState, setButtonsState] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [id, setId] = React.useState()
    const [loader, setLoader] = React.useState(true)
    const navigate = useNavigate()
    const dataURL = useLocation()

    React.useEffect(() => {
        setInterval(() => {
            recuperationDataFromServer(
                dataURL,
                setId,
                setUsername,
                setUsers,
                navigate,
                setLoader
            )
        }, 100)
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
                response.json().then((data) => {
                    setLoader(true)
                    recuperationDataFromServer(
                        dataURL,
                        setId,
                        setUsername,
                        setUsers,
                        navigate,
                        setLoader
                    )
                })
            })
        }

        setTimeout(() => setButtonsState(""), 100)
    }, [buttonsState, selectedUsers])

    React.useEffect(() => {
        if (users.length !== 0 && id) {
            const verification = users.map((user) => user.id).indexOf(id)

            if (verification === -1) navigate("/")
            else if (users[verification].status === "blocked") {
                navigate("/")
                alert("You are blocked")
            }
        }
    }, [users])

    const logout = () => {
        const data = {
            userId: id,
        }

        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }

        fetch("/api/logout", option).then((response) => {
            response.json().then((data) => {
                navigate("/")
            })
        })
    }

    return loader ? (
        <h2>LOADING...</h2>
    ) : (
        <Container className="d-flex flex-column align-center">
            <h3 className="position-absolute bottom-0 left-0">User: {username}</h3>

            <ButtonsDashboard setButtonsState={setButtonsState} />

            {users.length !== 0 && (
                <TableDashboard users={users} setSelectedUsers={setSelectedUsers} />
            )}

            <Container className="d-flex justify-content-center">
                <a href="#" className={LINK_CLASSSNAME} onClick={logout}>
                    Logout
                </a>
            </Container>
        </Container>
    )
}

export default Dashboard
