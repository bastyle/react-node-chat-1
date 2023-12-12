const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); 
chai.use(chaiHttp);
const expect = chai.expect;

describe('API Health', () => {
    it('should return http code 404 for /api/healthz endpoint', (done) => {
        chai
            .request(app)
            .get('/api/healthz')
            .end((err, res) => {
            expect(res).to.have.status(404);            
            done();
            });
    }),
    it('should return http code 200 for /api/health endpoint', (done) => {
        chai
        .request(app)
        .get('/api/health')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('msg').to.equal('OK');
            done();
        });
  }),
    it('should return a message "OK" for /api/health endpoint', (done) => {
        chai
        .request(app)
        .get('/api/health')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('msg').to.equal('OK');
            done();
        });
    });
});

describe('API integration OPEN API', () => {
    it('should return http code 200 for /api/openai endpoint', (done) => {
      const messages = [{ role: 'system', content: 'You are a helpful assistant.' }];  
      chai
        .request(app)
        .post('/api/openai')
        .send({ messages })
        .end((err, res) => {
          expect(res).to.have.status(200);          
          done();
        });
    }),
    it('should return a message with choices /api/openai endpoint', (done) => {
        const messages = [{ role: 'system', content: 'Are you the best?.' }];  
        chai
          .request(app)
          .post('/api/openai')
          .send({ messages })
          .end((err, res) => {
            expect(res.body).to.have.property('choices');
            done();
          });
      });
  });
