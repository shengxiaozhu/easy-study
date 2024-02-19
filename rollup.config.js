import { resolve } from "path";
import vue from "rollup-plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import autoprefixer from "autoprefixer";
// import css from "rollup-plugin-css-only";

export default {
  input: "./index.ts",
  plugins: [
    nodeResolve(),
    typescript(),
    vue({
      preprocessStyles: true,
    }),
    postcss({
      plugins: [autoprefixer()],
      extract: resolve("./dist/es/index.css"),
    }),
    commonjs(),
  ],
  output: [
    {
      format: "es",
      entryFileNames: "[name].mjs",
      preserveModules: true,
      exports: "named",
      dir: "./dist/es",
    },
  ],
  external: ["vue", "elemtnt-plus"],
};
