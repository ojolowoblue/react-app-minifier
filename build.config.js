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
});

await ctx.serve({
  servedir: "public",
});

await ctx.watch();

console.log(`Watching for changes`);
