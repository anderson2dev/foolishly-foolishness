function getData(req) {
    return new Promise((resolve, reject) => {
        try {   
            let body = ""
            req.on('data', (data) => {
                body+=data.toString()

            })
            req.on('end', () => {
                resolve(body)
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = getData