const request = require('supertest');

request("http://localhost:3000")
  .get('/hello')
  .expect('Content-Type', /json/)
  .expect(200)
  .expect(res => console.log(res))
