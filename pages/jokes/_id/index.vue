<template>
  <div>
    <nuxt-link to="/jokes">Back</nuxt-link>
    <h2>{{ joke }}</h2>
    <hr />
    <small>{{ $route.params.id }}</small>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      joke: null,
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        `https://icanhazdadjoke.com/j/${this.$route.params.id}`,
        config
      );
      this.joke = res.data.joke;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style></style>
