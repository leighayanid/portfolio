<template>
	<div class="welcome">
		<g-image src="~/assets/images/profile.webp" alt="welcome-pic" />
		<div>
			<h1 class="welcome-text">
				Mabuhay! I'm <strong>Leigh Dinaya</strong><br />
				<textra :data="words" :timer="2" :infinite="true" filter="top-bottom" />
				I <strong>build</strong> things for the <strong>web</strong>
			</h1>
			<p class="welcome-intro">
				I'm a <strong>software developer</strong> with a passion for
				<strong>creativity</strong> and <strong>innovation</strong>. I solve
				problems and create solutions for the modern <strong>web</strong>.
			</p>
		</div>
	</div>
</template>

<script>
import Textra from "~/components/Textra.vue";
export default {
	data() {
		return {
			words: [
				"Software Developer",
				"Front-End Developer",
				"Generalist Developer",
				"Lifelong Learner",
			],
		};
	},
	components: {
		Textra,
	},
};
</script>

<style lang="scss" scoped>
.welcome {
	font-family: "Merriweather", serif;
	display: flex;
	margin: 2rem 0;

	@media screen and (max-width: 800px) {
		flex-direction: column;
	}

	img {
		border-radius: 50%;
		width: 20%;
		height: 20%;
		margin-right: 2rem;
		box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);

		@media screen and (max-width: 800px) {
			width: 30%;
			height: 30%;
			margin: 1rem auto;
		}
	}

	&-text {
		width: 100%;
		line-height: 1.5;
		letter-spacing: 1px;

		@media screen and (max-width: 800px) {
			text-align: center;
		}
	}

	&-intro {
		margin-top: 2rem;
		width: 85%;

		@media screen and (max-width: 800px) {
			width: 100%;
		}
	}
}
</style>
