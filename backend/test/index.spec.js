const assert = require('chai').assert;
const Task = require('../src/models/task.model.js');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../src/index');
chai.use(chaiHttp);

describe("Tasks",()=>{
    // beforeEach((done)=>{

    // })
    describe('Get all tasks', ()=>{
        it('it should GET all the tasks', (done) =>{
            chai.request(server)
                .get('/api/tasks')
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(2);
                done();
                });
        });
    })    
});