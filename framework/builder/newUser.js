import faker from 'faker';

const PersonBuilder = function PersonBuilder() {
    this.addFirstName = function addFirstName() {
        this.firstName = faker.name.firstName();
        return this;
    };
    this.addLastName = function addLastName() {
        this.lastName = faker.name.lastName();
        return this;
    };
    this.addEmail = function addEmail ()  {
        this.email = faker.internet.email();
        return this;
    };
    this.addAddress = function addAddress() {
        this.address = faker.address.streetName();
        return this;
    };
    this.addCity = function addCity() {
        this.city = faker.address.city();
        return this;
    };
    this.addUserName = function addUserName ()  {
        this.userName = faker.internet.userName();
        return this;
    };
    this.addPassword = function addPassword() {
        this.password = faker.internet.password();
        return this;
      };

    this.generate = function generate() {
        const fields = Object.getOwnPropertyNames(this);
        const data = {};
        fields.forEach((fieldName) => {
      if (this[fieldName] && typeof this[fieldName] !== 'function') {
        data[fieldName] = this[fieldName];
      }
    });
    return data;
    }
};

export { PersonBuilder };
