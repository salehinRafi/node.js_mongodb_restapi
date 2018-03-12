const express = require('express');
const router = express.Router();
const JobController = require('../controllers/job.controller');

router.get('/', JobController.findAll); //api/jobs/ GET
router.post('/', JobController.create);

// GET: find specific job id
router.get('/:id', JobController.findOne);

// PUT: update the job id
router.put('/:id', JobController.update);

// DELETE: delete the job id
router.delete('/:id', JobController.delete);

module.exports = router;