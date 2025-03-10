const config = {
  "**/*.(js|jsx|ts|tsx)": (filenames) => [
    `eslint --fix ${filenames.join(" ")}`,
    `prettier --write ${filenames.join(" ")}`,
  ],
  "**/*.(css|scss|md)": (filenames) =>
    `prettier --write ${filenames.join(" ")}`,
};
export default config;
