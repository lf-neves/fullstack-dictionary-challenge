import { readFileSync } from "fs";
import type { Config } from "jest";
import path from "path";
import { pathsToModuleNameMapper } from "ts-jest";

const tsconfig = JSON.parse(
  readFileSync(path.resolve(__dirname, "tsconfig.json"), "utf-8")
);

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  rootDir: ".",
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
    "^.+\\.[j]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/lambda/node_modules/(?!p-map)"],
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: pathsToModuleNameMapper(
    tsconfig.compilerOptions.paths || {},
    {
      prefix: "<rootDir>/",
    }
  ),
  setupFilesAfterEnv: ["<rootDir>/setupFilesAfterEnv.ts"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
};

export default config;
