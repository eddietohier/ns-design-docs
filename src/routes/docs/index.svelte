<script context="module">
	export const prerender = true;

	/** @type {import("@sveltejs/kit").Load} */
	export function load() {
		return {
			status: 307,
			redirect: '/docs/design/colors'
		};
	}
</script>

<script>
	import '../../app.css';
</script>
