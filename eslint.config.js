const eslintPluginAstro = require("eslint-plugin-astro");
module.exports = [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...eslintPluginAstro.configs["flat/recommended"], // In CommonJS, the `flat/` prefix is required.
	{
		extends: ["prettier"], // Disable conflicting ESLint rules
		rules: {
			semi: ["error", "always"],
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
		},
	},
];
