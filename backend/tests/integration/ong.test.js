const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

let ONG = {
  name: "Cantinho do zé",
  email: "zezinho@legal.com",
  whatsapp: "0123456789",
  city: "Maricá",
  uf: "RJ"
};

describe('ONG', () => {
  beforeAll(async () => {
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection('ongs').truncate();
    await connection.destroy();
  });

  it('should create a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    .send(ONG)

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
})