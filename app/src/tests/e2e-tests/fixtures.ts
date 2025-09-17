import { CreateUserDocument } from "@/typings/graphql/codegen/graphqlOperations";
import { Page, test as baseTest } from "@playwright/test";
import { faker, logger } from "lambda";

type AuthFixtures = {
  authPage: Page;
};

const loggedInTest = baseTest.extend<AuthFixtures>({
  context: async ({ browser }, playwrightUse) => {
    const context = await browser.newContext();
    const requestContext = context.request;
    const newUserData = {
      email: faker.internet.email(),
      password: faker.internet.password(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    };

    const response = await requestContext.post(
      "http://localhost:4000/graphql",
      {
        data: {
          query: CreateUserDocument,
          variables: {
            input: newUserData,
          },
        },
      }
    );

    if (!response.ok()) {
      throw new Error("Login failed.");
    }

    const json = await response.json();

    logger.info("User created for e2e tests: %O", {
      email: newUserData.email,
      firstName: newUserData.firstName,
      lastName: newUserData.lastName,
    });

    const token = json.data.createUser?.token;

    if (!token) {
      throw new Error("No token received.");
    }

    await context.addCookies([
      {
        name: "token",
        value: token,
        domain: "localhost",
        path: "/",
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
      },
    ]);

    playwrightUse(context);
  },
  authPage: async ({ context }, playwrightUse) => {
    const page = await context.newPage();

    await playwrightUse(page);
    await page.close();
  },
});

export { loggedInTest };
