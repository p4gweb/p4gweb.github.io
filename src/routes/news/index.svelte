<script context="module">
	export function preload() {
		return this.fetch(`news.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>News</title>
</svelte:head>

<h1>News</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="news/{post.link}">{post.title}</a>
			<br>
			{#if post.tags}
				{#each post.tags as tag}
					&nbsp;&nbsp;&nbsp;&nbsp;{tag}
				{/each}
			{/if}
		</li>
	{/each}
</ul>
