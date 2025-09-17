import { test } from "@playwright/test";
import { LoginPage } from "./LoginPage";

test.describe("Login page", () => {
  test("allows user to complete the login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToPage();
    await loginPage.fillLoginForm("user@example.com", "password");
    await loginPage.submitLoginForm();
  });
});
