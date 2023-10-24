const config = {
  semi: false,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "none",
  arrowParens: "always",
  endOfLine: "auto",
  importOrder: ["^@/styles/(.*)$", "^@/components(.*)$", "^@/(.*)$", "^[./]", "^"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"]
}

module.exports = config
