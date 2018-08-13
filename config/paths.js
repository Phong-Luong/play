"use strict";

const path = require("path");
const fs = require("fs");
const url = require("url");
const findMonorepo = require("react-dev-utils/workspaceUtils").findMonorepo;

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
// const appDirectory = fs.realpathSync(
//   "/Users/romariclaurent/Development/eb/eb-factory/eb-components-playground"
// );
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith("/");
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}

const getPublicUrl = appPackageJson =>
  envPublicUrl || require(appPackageJson).homepage;

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : "/");
  return ensureSlash(servedUrl, true);
}

//!!CHANGED!!
const getAppIndexJs = appPackageJson =>
  require(appPackageJson).play.index + "/index.js";

//!!CHANGED!!
const getAppHtml = appPackageJson =>
  require(appPackageJson).play.index + "/index.html";

// config after eject: we're in ./config/
module.exports = {
  //!!CHANGED!!
  dotenv: resolveApp(".env"),
  appPath: resolveApp("."),
  appBuild: resolveApp("playground/build"),
  appPublic: resolveApp("playground/public"),
  appHtml: getAppHtml(resolveApp("package.json")),
  appIndexJs: getAppIndexJs(resolveApp("package.json")),
  appPackageJson: resolveApp("package.json"),
  appSrc: resolveApp("playground"),
  testsSetup: resolveApp("src/setupTests.js"),
  appNodeModules: resolveApp("node_modules"),
  publicUrl: getPublicUrl(resolveApp("package.json")),
  servedPath: getServedPath(resolveApp("package.json"))
};

let checkForMonorepo = true;

module.exports.srcPaths = [module.exports.appSrc];

module.exports.useYarn = fs.existsSync(
  path.join(module.exports.appPath, "yarn.lock")
);

if (checkForMonorepo) {
  // if app is in a monorepo (lerna or yarn workspace), treat other packages in
  // the monorepo as if they are app source
  const mono = findMonorepo(appDirectory);
  if (mono.isAppIncluded) {
    Array.prototype.push.apply(module.exports.srcPaths, mono.pkgs);
  }
  // !!CHANGED!! this allows components in src/components to be resolved by webpack
  module.exports.srcPaths.push(path.resolve(__dirname, "../"));
  module.exports.useYarn = module.exports.useYarn || mono.isYarnWs;
}
