const fs = require('fs')

fs.readFile('../users.json', (err, data) => {
    if(err) {
        console.trace(err)
        process.exit(1)
    }
    const users = JSON.parse(data)
    users.unshift({
        id: 5,
        name: 'Caesar zeppelin',
        origin: 'Jojo bizarre adventures'
    })
    const usersJsonObject = JSON.stringify(users)
    fs.writeFile('../updated-users.json', usersJsonObject, err => {
        if(err)
            console.trace(err)
    })
})