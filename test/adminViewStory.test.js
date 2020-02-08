const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../app');





chai.use(chaiHttp);
chai.should()

const {
  expect
} = chai;

describe('Admin view Story', () => {
  it("it should let admin view user's story", (done) => {
    chai.request(app)
      .get('/admin/stories/admin')
      .end((error, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});


