/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './dist/*.html', './src/**/*.{js,jsx,ts,tsx}' ],
	theme: {
		extend: {
			gridTemplateColumns: {
        		'5': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
	  		animation: {
        		'slowfade': 'slowfade 0.15s ease-in-out',
				'slowopacity': 'slowopacity 0.15s ease-in-out'
      },
	  keyframes:{
		slowfade: {
			from: {transform: "scale(0)"},
			to: {transform: "scale(1)"},
		},
		slowopacity:{
			from:{opacity: '0'},
			to:{opacity: '0.5'},
		},
		smoothscroll:{
			from:{

			}
		}
	  }
		}
	},
	
	plugins: [require('@tailwindcss/line-clamp'),]
};
