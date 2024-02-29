const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Index page', function() {
  it('should return status 200', function(done) {
    chai.request('http://localhost:7865')
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return correct result', function(done) {
    chai.request('http://localhost:7865')
      .get('/')
      .end(function(err, res) {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
