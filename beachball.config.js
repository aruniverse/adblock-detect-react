/** @type {import("beachball").BeachballConfig } */
module.exports = {
    bumpDeps: false,
    access: "public",
    tag: "latest",
    scope: ["adblock-detect-react"],
    ignorePatterns: [
      ".*ignore",
      ".github/**",
      ".vscode/**",
      "**/test/**",
      "pnpm-lock.yaml",
    ],
    changehint: "Run 'pnpm change' to generate a change file",
    publish: true,
  };