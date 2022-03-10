import axios from "axios";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export async function getJokes() {
  try {
    const res = await axios.get("https://icanhazdadjoke.com/search", config);
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function searchJoke(text) {
  try {
    const res = await axios.get(
      `https://icanhazdadjoke.com/search?term=${text}`,
      config
    );
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getJokeById(id) {
  try {
    const res = await axios.get(`https://icanhazdadjoke.com/j/${id}`, config);
    return res.data.joke;
  } catch (error) {
    console.error(error);
  }
}
