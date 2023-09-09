import esbuildServer from "esbuild-live-server";

esbuildServer(
  {
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
  },
  {
    port: 4000,
    root: "./public",
  }
);
