/*
Write a node.js program for making external http calls.
*/

const http = require('http');
const options = { host: 'google.com', method: 'GET', path: '/'}

const req = http.request(options, (response) => {
    console.log(`Status code ${response.statusCode}`)
    
    response.on('data', (d) => {
        console.log('check', d.toString())
    })
})

req.end();

/*Perform a POST Request */

const data = new TextEncoder().encode(
    JSON.stringify({
        todo: 'buy some milk'
    })
)
const optionsPost = {
    host: 'google.com',
    method:'POST',
    Headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const reqPost = http.request(optionsPost, (res) => {
    console.log(`statusCode  ${res.statusCode}`);

    res.on('data', (d)=>{
        console.log('checking post', d.toString())
    })
})


reqPost.write(data);
reqPost.end()