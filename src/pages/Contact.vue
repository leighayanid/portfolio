<template>
  <Layout>
    <div class="search">
      <h1 class="welcome-text">
        Get in touch
      </h1>
      <p>Email: leighdinaya@protonmail.com</p>
      <p>Phone: +639266781390</p>

      <form
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
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
          <input type="text" name="name" v-model="formData.name" />
        </div>
        <div class="form-group">
          <label for="email">Your email</label>
          <input type="email" name="email" v-model="formData.email" />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            name="message"
            v-model="formData.message"
            rows="20"
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>

    <div class="divider"></div>
    <div class="sns">
      <Author />
    </div>
  </Layout>
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
  metaInfo: {
    title: "Contact",
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
      fetch("/", {
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
.search {
  width: 50%;
  margin-top: 1.75em;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
    padding: 0;
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
      border: 1px solid var(--bg-color);
      border-bottom: 2px solid var(--title-color);
      padding: 1rem;
      border-radius: 10px;
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
  margin: 0 auto;
  width: 100%;
  p {
    margin: 0;
  }
}

p {
  margin: 0;
}
</style>
