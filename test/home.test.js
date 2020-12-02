const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../app');


chai.use(chaiHttp);
chai.should()

const {
  expect
} = chai;

describe('Home page', () => {
  it('it should connect to server', (done) => {
    chai.request(app)
      .get('/')
      .end((error, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});


