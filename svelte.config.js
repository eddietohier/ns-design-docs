import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	kit: {
		// default options are shown
        adapter: vercel({
            edge: false,
            external: [],
            split: false
        }),

		prerender: {
			default: true,
			entries: ['*']
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
