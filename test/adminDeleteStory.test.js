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
      .delete(`/api/admin/stories/delete/${20}`) //increase id by 1 to pass test
      .end((error, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});


