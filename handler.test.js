const request = require('supertest');

request("http://localhost:3000")
  .get('/hello')
  .expect('Content-Type', /json/)
  .expect(200)
  .end((err, res) => console.log(res))
