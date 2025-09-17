import { BasePage } from "../BasePage";

export class WordPage extends BasePage {
  async navigateToPage() {
    await this.page.goto("/word");
  }

  async selectWord(word: string) {
    await this.page.getByRole("button", { name: word }).click();
  }

  async favoriteWord(word: string) {
    await this.selectWord(word);

    await this.page
      .getByRole("heading", { name: word })
      .getByRole("button")
      .click();
  }
}
