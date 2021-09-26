const http = require('http')
const getData = require('./helpers/getData')


const users =  []

const postRequestHandler =  async(req, res) => {
    
    try {
        const userJsonObject = await getData(req)
        console.log('parsed json object', userJsonObject)
        const user = JSON.parse(userJsonObject)
        users.push(user)
    } catch (e) {
        const message = JSON.stringify(e.message)
        res.writeHead(500, {"Content-Type": "application/json"})
        res.end(message)
    }
    const successMessage = {message: "user created with success"}
    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify(successMessage))
}

const server = http.createServer(async (req, res) => {
    if (req.url === '/users' && req.method === 'POST') {
       await postRequestHandler(req, res)
    } else if (req.url === '/users' && req.method === 'GET') {
        const successMessage = JSON.stringify({   users })
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(successMessage)
    }
})



server.listen(8080, ()=> console.log('Listening on 8080'));