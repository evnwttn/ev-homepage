const repo = "ev-homepage";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

images.unoptimized = true;

let assetPrefix = "/";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
};
