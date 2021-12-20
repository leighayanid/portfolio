<template>
	<!-- show button if showScrollTop is true-->
	<button @click="scroll()" class="scrollTop">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
			<path d="M0 0h24v24H0z" fill="none" />
		</svg>
	</button>
</template>

<script>
export default {
	methods: {
		scroll() {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.scrollTop {
	width: 40px;
	height: 40px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	background: var(--title-color);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	border: none;
}
</style>
