const http = require('http');


//req represents incoming request, like user req webpage
//res what we are sending back to the user
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url ==='/about'){
        res.end('Here is our about page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Page not found</p>
    <a href='/'>back home</a>
    `)
})

server.listen(8000)
