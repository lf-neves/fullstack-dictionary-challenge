import { BasePage } from "../BasePage";

export class WordPage extends BasePage {
  async navigateToPage() {
    await this.page.goto("/word");
  }

  async favoriteWord(word: string) {
    await this.page
      .getByRole("button", { name: `favorite ${word}` })
      .first()
      .click();
  }
}
