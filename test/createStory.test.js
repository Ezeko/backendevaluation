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
      .end((error, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});


