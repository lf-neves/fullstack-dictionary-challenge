import { BasePage } from "../BasePage";

export class LoginPage extends BasePage {
  async navigateToPage() {
    await this.page.goto("http://localhost:3000/login");
  }

  async fillLoginForm(email: string, password: string) {
    await this.page.getByRole("textbox", { name: "Email" }).fill(email);
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
  }

  async submitLoginForm() {
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
