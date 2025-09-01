module.exports = {
  "**/*.{ts,tsx}": () => "bun tsc --noEmit",

  "**/*.{ts,tsx,js}": (filenames) => [
    `bun eslint --fix ${filenames.join(" ")}`,
    `bun prettier --write ${filenames.join(" ")}`,
  ],

  "**/*.{md,json}": (filenames) =>
    `bun prettier --write ${filenames.join(" ")}`,
};
