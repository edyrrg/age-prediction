const express = require('express'),
    port = 3000,
    app = express(),
    root = "/api/age/"

app.get(root + ':id', (req, res) => {
    const name = req.params.id
    const age = ageRandom()
    const result = {
        name: name,
        age: age,
        days: ageDays(age)
    }
    res.send(result)
})

app.get(root, (req, res) => {
    res.send({ error: `Missing parameter 'name' was expected.` })
})

const ageRandom = () => {
    return Math.floor((Math.random() * 98) + 1)
}

const ageDays = (age) => {
    return Math.floor(age * 365)
}

console.log(ageRandom)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})