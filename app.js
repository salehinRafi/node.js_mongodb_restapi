// import express app
const express = require('express');
// create express application
const app = express();
// import body-parser app
const bodyParser = require('body-parser');

// create a middleware to get bodyparser json object
app.use(bodyParser.json()); //request.body
app.use(bodyParser.urlencoded({ extended: true })); //Eg. To access job_id and filters in url htpss:localhost:3000/?job_id=1&filters=1

// add custom middleware
app.use((request, response, next) => {
    // log the message, Custom middleware run
    console.log("Middleware Run");
    // call the next middleware
    next();
});

// set root route
app.get('/', (request, response) => {
    // send message hello world
    return response.send('Hello World');
});

// create jobs
// each object will have id, title, description, and duration
const jobs = [{
        id: 1,
        title: 'Node.js Developer',
        description: 'He is the one who want to be a greatest mind',
        duration: '3 months'
    },
    {
        id: 2,
        title: 'Vue.js Developer',
        description: 'He is the one who want to be a greatest mind',
        duration: '2 months'
    }
];


// create jobs endpoint
app.get('/jobs', (request, response) => {
    // return the jobs
    return response.json(jobs);
});

// Create POST  route /jobs
app.post('/jobs', (request, response) => {
    //get the id from the request body
    let id = request.body.id;
    //get the title from the request body
    let title = request.body.title;
    //get the duration from the request body
    let duration = request.body.duration;
    //get the description from the request body
    let description = request.body.description;

    //create new job object
    let job = {
        id,
        title,
        duration,
        description
    };

    //add the job object to jobs array
    jobs.push(job);

    //return the job array to server
    return response.json(jobs);

});

//listen the express app to port 3000
app.listen('3000', () => {
    console.log('Application is running port 3000')
});