import { faker } from "@faker-js/faker";
import { hashPassword } from "core";
import { prismaClient } from "database";
import { User, Word } from "database/src/generated/prisma";

export async function setupTestData({
  userOverrides,
  wordOverrides,
}: {
  userOverrides?: Partial<User>;
  wordOverrides?: Partial<Word>;
} = {}) {
  const password = faker.internet.password();
  const hashedPassword = await hashPassword(password);

  const user = await prismaClient.user.create({
    data: {
      email: faker.internet.email(),
      password: hashedPassword,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      ...userOverrides,
    },
  });

  const word = await prismaClient.word.create({
    data: {
      word: faker.lorem.word(),
      isFavorite: faker.datatype.boolean(),
      status: "ACTIVE",
      ...wordOverrides,
    },
  });

  return { user, word };
}
