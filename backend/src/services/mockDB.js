const getTasks = require("../apis/task-api");
const Task = require("../models/task.model");

const tasks = [new Task("Work on portfio Project","02.12.2021"),new Task("Watch that cool TV-Show","04.12.2021")];
const getTask = async function(id){
    try{
        const res = await tasks[id];
        return res;
    }
    catch(err){
        console.log(err);
    }
};
const deleteTask = async function(id){
    try{
        const res = await tasks.find((x)=> x.id == id);
        return res;
    }
    catch(err){
        console.log(err);
    }
};
module.exports = tasks, getTask, deleteTask;