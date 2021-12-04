const express = require('express');
const router = express.Router();

const baseURL = '/api';
const tasksApi = require('../apis/task-api');
router.get(baseURL + '/tasks',tasksApi.getTasks);
router.get(baseURL + '/tasks/:id',tasksApi.getTask);
router.post(baseURL + '/tasks/:id',tasksApi.getTask);

module.exports = router;