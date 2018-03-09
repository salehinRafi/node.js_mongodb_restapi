const jobs = require('../config/jobs')
    // import Job Model
const Job = require('../models/job.model');

module.exports = {
    create(request, response) {

        //get the title from the request body
        let title = request.body.title;
        //get the duration from the request body
        let duration = request.body.duration;
        //get the description from the request body
        let description = request.body.description;

        // make sure title is provided by the user
        // if title is missing then send bad request with 400 status
        if (!title) {
            return response.status(400).send({ err: 'Title is required property' });
        }

        //create new job object
        let job = {
            title,
            duration,
            description
        };

        // create new instance of Job model
        // pass the job in constructor function
        const newJob = new Job(job);

        // save the job
        newJob.save(err => {
            if (err) {
                return response.status(500).send(err);
            }
        });
        // when the job saved successfully then send new job 
        // to the server with 200 status
        return response.status(200).json(newJob);

    },
    findAll(request, response) {
        // call the find method of Job Model
        Job.find({}, (err, jobs) => {
            // if error occured send error with 404 status code
            if (err) {
                return response.status(404).send(err)
            }
            // return all the jobs to the server with 200 status
            return response.status(200).json(jobs);
        });
    },
    findOne(request, response) {
        // get the id from the request param
        let id = request.params.id;


        if (!id) {
            return response.status(400).send({ err: 'Id is required field' });
        }
        // find the job by id
        Job.findById(id, (err, job) => {
            // if error occured send error with 404 status code
            if (err) {
                return response.status(404).send(err)
            }
            // return all the jobs to the server with 200 status
            return response.status(200).json(job);
        });
    },
    update(request, response) {
        // get id from req params
        let id = request.params.id;
        // get title from req params
        let title = request.body.title;
        // get description from req params
        let description = request.body.description;
        // get duration from req params
        let duration = request.body.duration;

        // create jobAttributes objects
        let jobAttributes = {};

        // if user wants to update the title
        // then add title to jobAttributes
        if (title) {
            jobAttributes.title = title;
        }
        // if user wants to update the description
        // then add description to jobAttributes
        if (description) {
            jobAttributes.description = description;
        }
        // if user wants to update the duration
        // then add duration to jobAttributes
        if (duration) {
            jobAttributes.duration = duration;
        }
        // call the update method to edit the job
        // pass the three arguments: id, jobAttributes, callback
        Job.update({ id: id }, jobAttributes, (err, result) => {
            // if error comes send the 500 status with error
            if (err) {
                return response.status(500).send(err)
            }
            // if everything is good send the msg the job is
            // updated successfully
            return response.status(200).json({ msg: `Job is Updated with id ${id}` });
        });
    }
};