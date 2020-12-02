const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../app');


chai.use(chaiHttp);
chai.should()

const {
  expect
} = chai;

let user = 2
describe('View Story', () => {
  it("it should allow user's see their story", (done) => {
    chai.request(app)
      .get(`/api/users/stories/${user}`)
      .end((error, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});


