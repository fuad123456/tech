// import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"
import svgLoader from 'vite-svg-loader';
import { defineConfig, loadEnv } from "vite";
import { fileURLToPath, URL } from "node:url";
import { rollup } from 'rollup';
import pug from 'rollup-plugin-pug';
const path = require('path')
const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }
// const env = loadEnv(mode, process.cwd(), "");

export default defineConfig( {
	plugins: [pugPlugin(options, locals),svgLoader()],
	build: {
		// outDir: './dist',
		assetsDir: './src',
		assetsInlineLimit: 0,
		copyPublicDir:true,
	},
	base: './',
	server: {
		port: 4444
	}
})
