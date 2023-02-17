/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sassy: ['Sassy Frass'],
				poppins: ['Poppins'],
				quicksand: ['Quicksand']
			}
		}
	},
	plugins: []
};
