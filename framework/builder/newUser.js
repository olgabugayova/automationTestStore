import faker from 'faker';

const PersonBuilder = function PersonBuilder() {
    this.addFirstName = function addFirstName() {
        this.firstName = faker.name.firstName();
        return this.firstName;
    };
    this.addLastName = function addLastName() {
        this.lastName = faker.name.lastName();
        return this.lastName;
    };
    this.addEmail = function addEmail ()  {
        this.email = faker.internet.email();
        return this.email;
    };
    this.addAddress = function addAddress() {
        this.address = faker.address.streetName();
        return this.address;
    };
    this.addCity = function addCity() {
        this.city = faker.address.city();
        return this.city;
    };
    this.addUserName = function addUserName ()  {
        this.userName = faker.internet.userName();
        return this.userName;
    };
    this.addPassword = function addPassword() {
        this.password = faker.internet.password();
        return this.password;
      };
};

export { PersonBuilder };
