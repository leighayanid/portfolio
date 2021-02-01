<template>
	<div>
		<div class="contact">
			<div class="sns">
				<Author />
			</div>
			<div>
				<h1 class="welcome-text">Say hi!</h1>
				<p>Email: leighdinaya@protonmail.com</p>
				<p>Phone: +639266781390</p>
				<form
					name="contact"
					method="post"
					v-on:submit.prevent="handleSubmit"
					action="/success"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					class="form"
				>
					<input type="hidden" name="form-name" value="contact" />
					<p hidden>
						<label> Don’t fill this out: <input name="bot-field" /> </label>
					</p>
					<div class="form-group">
						<label for="name" class="label">Your name</label>
						<input
							type="text"
							id="name"
							v-model="formData.name"
							placeholder="Full name"
							required
						/>
					</div>
					<div class="form-group">
						<label for="email">Your email</label>
						<input
							type="email"
							id="email"
							v-model="formData.email"
							placeholder="Email address"
							required
						/>
					</div>

					<div class="form-group">
						<label for="message">Message</label>
						<textarea
							id="message"
							v-model="formData.message"
							rows="20"
							placeholder="Your message"
							required
						></textarea>
					</div>

					<button type="submit">Submit</button>
				</form>
			</div>
		</div>

		<div class="sns"></div>
	</div>
</template>

<script>
import Author from "~/components/Author.vue";
export default {
	data() {
		return {
			formData: {},
		};
	},
	components: {
		Author,
	},
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(
					(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
				)
				.join("&");
		},
		handleSubmit(e) {
			fetch("/success", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: this.encode({
					"form-name": e.target.getAttribute("name"),
					...this.formData,
				}),
			})
				.then(() => this.$router.push("/success"))
				.catch((error) => alert(error));
		},
	},
};
</script>

<style lang="scss" scoped>
.contact {
	padding-top: 3rem;
	display: flex;

	@media screen and (max-width: 800px) {
		width: 100%;
		margin: 0;
		padding: 0;
		flex-direction: column-reverse;
	}
}
.form {
	margin-top: 1rem;

	&-group {
		display: flex;
		flex-direction: column;
		margin-bottom: calc(var(--space) * 0.5);

		label {
			color: var(--title-color);
			margin-bottom: calc(var(--space / 2));
		}

		input,
		textarea {
			border: 1px solid var(--link-color);
			padding: 0.5rem;
			border-radius: 5px;
			margin-bottom: calc(var(--space) * 0.8);

			@media screen and (max-width: 800px) {
				margin-bottom: calc(var(--space) * 0.5);
			}
		}
	}
	button {
		background: none;
		border: 2px solid var(--body-color);
		border-radius: var(--space);
		color: var(--body-color);
		width: 100%;
		font-size: 1em;
		padding: 0.5em;
		margin-top: 0.5em;

		&:hover {
			cursor: pointer;
			background: var(--title-color);
		}
	}
}

.sns {
	width: 50%;

	@media screen and (max-width: 800px) {
		margin-top: 1rem;
		width: 100%;
	}
}

p {
	margin: 0;
}
</style>
