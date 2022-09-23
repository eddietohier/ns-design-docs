import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter(),

		prerender: {
			default: true,
			entries: ['*']
		}
	}
};

export default config;
