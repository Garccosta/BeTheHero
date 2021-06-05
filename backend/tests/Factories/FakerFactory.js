const faker = require('faker');

const Faker = {
  CreateFakeONG(){
    return {
      name: faker.company.companyName(),
      email: faker.internet.email(),
      whatsapp: faker.phone.phoneNumberFormat(10),
      city: faker.address.cityName(),
      uf: faker.address.cityPrefix()
    }
  }
}

module.exports = Faker;