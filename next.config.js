const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "/";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/ev-homepage/`;
  basePath = `/ev-homepage`;
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
};
