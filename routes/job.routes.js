const express = require('express');
const router = express.Router();
const JobController = require('../controllers/job.controller');

router.get('/', JobController.findAll); //api/jobs/ GET
router.post('/', JobController.create);

module.exports = router;