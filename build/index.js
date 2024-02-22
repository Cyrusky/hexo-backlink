const { resolve } = require("path");
const { build } = require("esbuild");

const rootDir = resolve(__dirname, "..");

build({
  entryPoints: [resolve(rootDir, "src/index.ts")],
  bundle: true,
  minify: true,
  format: "cjs",
  platform: "node",
  target: "es2018",
  treeShaking: true,
  outfile: resolve(rootDir, "index.js"),
}).then(() => {
  console.log("Build complete!");
});
