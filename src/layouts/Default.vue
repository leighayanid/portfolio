<template>
	<div id="app">
		<Navbar />
		<transition name="fade" appear>
			<main class="main">
				<slot />
			</main>
		</transition>
		<Footer />
	</div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
	components: {
		Navbar,
		Footer,
	},
};
</script>

<style lang="scss">
@font-face {
	font-family: Merriweather;
	src: url(../assets/fonts/Merriweather-Regular.ttf);
	font-weight: normal;
	font-display: swap;
}

@font-face {
	font-family: Fira Sans;
	src: url(../assets/fonts/FiraSans-Regular.ttf);
	font-weight: normal;
	font-display: swap;
}

@font-face {
	font-family: Fira Sans;
	src: url(../assets/fonts/FiraSans-Medium.ttf);
	font-weight: medium;
	font-display: swap;
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: var(--header-height);
	padding: 0 calc(var(--space) / 2);
	top: 0;
	z-index: 10;

	&__left,
	&__right {
		display: flex;
		align-items: center;
	}

	@media screen and (min-width: 1300px) {
		//Make header sticky for large screens
		position: sticky;
		width: 100%;
	}
}

.main {
	margin: 0 auto;
	padding: 2.5% 15%;

	@media screen and (max-width: 700px) {
		margin: 0;
		padding: 0.5% 5%;
	}
}

.fade-enter-active {
	transition: opacity 0.5s;
}

.fade-enter {
	opacity: 0;
}
</style>
