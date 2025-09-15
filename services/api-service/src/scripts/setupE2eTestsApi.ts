import { importWordsList } from "./importWordsList";
import { resetDBData } from "./resetDb";

async function setupE2eTestsApi() {
  if (process.env.API_ENV !== "test") {
    throw new Error(
      "You cannot use this script to reset data in a non-test database."
    );
  }

  await resetDBData();
  await importWordsList();
}

await setupE2eTestsApi();
