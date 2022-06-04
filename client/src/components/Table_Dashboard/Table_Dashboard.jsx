import React from "react"
import { Table, Form } from "react-bootstrap"

function TableDashboard({ users, setSelectedUsers }) {
    const [isChecked, setIsChecked] = React.useState(Array(users.length).fill(false))
    const [checkAll, setCheckAll] = React.useState(false)

    React.useEffect(() => {
        const newUsers = []
        isChecked.forEach((item, index) => {
            if (item) newUsers.push(index)
        })
        setSelectedUsers((state) => {
            const newState = []
            newUsers.forEach((item) => {
                newState.push(users[item].id)
            })
            return newState
        })
    }, [isChecked, setSelectedUsers, users])

    React.useEffect(() => {
        // console.log(isChecked)
    }, [isChecked])
    React.useEffect(() => {
        if (checkAll) setIsChecked(Array(users.length).fill(true))
        else setIsChecked(Array(users.length).fill(false))
    }, [checkAll])

    const selectAll = () => {
        setCheckAll(!checkAll)
    }

    const handleCheck = (index) => {
        const newState = isChecked.map((item, ind) => (ind === index ? !item : item))
        setIsChecked(newState)
    }

    return (
        <div className="scrollable">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>User Email</th>
                        <th>Registration time</th>
                        <th>Last Connection</th>
                        <th>Status</th>
                        <td className="d-flex justify-content-center">
                            <Form.Check
                                type="checkbox"
                                id="all"
                                value={checkAll}
                                onChange={selectAll}
                            />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.registrationDate}</td>
                                <td>{user.lastConnection}</td>
                                <td>{user.status}</td>
                                <td className="d-flex justify-content-center">
                                    <Form.Check
                                        id={index.toString()}
                                        type="checkbox"
                                        value={isChecked[index]}
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
