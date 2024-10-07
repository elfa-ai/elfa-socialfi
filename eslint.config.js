const babelParser = require("@babel/eslint-parser");
const tsParser = require("@typescript-eslint/parser");
const react = require("eslint-plugin-react");

const airbnbTypescript = require("eslint-config-airbnb-typescript");
const prettier = require("eslint-config-prettier");
const testingLibrary = require("eslint-plugin-testing-library");

const jsxA11y = require("eslint-plugin-jsx-a11y");
const importY = require("eslint-plugin-import");
const unusedImport = require("eslint-plugin-unused-imports");
const tailwind = require("eslint-plugin-tailwindcss");
const noSanitize = require("eslint-plugin-no-unsanitized");

module.exports = [
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
    },
  },
  {
    plugins: {
      react: react,
      tailwindcss: tailwind,
      "no-unsanitized": noSanitize,
      "jsx-a11y": jsxA11y,
      import: importY,
      "unused-imports": unusedImport,
    },
  },
  {
    ignores: [
      "/node_modules",
      "/dist",
      "/coverage",
      "/build",
      "/public",
      "/scripts/gen-license-info.js",
      "/types",
    ],
  },
  {
    rules: {
      "import/order": "off",
      "react/require-default-props": "off",
      "no-param-reassign": ["error", { props: false }],
      "jsx-a11y/control-has-associated-label": [
        "error",
        {
          labelAttributes: ["label"],
          controlComponents: ["button"],
          ignoreElements: [
            "audio",
            "canvas",
            "embed",
            "input",
            "textarea",
            "tr",
            "video",
          ],
          ignoreRoles: [
            "grid",
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "row",
            "tablist",
            "toolbar",
            "tree",
            "treegrid",
          ],
          depth: 5,
        },
      ],
      "jsx-a11y/no-noninteractive-element-to-interactive-role": [
        "error",
        {
          ul: [
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "tablist",
            "tree",
            "treegrid",
          ],
          ol: [
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "tablist",
            "tree",
            "treegrid",
          ],
          li: ["menuitem", "option", "row", "tab", "treeitem"],
          table: ["grid"],
          td: ["gridcell"],
        },
      ],
      "jsx-a11y/media-has-caption": "off",
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          controlComponents: ["Input"], // Add your custom input components if any
          assert: "either",
          depth: 3,
        },
      ],

      // 'jsx-a11y/label-has-associated-control': [
      //   'error',
      //   {
      //     // Components to check for label association
      //     labelComponents: ['label'],
      //     // Control components that should be associated with labels
      //     controlComponents: ['input', 'textarea', 'select'],
      //     // Required attributes for the control component
      //     assert: 'either', // Allows either nesting or `htmlFor` attribute
      //     depth: 3 // The depth at which the nesting should be checked
      //   }
      // ],
      "jsx-a11y/no-onchange": "off",
      "no-underscore-dangle": "off",
      "implicit-arrow-linebreak": "off",
      "no-case-declarations": "off",
      "prefer-const": [
        "error",
        {
          destructuring: "all",
        },
      ],
      "no-use-before-define": "off",
      "import/no-cycle": "warn",
      "import/no-extraneous-dependencies": "off",
      "react/function-component-definition": "off",
      "import/no-named-as-default": "off",
      "react/prop-types": "off",
      "import/prefer-default-export": "off",
      "react/jsx-props-no-spreading": "off",
      "no-unsanitized/method": "error",
      "no-unsanitized/property": "error",
      "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],
      "import/extensions": [
        "error",
        "never",
        {
          svg: "always",
          css: "always",
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
    },
  },
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
    },
    plugins: {
      "testing-library/react": testingLibrary,
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      ...airbnbTypescript.plugins,
      ...jsxA11y,
    },
    rules: {
      ...airbnbTypescript.rules,
      ...prettier.rules,
      "react/require-default-props": "off",
    },

    // extends: ['airbnb-typescript', 'prettier'],
    // rules: {
    //   'react/require-default-props': 'off'
    // }
  },
];
