//Global Theme
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fonts: {
		body: '"Raleway, sans-serif"',
		heading: '"Nunito, sans-serif"',
		monospace: '"Cousine, monospace"',
	},
	fontSizes: [14, 16, 18, 22, 26, 34, 52, 68, 96],
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	lineHeights: {
		body: 1.65,
		heading: 1.225,
	},
	colors: {
		highlight: {
			DEFAULT: '#F3B13D',
			light: '#F9DF4B',
			menu: '#E4803A',
			secondary: '#439597',
		},
		gradient: {
			DEFAULT: 'linear-gradient(to right, #E3763A , #E8914A)',
		},
		gray: {
			DEFAULT: '#4A4A4A',
			light: '#F4F4F4',
			dark: '#B8B8B8',
			lightest: '#FFFFFF',
		},
		primary: '#FF5A00',
		primaryHover: 'rgb(255,90,0,.8)',
		secondary: '#663399',
		info: '#507EF6',
		sucess: '#53BF85',
		error: '#F65050',
		warn: '#F6C850',
		modes: {
			dark: {
				text: '#FFFFFF',
				background: '#222639',
				primary: '#BB99FF',
				accent: '#F0F5FA',
				gray: '#6699CC',
				muted: '#F6F6F6',
			},
		},
	},
	styles: {
		root: {
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body',
		},
		h1: {
			color: 'primary',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
			fontSize: 5,
		},
		h2: {
			color: 'primary',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
			fontSize: 4,
		},
		h3: {
			color: 'gray',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
			fontSize: 3,
		},
		h4: {
			color: 'gray',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
			fontSize: 2,
		},
		h5: {
			color: 'text',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
			fontSize: 1,
		},
		h6: {
			color: 'text',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
			fontSize: 0,
		},
		p: {
			color: 'text',
			fontFamily: 'body',
			fontWeight: 'body',
			lineHeight: 'body',
		},
		a: {
			color: 'primary',
		},
		pre: {
			fontFamily: 'monospace',
			overflowX: 'auto',
			code: {
				color: 'inherit',
			},
		},
		code: {
			fontFamily: 'monospace',
			fontSize: 'inherit',
		},
		table: {
			width: '100%',
			borderCollapse: 'separate',
			borderSpacing: 0,
		},
		th: {
			textAlign: 'left',
			borderBottomStyle: 'solid',
		},
		td: {
			textAlign: 'left',
			borderBottomStyle: 'solid',
		},
		img: {
			maxWidth: '100%',
		},
		hr: {
			height: 1,
			width: '100%',
		},
		layout: {
			header: {
				color: 'primary',
				backgroundColor: 'background',
			},
			footer: {
				color: 'primary',
				backgroundColor: 'background',
			},
		},
	},
}