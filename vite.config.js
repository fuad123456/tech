import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"
import svgLoader from 'vite-svg-loader';
const purgecss = require('@fullhuman/postcss-purgecss')

const path = require('path')
const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

export default defineConfig( {
	plugins: [pugPlugin(options, locals),svgLoader(),purgecss({
		content: ['./**/*.html']
	  })],
	// root: path.resolve(__dirname, 'src'),
	build: {
		outDir: './dist',
		assetsDir: './src',
		assetsInlineLimit: 0,
		copyPublicDir:true
	},
	base: './',
	// base:'/src',
	server: {
		port: 4444
	}
})