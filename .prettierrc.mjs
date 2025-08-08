/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
	semi: true,
	singleQuote: false,
	jsxSingleQuote: false,
	quoteProps: "consistent",
	tabWidth: 2,
	trailingComma: "es5",
	useTabs: true,
	endOfLine: "lf",
	arrowParens: "always",
	plugins: ["prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "*.ts",
			options: {
				parser: "typescript",
			},
		},
		{
			files: "*.tsx",
			options: {
				parser: "typescript",
			},
		},
		{
			files: "*.jsx",
			options: {
				parser: "babel",
			},
		},
		{
			files: "*.js",
			options: {
				parser: "babel",
			},
		},
	],
};
