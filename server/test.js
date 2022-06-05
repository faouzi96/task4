// const data = { id: 1 }

// fetch("http://localhost:5000/login", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
// }).then((response) => {
//     console.log("sent")
//     console.log(response.statusText)
// })

//const date = new Date().toLocaleString()
//console.log(date)

//const ss = new Date(date)
//console.log(ss)

var mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "mysql2022",
    database: "testdb",
})

con.connect(function (err, result) {
    if (err) res.send({ msg: "DB Error" })
    const sql = `SELECT * FROM users`
    con.query(sql, function (err, result) {
        if (err) throw err
        console.log(result)
    })
})
