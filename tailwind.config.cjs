/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [
			{
			default: {
				"primary": "#dc2626",
          
				"secondary": "#2563eb",
						 
				"accent": "#d97706",
						 
				"neutral": "#14532d",
						 
				"base-100": "#dcfce7",
						 
				"info": "#2463EB",
						 
				"success": "#16A249",
						 
				"warning": "#DB7706",
						 
				"error": "#DC2828",
			},
			},
		],
    },
	plugins: [require("@tailwindcss/typography"),require("daisyui")]
}
