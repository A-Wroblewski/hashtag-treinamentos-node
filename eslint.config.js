import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        languageOptions: {
            globals: globals.node,
        },
        rules: {
            "no-constant-condition": "warn",
            "no-unused-vars": "warn",
            "semi": "error",
        },
    },
    pluginJs.configs.recommended,
];
