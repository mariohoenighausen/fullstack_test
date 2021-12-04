const Task = require('../models/task.model.js');
const tasks = require('../services/mockDB.js');

const getTasks = async function (req, res) {
    try {
        const result = await tasks;
        res.send(result);
    }
    catch (err) {
        res.status(500).send({
            message: err || "Couldn't fetch tasks!"
        })
    }
}
const getTask = async function (req, res) {
    try {
        const result = await tasks.getTask(req.params.id)
        res.send(result)
    }
    catch (err) {
        res.status(500).send({
            message: err || "Couldn't issue a task!"
        })
    }
}
const postTask = async function (req, res) {
    try {
        const task = new Task(req.description, req.dateOfinseration);
        const result = await tasks.append(result);
        res.send(result)
    }
    catch (err) {
        res.status(500).send({
            message: err || "Couldn't issue a task!"
        })
    }
}
module.exports.getTask = getTask;
module.exports.getTasks = getTasks;
module.exports.postTask = postTask;