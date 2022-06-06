import React from "react"

import { Table, Form } from "react-bootstrap"

function TableDashboard({ users, setSelectedUsers }) {
    const [isChecked, setIsChecked] = React.useState(Array(users.length).fill(false))
    const checkRef = React.useRef(null)

    React.useEffect(() => {
        const newUsers = []

        isChecked.forEach((item, index) => {
            if (item) newUsers.push(index)
        })

        setSelectedUsers((state) => {
            const newState = []

            newUsers.forEach((item) => {
                if (users[item]) newState.push(users[item].id)
            })

            return newState
        })
    }, [isChecked])

    const selectAll = (e) => {
        const checkAll = e.target.checked

        if (checkAll) setIsChecked(Array(isChecked.length).fill(true))
        else setIsChecked(Array(isChecked.length).fill(false))
    }

    const handleCheck = (index) => {
        const newState = isChecked.map((item, ind) => (ind === index ? !item : item))

        setIsChecked(newState)

        checkRef.current.checked = false
    }

    return (
        <div className="scrollable">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">UserName</th>
                        <th className="text-center">User Email</th>
                        <th className="text-center">Registration time</th>
                        <th className="text-center">Last Connection</th>
                        <th className="text-center">Status</th>
                        <td className="d-flex justify-content-center">
                            <Form.Check
                                type="checkbox"
                                id="all"
                                ref={checkRef}
                                onChange={selectAll}
                            />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-center">{user.id}</td>
                                <td className="text-center">{user.username}</td>
                                <td className="text-center">{user.email}</td>
                                <td className="text-center">
                                    {user.registration_date}
                                </td>
                                <td className="text-center">
                                    {user.last_connection}
                                </td>
                                <td className="text-center">{user.status}</td>
                                <td className="d-flex justify-content-center">
                                    <Form.Check
                                        id={index.toString()}
                                        type="checkbox"
                                        checked={isChecked[index]}
                                        onChange={() => handleCheck(index)}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default TableDashboard
