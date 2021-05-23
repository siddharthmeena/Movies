import axios from "axios";
const KEY = "dbaa7bf07ae236679ffcdb74c18d7bb2";
export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: KEY,
    include_adult: "true",
  },
});
