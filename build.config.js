import * as esbuild from "esbuild";

let ctx = await esbuild.context({
  logLevel: "info",
  allowOverwrite: true,
  entryPoints: ["./src/index.tsx"],
  bundle: true,
  outdir: "./public/bin",
  loader: {
    ".ts": "tsx",
    ".js": "jsx",
    ".svg": "dataurl",
    ".html": "text",
    ".png": "dataurl",
  },
  sourcemap: true,
  minify: true,
  // target: ["chrome58", "firefox57", "safari11", "edge16"], To be reconsidered
});

await ctx.serve({
  servedir: "public",
});

await ctx.watch();

console.log(`Watching for changes`);
