const faker = require('faker');

const Faker = {
	CreateFakeONG(){
		return {
			name: faker.company.companyName(),
			email: faker.internet.email(),
			whatsapp: faker.phone.phoneNumber().substring(0,10),
			city: faker.address.cityName(),
			uf: faker.address.cityPrefix().substring(0,2)
		};
	}
};

module.exports = Faker;
