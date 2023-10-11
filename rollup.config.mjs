import json from '@rollup/plugin-json';
import pug from 'rollup-plugin-pug';

export default {
	input: './hello.pug',
	output: {
		file: 'hello.html',
		format: 'html'
	},
	plugins: [pug({
		build: {
			locals: { hoge: "hoge" },
			options: { pretty: true },
		  },
	})]
};