const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send('EJERCICIOS EXPRESS')
})

app.get("/api", (req, res) => {
    res.status(200).json({ message: "Hola mundo"})
})

app.get("/api/suma", (req, res) => {
    res.status(200)
    let response = {
        'resultado': parseInt(req.query.num1) + parseInt(req.query.num2)
    }
    res.send(response)
})

app.get("/api/usuario", (req, res) => {
    res.status(200)
    let response = {
        'usuario': req.query.nombre
    }
    res.send(response)
})

app.get('/api/swapi' , (req,res) => {
    res.status(200)

    

})

app.listen(3000)