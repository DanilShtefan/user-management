import { faker } from "@faker-js/faker";

export const generateUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 99 }),
      email: faker.internet.email(),
    });
  }
  return users;
};
