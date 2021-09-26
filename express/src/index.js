const express = require('express')

const app = express()

let users = [] // Collection of users

app.use(express.json())
/*JSON.parse
JSON.stringify*/

app.post('/users', (req, res) => {
    const user = req.body
    console.log('serialized user obj:', user)
    users.unshift(user)
    return res.status(201).send({message: 'User created successfully'})
})

app.get('/users', (req, res) => {
    if(users)
        return res.status(200).send({
            users
        })
    else    
        return res.status(404).send({message: 'No users found'})
})

app.listen(8080, () => {
    console.log(`Listening on 8080`)
})