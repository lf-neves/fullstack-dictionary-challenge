import { WordPage } from "./WordPage";
import { loggedInTest } from "@/e2e-tests/fixtures";
import { expect } from "@playwright/test";

loggedInTest.describe("Words page", () => {
  loggedInTest(
    "allows selecting a word and seeing its meaning and phonetic",
    async ({ page }) => {
      const wordPage = new WordPage(page);

      await wordPage.navigateToPage();

      // assert: word page elements are visible
      await expect(page.getByRole("tab", { name: "Word list" })).toBeVisible();

      // act: select a word
      await wordPage.selectWord("bike");

      // assert: visited words history includes selected word
      await expect(page.getByRole("rowheader", { name: "bike" })).toBeVisible();

      // assert: word details are visible
      await expect(page.getByRole("heading", { name: "bike" })).toBeVisible();
      await expect(page.getByText("noun")).toBeVisible();

      // act: go to next meaning
      await page.getByRole("button", { name: "Next", exact: true }).click();

      // assert: next meaning is visible
      await expect(page.getByText("(verb) - ")).toBeVisible();
    }
  );
});
