const http = require('http');
const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'GET'
};

const req = http.request(options, res => {
    console.log(res);

    res.on('data', d => {
        process.stdout.write(d);
    });
});

req.on('error', err => {
    console.log(err);
});

req.end();