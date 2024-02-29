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

describe('Cart page', function() {
  it('should return status 200 when id is a number', function(done) {
    chai.request('http://localhost:7865')
      .get('/cart/12')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return status 404 when id is not a number', function(done) {
    chai.request('http://localhost:7865')
      .get('/cart/hello')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        done();
      });
  });
});
