import { readFileSync } from "fs";
import { Config } from "jest";
import path from "path";
import { pathsToModuleNameMapper } from "ts-jest";

if (process.env.JEST_RUNNER !== "eslint" && process.env.API_ENV !== "test") {
  throw new Error("Jest must be run with API_ENV set to `test`.");
}

const tsconfig = JSON.parse(
  readFileSync(path.resolve(__dirname, "tsconfig.json"), "utf-8")
);

export function createJestConfig(overrides: Partial<Config>) {
  return {
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
    randomize: true,
    testEnvironment: "node",
    testRegex: "/__tests__/.*\\.test.(t|j)sx?$",
    transform: {
      "^.+\\.ts$": ["ts-jest", { useESM: true }],
      "^.+\\.[j]sx?$": "babel-jest",
    },

    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

    preset: "ts-jest/presets/default-esm",
    rootDir: ".",

    transformIgnorePatterns: ["/node_modules/lambda/node_modules/(?!p-map)"],
    extensionsToTreatAsEsm: [".ts"],
    moduleNameMapper: pathsToModuleNameMapper(
      tsconfig.compilerOptions.paths || {},
      {
        prefix: "<rootDir>/",
      }
    ),
    setupFilesAfterEnv: ["<rootDir>/setupFilesAfterEnv.ts"],
    ...overrides,
  };
}
