import {nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"public-sans": ["Public Sans", "sans-serif"],
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
