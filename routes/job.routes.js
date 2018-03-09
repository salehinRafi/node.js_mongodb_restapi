const express = require('express');
const router = express.Router();
const JobController = require('../controllers/job.controller');

router.get('/', JobController.findAll); //api/jobs/ GET
router.post('/', JobController.create);

// find specific job id
router.get('/:id', JobController.findOne);

// update the job id
router.put('/:id', JobController.update);
module.exports = router;