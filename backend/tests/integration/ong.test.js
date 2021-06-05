const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
const faker = require('../Factories/FakerFactory');

describe('ONG', () => {
  beforeAll(async () => {
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection('ongs').truncate();
    await connection.destroy();
  });

  it('should create a new ONG', async () => {
    let ONG = faker.CreateFakeONG();
    
    const response = await request(app)
    .post('/ongs')
    .send(ONG)

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
})