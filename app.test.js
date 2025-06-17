const app = require('./app')
const request = require('supertest')

describe('Express App', () => {
  test('GET /hello returns Hello, World!', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, World!');
  });

  test('POST /sum returns sum of two numbers', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 10, b: 15 });
    expect(res.statusCode).toBe(200);
    expect(res.body.sum).toBe(25);
  });

  test('POST /sum handles zero values', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 0, b: 0 });
    expect(res.statusCode).toBe(200);
    expect(res.body.sum).toBe(0);
  });
});