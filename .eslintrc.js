module.exports = {
	extends: ["plugin:prettier/recommended"],
	plugins: [
		"simple-import-sort",
		"@typescript-eslint",
		"import",
		"prettier",
		"header",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json",
	},
	rules: {
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"prettier/prettier": "error",
		"import/first": "off",
		"header/header": [
			2,
			"block",
			[
				"************************************************",
				" * Copyright (c) 2023.",
				" * Author: Cyrusky <bo.jin@borgor.cn>",
				" ************************************************",
			],
		],
		"@typescript-eslint/no-useless-constructor": "off",
	},
};
