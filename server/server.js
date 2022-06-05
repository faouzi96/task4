const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())

var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "mysql2022",
    database: "testdb",
})
if (!con._connectCalled) con.connect()
app.post("/api/login", (req, res) => {
    const data = req.body
    const sql = `SELECT * FROM users WHERE username="${data.username}" AND password="${data.password}"`
    con.query(sql, function (err, result) {
        if (err) res.status(400).json({ msg: "DB Error" })
        else if (result.length === 0)
            res.status(404).json({ msg: "User unidentified" })
        else res.status(200).json({ msg: "successed" })
    })
})

app.post("/api/signin", (req, res) => {
    console.log(req.body)
    const data = req.body
    const date = new Date()
    const registration = date.toLocaleDateString()
    const lastConnection = date.toLocaleString()
    const sql = `INSERT INTO users (username, password, email, registration_date, last_connection, status) VALUES ("${data.username}", "${data.password}", "${data.email}","${registration}","${lastConnection}","active")`
    con.query(sql, function (err, result) {
        console.log(result)
        if (err) res.send({ msg: "DB Error" })
        else res.send({ msg: "successed" })
    })
})

app.get("/api/recuperationdata", (req, res) => {
    const sql =
        "SELECT id, username, email, registration_date, last_connection, status FROM users"
    con.query(sql, function (err, result) {
        if (err) console.log(err)
        else res.send({ users: result })
    })
})

app.post("/api/manipulationdata", (req, res) => {
    console.log(req.body)
    const data = req.body
    res.send({ s: data.action })
})

app.listen(PORT, () => {
    console.log("Server running on port 5000 ...")
})
