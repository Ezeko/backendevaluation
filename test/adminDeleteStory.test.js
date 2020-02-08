const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../app');





chai.use(chaiHttp);
chai.should()

const {
  expect
} = chai;

describe('Admin delete Story', () => {
  it("it should allow admin delete user's story", (done) => {
    chai.request(app)
      .delete('/admin/stories/delete')
      .end((error, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});


