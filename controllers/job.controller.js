const jobs = require('../config/jobs')

module.exports = {
    create(request, response) {
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

    },
    findAll(request, response) {
        //return the job array to server
        return response.json(jobs);
    }
};