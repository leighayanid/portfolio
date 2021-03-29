<template>
	<Slide noOverlay right>
		<ToggleTheme class="toggle" />
		<g-link to="/blog">Blog</g-link>
		<g-link to="/portfolio">Work</g-link>
		<g-link to="/resources">Resources</g-link>
		<g-link to="/about">About</g-link>
	</Slide>
</template>

<script>
import { Slide } from "vue-burger-menu";
import ToggleTheme from "./ToggleTheme";
export default {
	components: {
		Slide,
		ToggleTheme,
	},
};
</script>

<style lang="scss">
.bm-burger-button {
	width: 28px;
	height: 24px;
	position: absolute;
	cursor: pointer;

	@media screen and (min-width: 1000px) {
		display: none;
	}
}
.bm-burger-bars {
	background-color: var(--title-color);
}
.line-style {
	position: absolute;
	height: 20%;
	left: 0;
	right: 0;
}
.cross-style {
	position: absolute;
	top: 12px;
	right: 2px;
	cursor: pointer;
}
.bm-cross {
	background: var(--title-color);
}
.bm-cross-button {
	height: 32px;
	width: 32px;
}
.bm-menu {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	background-color: var(--bg-color);
	overflow-x: hidden;
	padding-top: 60px;
	transition: 0.5s;
	box-shadow: rgba(0, 0, 0, 0.3);
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.bm-overlay {
	background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
	color: #b8b7ad;
	margin-left: 10%;
	font-size: 20px;
	font-family: "Fira Sans", sans-serif;
}
.bm-item-list > * {
	display: flex;
	text-decoration: none;
	padding: 0.7em;
}
.bm-item-list > * > span {
	margin-left: 10px;
	font-weight: 700;
	color: white;
}
.toggle {
	position: absolute;
	top: 0;
	right: 0;
}
</style>