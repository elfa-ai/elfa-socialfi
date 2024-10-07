/* eslint-disable no-useless-escape */
const { readdirSync } = require("fs");
const { resolve } = require("path");

const getDirectories = (source: any) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent: any) => dirent.isDirectory())
    .map((dirent: any) => dirent.name);

const getRegexInternalModules = () =>
  `^(${getDirectories(resolve(__dirname, "src")).join("|")}).+(?<!s?css)$`;

/* eslint-disable global-require */
module.exports = {
  arrowParens: "always",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  printWidth: 100,
  importOrder: [
    "^react$", // react
    "<THIRD_PARTY_MODULES>", // external
    getRegexInternalModules(), // internal
    "^../.+(?<!s?css)$", // parent
    "^./.+(?<!s?css)$", // sibling
    ".s?css$", // scss
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],
  overrides: [
    {
      files: "*.(ts|tsx)",
      options: {
        parser: "babel-ts",
      },
    },
  ],
};
