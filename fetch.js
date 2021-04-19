const http = require('http');
const fs = require('fs');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'GET'
};

const req = http.request(options, res => {
    console.log(res);

    // res.on('data', d => {
    //     // process.stdout.write(d);
    //     fs.writeFile('/result/posts.json', d, err => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         else {
    //             console.log('Result of api request successfully written into posts.json');
    //         }
    //     })
    // });
    try {
        res.on('data', d => {
            fs.writeFileSync('/home/mojeedkusimo/Desktop/projects/zuri-nodejs-filesystem-task/result/posts.json', d);
        })
    }
    catch (err) {
        console.error(err);
    }
});

req.on('error', err => {
    console.log(err);
});

req.end();