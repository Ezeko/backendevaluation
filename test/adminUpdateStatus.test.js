const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../app');





chai.use(chaiHttp);
chai.should()

const {
  expect
} = chai;

describe('Admin update Story', () => {
  it("it should let admin update user's story", (done) => {
    chai.request(app)
      .put('/admin/stories/update')
      .end((error, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});


