const http = require('http')
const fs = require('fs')

const server = new http.createServer((req, res) => {
 
        let dateTime = new Date()
        fs.writeFileSync(`DateTime/${dateTime.toString()}`, dateTime)
    
    let data = fs.readFileSync(`DateTime/${dateTime.toString()}`)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(data)
   
})


server.listen(8000)

