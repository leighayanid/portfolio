<template>
	<div id="app">
		<Navbar />
		<transition name="fade" appear>
			<main class="main" id="page-wrap">
				<slot />
				<omnibar :data="data" :initial="data.slice(0, 4)">
					<h3 slot="header">Command Palette</h3>
					<template #initial="{ initial }">
						<div
							v-for="item in initial"
							:key="item"
							class="omnibar-search-initial-list"
						>
							<g-link :to="item.url" v-text="item.text"></g-link>
						</div>
					</template>
					<template #results="{ results }">
						<div
							v-for="item in results"
							:key="item"
							class="omnibar-search-results-list"
						>
							<g-link :to="item.url" v-text="item"></g-link>
						</div>
					</template>
				</omnibar>
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
	data() {
		return {
			data: [
				{ id: 1, text: "Blog", url: "/blog" },
				{ id: 2, text: "Work", url: "/portfolio" },
				{ id: 3, text: "Resources", url: "/resources" },
				{ id: 4, text: "About", url: "/about" },
			],
		};
	},
};
</script>

<style lang="scss">
@font-face {
	font-family: Merriweather;
	src: url(../assets/fonts/Merriweather-Regular.woff2);
	font-weight: normal;
	font-display: swap;
}

@font-face {
	font-family: Fira Sans;
	src: url(../assets/fonts/FiraSans-Regular.woff2);
	font-weight: normal;
	font-display: swap;
}

@font-face {
	font-family: Fira Sans;
	src: url(../assets/fonts/FiraSans-Medium.woff2);
	font-weight: medium;
	font-display: swap;
}

::-webkit-scrollbar {
	width: 12px;
	background-color: #eff1f5;
}

::-webkit-scrollbar-track {
	border-radius: 3px;
	background-color: transparent;
}

::-webkit-scrollbar-thumb {
	border-radius: 5px;
	background-color: #515769;
	border: 2px solid #eff1f5;
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
