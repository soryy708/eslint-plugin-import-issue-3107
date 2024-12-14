import globals from "globals";
import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  importPlugin.flatConfigs.recommended,
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  { "ignores": ["public/pixi.min.mjs"] }
];