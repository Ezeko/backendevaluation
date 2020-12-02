const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../app');


chai.use(chaiHttp);
chai.should()


const {
  expect
} = chai;

describe('Create Story', () => {
  it("it should create user's story", (done) => {
    chai.request(app)
      .post('/api/create')
      .send({ summary: 'summary',
      type: 'type',
      description: 'description',
      complexity: 'complexity',
      timeForCompletion: '2 days',
      cost: '2000',
      owner: 'normaluser',
      status: 'PENDING'})
      .end((error, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});


