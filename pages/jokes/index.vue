<template>
  <div>
    <SearchJokes v-on:search-text="searchText" />
    <Joke
      v-for="joke in jokes"
      :key="joke.id"
      :id="joke.id"
      :joke="joke.joke"
    />
  </div>
</template>

<script>
import Joke from "../../components/Joke";
import SearchJokes from "../../components/SearchJokes";
import { getJokes, searchJoke } from "../../utils/getJokes";

export default {
  components: {
    Joke,
    SearchJokes,
  },
  data() {
    return {
      jokes: [],
    };
  },
  async created() {
    this.jokes = await getJokes();
  },
  methods: {
    async searchText(text) {
      this.jokes = await searchJoke(text);
    },
  },
  head() {
    return {
      title: "Dad Jokes",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place for corny dad jokes",
        },
      ],
    };
  },
};
</script>

<style></style>
