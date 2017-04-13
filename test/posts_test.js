var chai     = require('chai');
var chaiHttp = require('chai-http');
var should   = chai.should();
var server   = require('../server');

chai.use(chaiHttp);


describe('/GET posts', () => {
  it('returns the posts', (done) => {
    chai.request(server)
    .get('/api/posts')
    .end(function(err, res) {
      res.should.have.status(200);
      done();
    })
  })
});

describe('/POST post', () => {
  it('will not create a new post without a title', (done) => {

    var post = {
      content: "Herro, this is a test!"
    }

    chai.request(server)
      .post('/api/posts')
      .send(post)
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.have.property('title');
        res.body.errors.title.should.have.property('kind').eql('required');
        done();
      })
  });

  it('should POST a new post', function(done) {

    var post = {
      content: "Testing mochaaaaaaa",
      title: "it be thursday"
    }

    chai.request(server)
      .post('/api/posts')
      .send(post)
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.have.property('message').eql('Post successfully added!');
        res.body.data.should.have.property('title');
        res.body.data.should.have.property('content');
        res.body.data.content.should.be.a('array');
        done();
      })
  })
});

describe('GET POST BY ID', function() {
  it('it should get POST by ID', function(done){
    var post = new Post({
      content: "I am tired",
      title: "i would like wine now, please"
    });

    post.save(function(err, post) {
      chai.request(server)
        .get('/api/posts' + post._id)
        .send(post)
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('title')
          done();
        })
    })

  })
});
