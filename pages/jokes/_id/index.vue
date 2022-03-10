<template>
  <div>
    <nuxt-link to="/jokes">Back</nuxt-link>
    <h2>{{ joke }}</h2>
    <hr />
    <small>{{ $route.params.id }}</small>
  </div>
</template>

<script>
import { getJokeById } from "../../../utils/getJokes";

export default {
  data() {
    return {
      joke: null,
    };
  },
  async created() {
    this.joke = await getJokeById($route.params.id);
  },
};
</script>

<style></style>
