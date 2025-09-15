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
      await page.getByRole("button", { name: "bike" }).click();

      // assert: visited words history includes selected word
      await expect(page.getByRole("rowheader", { name: "bike" })).toBeVisible();

      // assert: word details are visible
      await expect(page.getByRole("heading", { name: "bike" })).toBeVisible();
      await expect(page.getByText("noun")).toBeVisible();
      await expect(
        page.getByText(
          "A vehicle that has two wheels, one behind the other, a steering handle, and a saddle seat or seats and is usually propelled by the action of a rider’s feet upon pedals"
        )
      ).toBeVisible();

      // act: go to next meaning
      await page.getByRole("button", { name: "Next", exact: true }).click();

      // assert: next meaning is visible
      await expect(page.getByText("(verb) - To ride a bike..")).toBeVisible();
    }
  );

  // loggedInTest("allows favoring and unfavorite a word", async ({ page }) => {
  //   const wordPage = new WordPage(page);

  //   await wordPage.navigateToPage();
  //   await wordPage.favoriteWord("example");
  // });
});
