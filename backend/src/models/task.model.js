class Task{
    static taskCounter = 0;
    constructor(description, dateOfinseration){
        this.tid = ++Task.taskCounter;
        this.description = description;
        this.dateOfinseration = dateOfinseration;
    }
}

module.exports = Task;