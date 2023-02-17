<script lang="ts">
	import '../app.css';
</script>

<div class="flex h-full flex-col">
	<div class="flex-initial">
		<nav class="flex space-x-4 justify-center">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/work">Work</a>
			<a href="/contact">Contact</a>
		</nav>
	</div>

	<main class="flex-auto">
		<slot />
	</main>

	<!-- <footer class="flex-initial">Footer</footer> -->
</div>
